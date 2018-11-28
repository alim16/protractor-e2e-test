import { expect } from '../config/helpers/chai-imports'
import { defineSupportCode } from 'cucumber'
import { browser, by, element } from 'protractor'
import {userDetailsUK} from '../util/userData'
import {DemoFormIFrame, Contactpage,
        NavBar,SprtPortal,
        SprtSearchList,SprtArticle,
      } from '../pages/'



defineSupportCode(({Given, When, Then}) => {
    Given(/^I visit the OrgVue homepage$/, givenVisitHomepage);
     async function givenVisitHomepage(): Promise<void>{
        let navbar = new NavBar()
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies() // a necessary evil :)
        navbar.navToHomePage()
         await navbar.acceptCookieMessage()
    }

    Given(/^I request a demo$/, requestDemo); 
     async function requestDemo(): Promise<void>{
            let navbar = new NavBar()
            navbar.openRequestDemoForm()

            let iframePage = new DemoFormIFrame();
            browser.switchTo().frame(iframePage.frameSelector)
            
            await expect(iframePage.formHeading.isDisplayed()).to.eventually.equal(true)
    }

    When(/^I fill in my details$/, fillInForm);
     async function fillInForm(): Promise<void>{
        browser.switchTo().defaultContent()

        let iframePage = new DemoFormIFrame()
        browser.switchTo().frame(iframePage.frameSelector)

        await iframePage.fillInform()    
    }

    Then(/^my details will be visible in the form$/,checkForm) ;
     async function checkForm(): Promise<void>{
          // let iframePage = new DemoFormIFrame() 
          // await expect(iframePage.getFirstName()).to.eventually.equal(userDetailsUK.first_name)
          // await expect(iframePage.getSelectedCountry()).to.eventually.equal(userDetailsUK.country)  
         await browser.driver.sleep(2000)
    }

    Given(/^I navigate to the "([^"]*)" page$/, navTo)
     async function navTo(location: string): Promise<void> {
        let navbar = new NavBar()
        navbar.navToPage(location)
        await expect(browser.getCurrentUrl()).to.eventually.equal(`https://orgvue.com/${location}`)
     }

    Then(/^I open the knowledge base$/,openKnowledgeBase) ;
      async function openKnowledgeBase(): Promise<void>{
        let contactPage = new Contactpage()
        contactPage.openKB()
        await expect(browser.getCurrentUrl()).to.eventually.equal("https://support.orgvue.com/hc/en-us")
     }

    Given(/^I search for "([^"]*)"$/, searchFor)
     async function searchFor(searchText: string): Promise<void> {
        let sprtPortal = new SprtPortal()
        sprtPortal.searchFor(searchText)

        let sprtSearch = new  SprtSearchList()
        await expect(sprtSearch.searchResultsList.isDisplayed()).to.eventually.equal(true)
     }

    When(/^I navigate to the first result$/,  openResult)
      async function openResult(): Promise<void> {
        let sprtSearch = new  SprtSearchList()

        sprtSearch.openFirstResult()
        await expect(browser.getCurrentUrl()).to.eventually.include('/hc/en-us/articles/')
      }

    Then(/^Writer is "([^"]*)" and the last update was in "([^"]*)"$/,  verifyArticle)
     async function verifyArticle(author: string, dateYear: string): Promise<void> {
        let sprtArticle = new SprtArticle()

         await expect(sprtArticle.getAuthor()).to.eventually.equal(author)
         await expect(sprtArticle.getUpdateDate()).to.eventually.include(dateYear)
     }
})
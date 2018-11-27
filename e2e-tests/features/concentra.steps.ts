import { expect } from '../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import {Homepage} from '../pages/homePage'
import {DemoFormIFrame} from '../pages/demoFormIframePage'
import {Contactpage, NavBar, SprtPortal, SprtSearchList, SprtArticle} from '../pages/'


defineSupportCode(({Given, When, Then}) => {
    Given(/^I visit the OrgVue homepage$/, givenVisitHomepage);
     async function givenVisitHomepage(): Promise<void>{
        let homepage = new Homepage();
        browser.waitForAngularEnabled(false);
        homepage.navToHomePage()
        await homepage.acceptCookieMessage()
    }

    Given(/^I request a demo$/, requestDemo); 
     async function requestDemo(): Promise<void>{
            let homepage = new Homepage();
            homepage.openRequestDemoForm()

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
        //browser.driver.findElement(by.css('.fancybox-close')).click()
        
        //await homepage.closeIframe()
        await browser.driver.sleep(3000)
  
        // let _el = element(by.css('.fancybox-overlay'));
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
        SprtArticle
        let sprtArticle = new SprtArticle()

         await expect(sprtArticle.getAuthor()).to.eventually.equal(author)
         await expect(sprtArticle.getUpdateDate()).to.eventually.include(dateYear)
     }
})
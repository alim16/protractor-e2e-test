import { expect } from '../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import {Homepage} from '../pages/homePage'
import { DemoFormIFrame} from '../pages/demoFormIframePage'
import {userDetailsUK} from '../util/userData'


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
        // browser.actions().
        // mouseMove(_el).
        // mouseMove({x: 0, y: 0}).
        // doubleClick().
        // perform();
         
        
    }

})
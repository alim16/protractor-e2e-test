import { expect } from '../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import {Homepage} from './pages/homePage';

defineSupportCode(({Given, When, Then}) => {
    Given(/^I visit the OrgVue homepage$/, givenVisitHomepage);
     async function givenVisitHomepage(): Promise<void>{
        // const cookie_accept_btn_selector = '.hs-cookie-notification-position-bottom > div > div > a:first-child'
        let homepage = new Homepage();
        browser.waitForAngularEnabled(false);
        browser.driver.get('https://orgvue.com');
        await homepage.acceptCookieMessage()
        // await browser.findElement(by.css(cookie_accept_btn_selector)).click()
    }

    Given(/^I request a demo$/, requestDemo); 
        // Write code here that turns the phrase above into concrete actions
        async function requestDemo(): Promise<void>{
            const demoLink = element(by.css('.top-menu .last'))


            demoLink.click()
            const formIframe = browser.findElement(by.css('.fancybox-iframe'))
            browser.switchTo().frame(formIframe)
            const formHeading = browser.findElement(by.css('.webform-heading'))

            await expect(formHeading.isDisplayed()).to.eventually.equal(true)

            // await browser.driver.findElement(by.css('.clearfix .hbspt-form')).isDisplayed().then(function (isVisible) {
            //     if (isVisible) {
            //         // element is visible
            //         console.log("it is visible")
            //     } else {
            //         // element is not visible
            //     }
            // });
    }

    When('I fill in my details', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');

        const firstname_field = browser.findElement(by.css('.hs_firstname .input > input'))
        firstname_field.sendKeys('hello')
    });

    Then('my details will be visible in the form', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

})
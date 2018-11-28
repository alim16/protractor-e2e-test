import {browser, element, by} from 'protractor';
import { expect } from '../config/helpers/chai-imports';
import {userDetailsUK} from '../util/userData'


export class DemoFormIFrame {
 frameSelector = browser.findElement(by.css('.fancybox-iframe'))

 formHeading = element(by.css('.webform-heading'))

 cookie_accept_btn_selector = element(by.css('.hs-cookie-notification-position-bottom > div > div > a:first-child'));
 
 firstname_field = element(by.css('.hs_firstname .input > input'))
 lastname_field = element(by.css('.hs_lastname .input > input'))
 jobtitle_field = element(by.css('.hs_jobtitle .input > input'))
 company_field = element(by.css('.hs_company .input > input'))
 email_field = element(by.css('.hs_email .input > input'))
 phone_field = element(by.css('.hs_phone .input > input'))
 country_dropdown = element(by.css('.hs_country .input > select'))


  getFirstName(){
      return this.firstname_field.getText()
  }

  getSelectedCountry(){
      return this.country_dropdown.getText()
  }

 fillInform(){
       this.firstname_field.sendKeys(userDetailsUK.first_name)
       this.lastname_field.sendKeys(userDetailsUK.last_name)
       this.jobtitle_field.sendKeys(userDetailsUK.job_title)
       this.company_field.sendKeys(userDetailsUK.company_name)
       this.email_field.sendKeys(userDetailsUK.email)
       this.phone_field.sendKeys(userDetailsUK.phone_number)
       this.country_dropdown.$(`[value="${userDetailsUK.country}"]`).click();
 }


}
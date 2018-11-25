import {browser, element, by} from 'protractor';


export class Homepage {
//   nameInput = element(by.model('yourName'));
//   greeting = element(by.binding('yourName'));
cookie_accept_btn_selector = element(by.css('.hs-cookie-notification-position-bottom > div > div > a:first-child'));

  navToHomePage() {
    browser.get('https://orgvue.com');
  }

  acceptCookieMessage(): any{
    return this.cookie_accept_btn_selector.click()
  }


//   setName(name: string) {
//     this.nameInput.sendKeys(name);
//   }

  // getGreeting returns a webdriver.promise.Promise.<string>. For simplicity
  // setting the return value to any
//   getGreeting(): any {
//     return this.greeting.getText();
//   }
}
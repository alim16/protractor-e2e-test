import {browser, element, by} from 'protractor';


export class Homepage {
  cookie_accept_btn_selector = element(by.css('.hs-cookie-notification-position-bottom > div > div > a:first-child'));
  demoLink = element(by.css('.top-menu .last'))
  //iframeCloseButton = element(by.css('.fancybox-close'))

  navToHomePage() {
    browser.get('https://orgvue.com');
  }

  openRequestDemoForm(){
    this.demoLink.click()
  }

  acceptCookieMessage(): any{
    return this.cookie_accept_btn_selector.click()
  }

  // closeIframe(){
  //   this.iframeCloseButton.click()
  // }

}
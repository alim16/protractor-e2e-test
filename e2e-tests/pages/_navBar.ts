import {browser, element, by} from 'protractor';


export class NavBar {
  cookieMessageSelector = '.hs-cookie-notification-position-bottom > div > div > a:first-child'
  demoLink = element(by.css('.top-menu .last'))
  cookie_accept_btn_selector = element(by.css(this.cookieMessageSelector));
  navLink = (link:string) => element(by.css(`.main-menu a[href*="/${link}"]`))

  navToHomePage() {
    browser.get('https://orgvue.com');
  }

  navToPage(location:string){
    this.navLink(location).click()
  }

  openRequestDemoForm(){
    this.demoLink.click()
  }

  cookieMessageVisible(){

  }

  acceptCookieMessage(): any{
    return this.cookie_accept_btn_selector.click()
  }

}
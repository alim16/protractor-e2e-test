import {browser, element, by} from 'protractor';


export class NavBar {
  demoLink = element(by.css('.top-menu .last'))
  navLink = (link:string) => element(by.css(`.main-menu a[href*="/${link}"]`))


  openRequestDemoForm(){
    this.demoLink.click()
  }

  navToPage(location:string){
    this.navLink(location).click()
  }

}
import {browser, element, by, protractor} from 'protractor';


export class SprtPortal {
  //url https://support.orgvue.com/hc/en-us
  knowledgeBaseLink = element(by.css('.button a[href*="https://support.orgvue.com/hc/en-us"]'))
  searchInput = element(by.id('query'))

  searchFor(text:string){
    this.searchInput.sendKeys(text)
    this.searchInput.sendKeys(protractor.Key.ENTER)
  }
}
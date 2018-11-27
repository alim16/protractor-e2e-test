import {browser, element, by} from 'protractor';


export class Contactpage {
  knowledgeBaseLink= element(by.css('.button a[href*="https://support.orgvue.com/hc/en-us"]'))

  openKB(){
    this.knowledgeBaseLink.click()
  }

}
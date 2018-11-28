import {browser, element, by} from 'protractor';

export class SprtSearchList{
//url https://support.orgvue.com/hc/en-us/search
 searchResultsList = element(by.css('.search-results-list'))
 searchResultsLinks = element.all(by.css('.search-result .search-result-link'))

 openFirstResult(){
     this.searchResultsLinks.first().click()
 }
}

import {browser, element, by, protractor} from 'protractor';


export class SprtArticle {
author =  element(by.css('.article-author'))
last_updated =  element(by.css('.article-updated'))

    getAuthor(){
        return this.author.getText()
    }

    getUpdateDate(){
       return this.last_updated.getText()
    }
}
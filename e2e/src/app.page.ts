import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCopyrightText(): Promise<string> {
    return element(by.css('.copyright')).getText() as Promise<string>;
  }
}

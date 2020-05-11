import { AppPage } from './app.page';

import { browser, logging } from 'protractor';

describe('FifaChampionsApp', () => {
  let appPage: AppPage;

  beforeEach(() => {
    appPage = new AppPage();
  });

  it('should display title', () => {
    appPage.navigateTo();
    expect(appPage.getCopyrightText()).toEqual('Copyright © 2020 FIFA-Champions');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

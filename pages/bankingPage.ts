import { Locator, Page } from '@playwright/test';

export class BankingPage {
  public static URL = '/banking/';
  public page: Page;
  public mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', {
      name: 'Rock-solid core banking made',
    });
  }
}

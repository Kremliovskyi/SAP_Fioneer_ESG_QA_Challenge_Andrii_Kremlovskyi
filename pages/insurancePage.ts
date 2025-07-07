import { Locator, Page } from '@playwright/test';

export class InsurancePage {
  public static URL = '/insurance/';
  public page: Page;
  public mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', {
      name: 'Insurance solutions to accelerate your business end-to-end',
    });
  }
}

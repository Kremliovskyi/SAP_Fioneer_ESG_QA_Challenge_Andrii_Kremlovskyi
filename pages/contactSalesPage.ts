import { Locator, Page } from '@playwright/test';

export class ContactSalesPage {
  public static URL = '/contact-sales/';
  public page: Page;
  public registrationArticle: Locator;
  public businessEmailInput: Locator;
  public businessEmailInputAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registrationArticle = page
      .getByRole('article')
      .and(page.locator('.registration-block'));
    this.businessEmailInput = this.registrationArticle.getByRole('textbox', {
      name: 'Business email*',
    });
    this.businessEmailInputAlert = page.locator('.hs_email').getByRole('alert');
  }
}

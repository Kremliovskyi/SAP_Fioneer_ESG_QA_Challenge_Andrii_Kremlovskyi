import { Locator, Page } from '@playwright/test';

export class EsgKpiEnginePage {
  public static URL = '/finance-esg/esg-kpi-engine/';
  public page: Page;
  public heroBlockArticle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroBlockArticle = page
      .getByRole('article')
      .and(page.locator('.hero-block'));
  }
}

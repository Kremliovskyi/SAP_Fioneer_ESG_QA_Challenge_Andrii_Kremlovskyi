import { Locator, Page } from '@playwright/test';
import { BankingPage } from '@pages/bankingPage';
import { InsurancePage } from '@pages/insurancePage';
import { EsgKpiEnginePage } from '@pages/esgKpiEnginePage';
import { ContactSalesPage } from '@pages/contactSalesPage';

export class LandingPage {
  public page: Page;
  public heroBlockArticle: Locator;
  public heroBlockGetInTouchButton: Locator;
  public e2eSolutionsForFinancialServicesBlock: Locator;
  public e2eSolutionsBankingArticle: Locator;
  public e2eSolutionsInsuranceArticle: Locator;
  public productsDrowDownButton: Locator;
  public financesAndESGButton: Locator;
  public ESGKPIEngineLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroBlockArticle = page
      .getByRole('article')
      .and(page.locator('.hero-block'));
    this.heroBlockGetInTouchButton =
      this.heroBlockArticle.getByLabel('Get in touch');
    this.e2eSolutionsForFinancialServicesBlock = page
      .getByRole('article')
      .filter({ hasText: 'End-to-end solutions for' });
    this.e2eSolutionsBankingArticle =
      this.e2eSolutionsForFinancialServicesBlock.getByRole('heading', {
        name: 'Banking',
      });
    this.e2eSolutionsInsuranceArticle =
      this.e2eSolutionsForFinancialServicesBlock.getByRole('heading', {
        name: 'Insurance',
      });
    this.productsDrowDownButton = page.getByRole('button', {
      name: 'Products',
    });
    this.financesAndESGButton = page
      .getByRole('button')
      .filter({ hasText: /^Finance & ESG$/ });
    this.ESGKPIEngineLink = page.getByRole('link', { name: 'ESG KPI Engine' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openBankingPage(): Promise<BankingPage> {
    await this.e2eSolutionsBankingArticle.click();
    await this.page.waitForURL(BankingPage.URL);
    return new BankingPage(this.page);
  }

  async openInsurancePage(): Promise<InsurancePage> {
    await this.e2eSolutionsInsuranceArticle.click();
    await this.page.waitForURL(InsurancePage.URL);
    return new InsurancePage(this.page);
  }

  async navigateToESGKPIEnginePage(): Promise<EsgKpiEnginePage> {
    await this.productsDrowDownButton.click();
    await this.financesAndESGButton.click();
    await this.ESGKPIEngineLink.click();
    await this.page.waitForURL(EsgKpiEnginePage.URL);
    return new EsgKpiEnginePage(this.page);
  }

  async openContactSalesFromHeroBlock(): Promise<ContactSalesPage> {
    await this.heroBlockGetInTouchButton.click();
    await this.page.waitForURL(ContactSalesPage.URL);
    return new ContactSalesPage(this.page);
  }
}

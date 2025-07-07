import { expect, test } from '@fixtures';

test.describe('QA Automation Challenge test suite', () => {
  test('End to end solutions for financial services section test', async ({
    landingPage,
  }) => {
    await landingPage.open();

    await expect(
      landingPage.e2eSolutionsForFinancialServicesBlock
    ).toMatchAriaSnapshot({
      name: 'e2eSolutionsForFinancialServicesBlock.yml',
    });
  });

  test('ESG KPI Engine navigation test', async ({ landingPage }) => {
    await landingPage.open();

    const esgKpiEnginePage = await landingPage.navigateToESGKPIEnginePage(); // if we want to test navigation, optionally we can directly open the page
    await expect(esgKpiEnginePage.heroBlockArticle).toMatchAriaSnapshot({
      name: 'heroBlockArticle.yml',
    });
  });

  test('Contact Sales email validation test', async ({ landingPage }) => {
    await landingPage.open();

    const contactSalesPage = await landingPage.openContactSalesFromHeroBlock();
    await contactSalesPage.businessEmailInput.pressSequentially('342323');
    await contactSalesPage.businessEmailInput.blur();
    await expect(contactSalesPage.businessEmailInputAlert).toHaveText(
      'Email must be formatted correctly.'
    );
  });
});

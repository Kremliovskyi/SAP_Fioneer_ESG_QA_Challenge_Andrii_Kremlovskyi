import { test as baseTest } from '@playwright/test';
import { LandingPage } from '@pages/landingPage';

interface MyFixtures {
  landingPage: LandingPage;
}

// Extend the base test with a new fixture
export const test = baseTest.extend<MyFixtures>({
  // The landingPage fixture
  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.open();
    await use(landingPage);
  },
});

// Optionally, export expect so tests can import from this file
export { expect } from '@playwright/test';

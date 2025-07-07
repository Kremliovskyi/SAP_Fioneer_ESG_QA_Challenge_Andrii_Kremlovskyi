import { test as baseTest } from '@playwright/test';
import { LandingPage } from '@pages/landingPage';

interface MyFixtures {
  landingPage: LandingPage;
}

export const test = baseTest.extend<MyFixtures>({
  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.open();
    await use(landingPage);
  },
});

export { expect } from '@playwright/test';

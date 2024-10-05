// Import base test functionality from Playwright
import { test as base } from "@playwright/test";
// Import custom page object for application-specific actions
import BaseTest from '../pages/app.page';

// Define type for test fixtures
type Fixtures = {
    baseTest: BaseTest; // Instance of BaseTest
}

// Extend the base Playwright test to include custom fixture
export const test = base.extend<Fixtures>({
    // Define the baseTest fixture
    baseTest: async ({page, baseURL}, use) => {
        const baseTest = new BaseTest(page); // Create BaseTest instance
        await page.goto(`${baseURL}`); // Navigate to base URL
        await use(baseTest); // Make baseTest available for tests
    },
});

// Re-export expect function for assertions
export { expect } from '@playwright/test';
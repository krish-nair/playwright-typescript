// Import base test functionality from Playwright
import { test as base } from "@playwright/test";
// Import custom page object for application-specific actions
import BaseTest from './app.page';
import LoginPage from "./login.page";
import ProductsPage from "./products.page";
import CartPage from "./cart.page";
import SingleProductPage from "./singleProduct.page";
import CheckoutPage from "./checkout.page";
import productsPage from "./products.page";

// Define type for test fixtures
type Fixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    singleProductPage: SingleProductPage;
    checkoutPage: CheckoutPage;
}

// Extend the base Playwright test to include custom fixture
export const test = base.extend<Fixtures>({
    // Define the baseTest fixture
    loginPage: async ({page, baseURL}, use) =>{
        await page.goto(`${baseURL}`);
        await use(new LoginPage(page));
    },
    productsPage: async ({page}, use) =>{
        await use(new ProductsPage(page));
    },
    singleProductPage: async ({page}, use) =>{
        await use(new SingleProductPage(page));
    }
});

// Re-export expect function for assertions
export { expect } from '@playwright/test';
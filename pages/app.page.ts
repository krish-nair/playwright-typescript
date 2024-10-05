import { Page } from '@playwright/test';
import LoginPage from './login.page';
import ProductsPage from './products.page';
import SingleProductPage from './singleProduct.page';
import CartPage from './cart.page';

// Define the BaseTest class to encapsulate page interactions
export default class BaseTest {
    // Define properties for the current page and various page objects
    public readonly page: Page; // Current Playwright page
    public readonly loginPage: LoginPage; // Instance for login page interactions
    public readonly productPage: ProductsPage; // Instance for product listings
    public readonly singleProductPage: SingleProductPage; // Instance for single product details
    public readonly cartPage: CartPage; // Instance for shopping cart interactions

    constructor(page: Page) {
        this.page = page; // Assign the current page
        this.loginPage = new LoginPage(page); // Initialize login page object
        this.productPage = new ProductsPage(page); // Initialize products page object
        this.singleProductPage = new SingleProductPage(page); // Initialize single product page object
        this.cartPage = new CartPage(page); // Initialize cart page object
    }
}

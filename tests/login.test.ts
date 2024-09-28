import {chromium, expect, test} from "@playwright/test"

test("Login test demo", async () => {
    const browser = await chromium.launch({
        slowMo: 2
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.getByText("My account").nth(1).hover();
    // await page.click("text = Login");
    await page.click("'Login'");

    await page.fill("input[name='email']", "admin@xyz.com");
    await page.fill("input[name='password']", "123456!");
    await page.click("input[value='Login']");
    await page.locator("div.list-group a").last().click();

    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('Account Logout');

    // to create new context

    // const newContext = await browser.newContext();
    // const newPage = await newContext.newPage();

    // await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");




})
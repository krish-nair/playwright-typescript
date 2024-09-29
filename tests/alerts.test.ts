import test, { expect } from "@playwright/test";
import exp from "constants";

test.skip("verify JavaScript alerts", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    });

    await page.locator("button:has-text('Click Me')").nth(1).click();
    await expect(page.locator("p#confirm-demo")).toContainText("Cancel!");

});

test("prompt alert", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async(alert) =>{
        const text = alert.defaultValue();
        await alert.accept("Test");
    });

    await page.locator("button:has-text('Click Me')").nth(2).click();
    await page.waitForTimeout(3000);
    await expect(page.locator("p#prompt-demo")).toContainText("'Test'");
});
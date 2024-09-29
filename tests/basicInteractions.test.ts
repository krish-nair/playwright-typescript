import {expect, test} from "@playwright/test";

test.skip("verify text", async ({page}) => {
    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    // page.getByPlaceholder("Please enter your Message").fill("hello");
    const message = page.getByPlaceholder("Please enter your Message");
    await message.scrollIntoViewIfNeeded();
    console.log('Beofre entering the value: '+ await message.inputValue());
    await message.fill("Hello");
    console.log('After entering the value: '+ await message.inputValue());
    page.locator("#showInput").click();
});

test("verify addition", async ({page}) => {
    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const num1Field = page.locator("input#sum1");
    const num2Field = page.locator("input#sum2");
    const sumButton = page.locator("//button[text()='Get Sum']");
    const sumValue = page.locator("p#addmessage");

    let num1 = 125;
    let num2 = 528;
    let result = num1 + num2;

    await num1Field.fill("" + num1);
    await num2Field.fill("" + num2);
    await sumButton.click();

    console.log("Sum value = " + await sumValue.textContent());
    await expect(sumValue).toHaveText(""+ result);


});


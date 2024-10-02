import { test } from "@playwright/test";

test("jquery dropdown", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.locator("span[role='presentation']").nth(0).click();
    page.getByRole('treeitem', { name: 'Denmark' }).click();

    await selectCountry('India');
    await selectCountry('Australia');

    async function selectCountry(countryName: string){
        await page.locator("#country+span").nth(0).click();
        await page.getByRole('treeitem', { name: countryName }).click();
    };
    await page.pause();
});
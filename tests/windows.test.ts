import { expect, test } from "@playwright/test";

test("Interact with multiple windows", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("text=Follow Twitter & Facebook")
    ]);

    const pages = multiPage.context().pages();

    pages.forEach(tab =>{
        console.log(tab.url());
    })

    console.log("total number of pages open: " + pages.length);



    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     // page.click("text=Follow On Twitter"),
    //     page.click("text=Like us On Facebook")
    // ]);

    // expect(newWindow.url()).toContain("x.com");
});
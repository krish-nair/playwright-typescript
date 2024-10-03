import { expect, Page, test } from "@playwright/test";
import exp from "constants";



test("Interact with multiple windows", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("text=Follow Twitter & Facebook")
    ]);

    await multiPage.waitForLoadState();
    const pages = multiPage.context().pages();

    pages.forEach(tab =>{
        console.log(tab.url());
    })

    console.log("total number of pages open: " + pages.length);

    let facebook: Page;
    for(let i = 0; i < pages.length; i++){
        const url = pages[i].url();
        console.log(url);
        if(url == "https://www.facebook.com/lambdatest/"){
            facebook = pages[i];
        }
        
    }

    const text = await facebook.textContent("'See more on Facebook'");

    console.log(text);

    expect(text).toContain("Facebook");

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     // page.click("text=Follow On Twitter"),
    //     page.click("text=Like us On Facebook")
    // ]);

    // expect(newWindow.url()).toContain("x.com");
    // await page.pause();
});
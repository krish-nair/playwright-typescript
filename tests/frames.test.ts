import { expect, test } from "@playwright/test";

test("Interactions with frames", async({page})=>{
    await page.goto("https://letcode.in/frame");
    const frames = page.frames();

    console.log("All frames in the websites: " + frames.length);

    //One way of finding the frame:
    // const demoFrame = page.frame("firstFr");
    // await demoFrame?.fill("[placeholder='Enter name']", "Krish");
    // await demoFrame?.fill("input[name='lname']", "Tester");

    //Another way of finding the frame:
    const demoFrame = page.frameLocator("#firstFr");
    await demoFrame.locator("[placeholder='Enter name']").fill("Krish");
    await demoFrame.locator("input[name='lname']").fill("Tester");


    const innerFrame = demoFrame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("test@test.com");

    await demoFrame.locator("input[name='lname']").fill("Ninja");
    expect(await demoFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");

});
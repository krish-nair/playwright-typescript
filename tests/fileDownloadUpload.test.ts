import {expect, test} from "@playwright/test";

test.skip("File download demo", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");

    const textArea = page.locator("#textbox");
    const generateFileButton = page.getByRole("button", {name: "Generate File"});
    const downloadButton = page.getByRole("link", {name: "Download"});

    await textArea.type("Hello There! I am here...");
    await generateFileButton.click();

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        downloadButton.click()
    ]);

    const fileName = download.suggestedFilename();
    await download.saveAs("./downloads/"+fileName);

    //await page.pause();
});

test("File upload demo", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/upload-file-demo");
    await page.setInputFiles("#file", ["D:/MyProjects/html-css/Orbit/images/stars.png"]);
    await expect.soft(page.locator("#error")).toBeVisible();

});
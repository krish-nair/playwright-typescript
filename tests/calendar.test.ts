import {test} from "@playwright/test";
import moment from "moment";

test.skip("Interaction with calendar", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    let date = "2024-06-10";

    await page.fill("#birthday", date);

    await page.pause();
});

test.skip("Interact with calendar using moment package", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await page.getByPlaceholder("Start date").click();

    const previousButton = page.locator("div.datepicker-days table.table-condensed thead tr+tr th.prev");
    const nextButton = page.locator("div.datepicker-days table.table-condensed thead tr+tr th.next");
    const monthYearSwitch = page.locator("div.datepicker-days table.table-condensed thead tr+tr th.datepicker-switch");+


    await dateToSelect("December 2024");

    async function dateToSelect(date: string) {
    const targetMonthYear = date; 
    const isBeforeCurrentMonth = moment(date, "MMMM YYYY").isBefore();

    let currentMonthYear = await monthYearSwitch.textContent();

    while (currentMonthYear !== targetMonthYear) {
        if (isBeforeCurrentMonth) {
            await previousButton.click();
        } else {
            await nextButton.click();
        }
        
        currentMonthYear = await monthYearSwitch.textContent(); // Update the current month/year
    }
    console.log(currentMonthYear);
}

});

test("Calendar function", async ({page}) => {
    // Replace with your target URL
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"); 

    // Wait for the datepicker to load
    await page.waitForLoadState();
    await page.getByPlaceholder("Start date").click();
    await selectDate("2024-10-02");

    async function selectDate(targetDate:string) {
        // Extract the desired month/year from the target date
    const dateMoment = moment(targetDate, 'YYYY-MM-DD');
    const targetMonthYear = dateMoment.format('MMMM YYYY');
    const targetDay = dateMoment.day();

    const monthYearText = await page.locator("div.datepicker-days table.table-condensed thead tr+tr th.datepicker-switch").innerText();


    // Loop to navigate to the correct month/year
    while (monthYearText !== targetMonthYear) {
        console.log("monthYearText:"+monthYearText);
        console.log("targetMonthYear:"+targetMonthYear);

        // if (monthYearText === targetMonthYear) {
        //     break; // We are in the right month/year
        // }

        const isBefore = moment(monthYearText, 'MMMM YYYY').isBefore(dateMoment);
        const isAfter = moment(monthYearText, 'MMMM YYYY').isAfter(dateMoment);
        if (isBefore) {
            await page.click("div.datepicker-days table.table-condensed thead tr+tr th.next"); // Go to next month
        } else  {
            await page.click("div.datepicker-days table.table-condensed thead tr+tr th.prev"); // Go to previous month
        } 
    }

    // Click on the desired day
    const daySelector = `div.datepicker-days table.table-condensed tbody tr td.day("${targetDay}")`;
    await page.click(daySelector);
}
    await page.pause();
});
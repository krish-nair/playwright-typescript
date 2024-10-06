import { PlaywrightTestConfig } from '@playwright/test';
import { channel } from 'diagnostics_channel';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/calendar.test.ts"],
    projects: [
        {
            use: {
                baseURL: "https://www.saucedemo.com/",
                channel: "chrome",
                viewport: { width: 1800, height: 980 },
                headless: false,
                screenshot: "only-on-failure",
                video: "retain-on-failure",
            },

        }
    ],
    // use: {
    //     viewport: { width: 1600, height: 1200 },
    //     headless: false,
    //     screenshot: "only-on-failure",
    //     video: "retain-on-failure",
        // launchOptions: {
        //     slowMo: 3000
        // }
    // },
    fullyParallel: true,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReports.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;

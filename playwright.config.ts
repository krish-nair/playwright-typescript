import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/calendar.test.ts"],
    use: {
        viewport: { width: 1600, height: 1200 },
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        // launchOptions: {
        //     slowMo: 3000
        // }
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReports.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;

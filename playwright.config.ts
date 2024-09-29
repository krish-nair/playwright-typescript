import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/basicInteractions.test.ts"],
    use: {
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReports.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;

import { Page } from '@playwright/test';

export default class LoginPage{
    private url = "https://www.saucedemo.com/";

    constructor(public page: Page){
    }


    async getPageHeading(): Promise<string> {
        const locator = this.page.locator("span.title");
        await locator.waitFor({ state: 'visible' });
        return await locator.innerText();
    }
    

    async login(uname: string, pwd: string){
        await this.page.locator("#user-name").fill(uname);
        await this.page.fill("#password", pwd);
        await this.page.click("#login-button");
    }

    async navigateTo(){
        await this.page.goto(this.url);
    }
}
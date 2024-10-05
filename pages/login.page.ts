import { Locator, Page } from '@playwright/test';

export default class LoginPage{
    private username: Locator = this.page.locator("#user-name");
    private password: Locator = this.page.locator("#password");
    private loginButton: Locator = this.page.locator("#login-button");

    constructor(private page: Page){}



    async getPageHeading(): Promise<string> {
        const locator = this.page.locator("span.title");
        await locator.waitFor({ state: 'visible' });
        return await locator.innerText();
    }
    

    async login(uname: string, pwd: string){
        await this.username.fill(uname);
        await this.password.fill(pwd);
        await this.loginButton.click();
    }

    async navigateTo(url: string){
        await this.page.goto(url);
    }
}
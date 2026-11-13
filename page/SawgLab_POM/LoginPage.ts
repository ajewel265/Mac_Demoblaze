import { Page, Locator } from "@playwright/test"


export class LoginPage {

    readonly page: Page       // private or readonly
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page            // used because of url # line 19
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginButton = page.locator("#login-button")
        this.errorMessage = page.locator('[data-test="error"]')
    }
    async gotoLoginPage() {   // just to use url here, doing page:Page
        await this.page.goto('https://www.saucedemo.com/')
    }

    async DoLogin(Username: string, Password: string) {

        await this.username.fill(Username)
        await this.password.fill(Password)
        await this.loginButton.click()
    }

}

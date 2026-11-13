
// Import-->Class-->Locator-->Constructor-->Initilize locators-->Method & Action
// 1. Import 
import { Page, Locator } from "@playwright/test"

// 2. Create a class
export class LoginPage {           // used export, so it can be called to (.spec.ts)
    // 3. Store Locator             
    private LogIn: Locator          // used Private, so the variable 
    // can't be access outside of the class
    private usernameTextbox: Locator
    private passwordTextbox: Locator
    private loginBtn: Locator
    //4. Use Constructor to store locator value; 
    // Declared page variable, using Page inside the Constructor
    constructor(page: Page) {
        // 5. Initialize locator
        this.LogIn = page.getByRole('link', { name: 'Log in', exact: true })
        this.usernameTextbox = page.locator("#loginusername")
        this.passwordTextbox = page.locator("#loginpassword")
        this.loginBtn = page.getByRole('button', { name: 'Log in', exact: true }) // <button>
    }
    // 6. Use Method and Action
    async DoLogin(Username: string, Password: string) {
        //method MethodName(Argument : Type)
        await this.LogIn.click()
        await this.usernameTextbox.fill(Username)
        await this.passwordTextbox.fill(Password)
        await this.loginBtn.click()
    }
}


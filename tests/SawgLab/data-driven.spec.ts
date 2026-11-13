// Data-Driven testing using json file
// Import JSON Data →Loop →Check Run Status→Test →Page Object →Navigate to Login→ 
// Enter Dynamic Credentials → Check Expected Result →Assert Outcome

import { expect, test } from '@playwright/test'
import { LoginPage } from '../../page/SwagLab_POM/LoginPage'
import loginData from '../../test-data/SawgLab/logindata.data-driven.json'

loginData.forEach((data) => {

    if (!data.run) return;  // if data not(!) true, skip (return) disabled records

    test(`Login test- ${data.username}`, async ({ page }) => {
        // ${data.username}; dynamin test created per user

        const loginPage = new LoginPage(page)
        await loginPage.gotoLoginPage()
        await loginPage.DoLogin(data.username, data.password)

        if (data.expected === "success") {  // strict equality ===
            // assertion based on expected-> success URL or error message
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }
        else {
            await expect(loginPage.errorMessage).toBeVisible()
        }
    })
})
import { expect, test } from '@playwright/test'
import { LoginPage } from '../../page/SwagLab_POM/LoginPage'
import loginData from '../../test-data/SawgLab/loginData.json'


test('vaild login test', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.DoLogin(
        loginData.vaild_User.username,
        loginData.vaild_User.password
    )
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test('invaild login test', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.DoLogin(
        loginData.invalid_user.username,
        loginData.invalid_user.password
    )
    await expect(loginPage.errorMessage).toBeVisible()
})
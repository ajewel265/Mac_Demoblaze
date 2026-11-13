import{test,expect} from '@playwright/test'
import { LoginPage } from '../../page/SwagLab_POM/LoginPage'


test('vaild login test', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.DoLogin('standard_user', 'secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
}); 
// By using 'forEach' loop for Dynamic Data-Driven Test
// Import Playwright, the page object, and the CSV reader
import { expect, test } from '@playwright/test'
import { LoginPage } from '../../page/SawgLab_POM/LoginPage'
import { readCSV } from '../utils/csvReader'

// Read the CSV file into loginData
const loginData = readCSV('test-data/SawgLab/loginData.csv') //'copy relative path'
// Loop through CSV data /records and register a separate test for each record
loginData.forEach((data: any) => {
    test(`Login test- ${data.username}`, async ({ page }) => {

        //Calling the loginPage class.
        const loginPage = new LoginPage(page)
        await loginPage.gotoLoginPage()
        //Entering username and password through csv data.
        await loginPage.DoLogin(data.username, data.password)

        if (data.expected === "success") {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }
        else {
            await expect(loginPage.errorMessage).toBeVisible()
        }
    })
})

//Tips:
// {readCSV} -thisfunction reads the CSV file and returns its data for the tests.
// (data:any) meaning any type of variable

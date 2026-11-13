// CSV Data-Driven Testing — Using for...of Loop
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { expect, test } from '@playwright/test'
import { LoginPage } from '../../page/SwagLab_POM/LoginPage'

// Store the absolute path of the CSV file in csvPath
const csvPath = path.resolve(__dirname, '../../test-data/SawgLab/loginData.csv')
// Read the CSV file and convert its contents into TypeScript records
const records = parse(fs.readFileSync(csvPath), {

    // Use the first row as column headers (username, password, expected)
    columns: true, 
    skip_empty_lines: true // Ignore empty lines in the CSV file
});

// Iterate through each record (row) in the CSV data
for (const record of records as any[]) {
    
    test(`Login test: ${record.username}`, async ({ page }) => {
        // POM
        const loginPage = new LoginPage(page)
        await loginPage.gotoLoginPage()
        await loginPage.DoLogin(record.username, record.password)

        if (record.expected === "success") {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        } else {
            await expect(loginPage.errorMessage).toBeVisible()
        }
    })
}
/*

Note: 
Import → Resolve CSV Path → Read File → Parse Data → Loop Through Records 
→ Create Test → Login → Check Expected Result → Assert Result
Import Libraries: Import fs to read the file, 
path to create the file path, parse to process CSV data, 
Playwright's test and expect, and the LoginPage class.
Set CSV Path: Use path.resolve() to create the absolute path of the CSV file.
Read and Parse CSV: Use fs.readFileSync() to read the file 
and parse() to convert the CSV content into records.

Configure CSV Parsing: Set columns: true to use the first row as column headers 
and skip_empty_lines: true to ignore empty lines.

Loop Through Records: Use a for...of loop to iterate through each CSV record.

Create Dynamic Test: Use test() to register a separate test for each record, 
using the current username in the test name.

Perform Login: Create a LoginPage object, open the login page, 
and enter the username and password from the current CSV record.
Validate Result: Check record.expected. If it is "success", 
verify the inventory page URL; otherwise, verify that the error message is visible.





--------------------------------------------------------------------
records.forEach((record: any) => {
    test(`Login test: ${record.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page)
        await loginPage.gotoLoginPage()
        await loginPage.DoLogin(record.username, record.password)

        if (record.expected === "success") {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }
        else {
            await expect(loginPage.errorMessage).toBeVisible()
        }

    })
})

    
*/

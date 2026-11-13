// Requirements: 
// data driven test
// using small set of positive & negative login data which has valid & invalid credentials;
// if successful login then logout should be appear which needs to verify;
// if unsuccessful login then error message should be visibla which needs to verify
// use if else statement 
//---------------------------------------------------------------------------------------
// multiple row needs to use two dimensional array [][]
// using for-of loop bcoz forEach loop works only single dimensional array
// title should be dynamic, for dynamic use back tick `` operator
//test name should be dynamic to do that use `` $



import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
const logInTestData: string[][] =
    [
        ["laura.taylor1234@example.com", "test123", "valid"],
        ["invaliduser@example.com", "test321", "invalid"],
        ["validuser@example.com", "testabc", "invalid"],
        ["", "", "invalid"]
    ];



for (const [email, password, validity] of logInTestData) {

    //test.describe('Login data driven test', async () => { // could do without .describe


        test(`Login test for ${email} and ${password}`, async ({ page }) => {


            await page.goto('https://demowebshop.tricentis.com/login');
            // fill login form
            await page.locator('#Email').fill(email)
            await page.locator('#Password').fill(password)
            await page.locator('input[value="Log in"]').click();

            if (validity.toLowerCase() === 'valid') { //toLowerCase() is used here to make the comparison case-insensitive.

                // Assert logout link visible - indicats successful login
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 })

            } else {
                // Assert error message is visible
                const errorMessage = page.locator('.validation-summary-errors');
                await expect(errorMessage).toBeVisible({ timeout: 5000 });

                // assert still in login page

                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');

            }


        })
    //})
}





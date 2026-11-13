import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/SawgLab_POM/LoginPage'
import fs from 'fs';
import * as xlsx from 'xlsx'; // * represents all the exports from the xlsx module.


// Loaded the excel file
// file-->workbook-->sheet--> rows & columns--> convert to JSON
const excelFilePath = 'test-data/SawgLab/loginData.xlsx';
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0]; // SheetName[0] is method that returns all the sheet names from the workbook.
const worksheet = workbook.Sheets[sheetName]; // get the specific sheet from the workbook.

// Convert sheet into JSON format
const loginData: any[] = xlsx.utils.sheet_to_json(worksheet); // Convert worksheet rows into an array of objects
console.log(loginData);

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
});



import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/SawgLab_POM/LoginPage'
import * as xlsx from 'xlsx';
import path from 'path';

// Resolve the Excel file path
const excelFilePath = path.resolve('test-data/SawgLab/loginData.xlsx');
// Read the Excel workbook
const workbook = xlsx.readFile(excelFilePath);
// Get the first worksheet name
const sheetName = workbook.SheetNames[0];
// Get the worksheet
const worksheet = workbook.Sheets[sheetName];
// Convert worksheet data into JSON objects

const loginData: any[] = xlsx.utils.sheet_to_json(worksheet);
console.log(loginData);

loginData.forEach((data: any, index: number) => {
  test(`Login test ${index + 1} - ${data.username}`, async ({ page }) => {


        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.DoLogin(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL(
                'https://www.saucedemo.com/inventory.html'
            );
        } else {
            await expect(loginPage.errorMessage).toBeVisible();
        }
    });
});

# PAGE OBJECT MODEL (POM)

---

# STEP 1: LoginPage.ts

---

# Import -> Class->Locator->Constructor->Initialize Locators->Method/Action

1. LoginPage.ts (Page Object Model)
2. Import Locator and Page from Playwright.
3. Create a LoginPage CLASS.
4. Declare LOCATORS for the username field, password field and login button.
5. Use the CONSTRUCTOR to receive and store the page object.
6. Initialize the locators inside the constructor.
7. Create an ASYNC method called doLogin().
8. Accept username and password as PARAMETERS.
9. Use Playwright actions to enter the credentials and click the login button.
10. Keep the page interactions inside the Page Object Model, while the test data is handled separately.

# STEP 2: LoginPage.spec.ts

---

# Import → Test → Create Page Object → Navigate to URL → Perform Login → Assert Expected Result

1. Imports the required testing functions and Page Object Model class.
2. test(): Defines a test case, along with "async({page})=>"
3. const: Declares a variable that cannot be reassigned.
4. gotoLoginPage(): Navigates to the login page
5. DoLogin(): Performs the login action using the supplied credentials.
6. toHaveURL(): Checks whether the browser has navigated to the expected URL.

---

# DATA-DRIVEN AND DYNAMIC DATA-DRIVEN

---

# JSON DATA-DRIVEN: data-droiven.spec.ts

---

# Import→ Loop → Check Run Status → Test() → POM → Navigate to Login → Enter Dynamic Credentials → Check Expected Result → Assert Outcome

- STEP 1: Import {libraries;loginPage; Json data}
- STEP 2: Loop - Use forEach() to go through each record in the JSON file;
  Each record is stored in the variable 'data'; Access the values using
  data.username, data.password, data.expected and data.run.
- STEP 3: Check Run Status- Check whether data.run is true or false; If false, skip that record using return; If true, create and run the test for that record.
- STEP 4: Create Dynamic test() to create a test for each enabled record; Use the username in the test name to identify each test; Each enabled record creates a separate test case.
- STEP 5: Perform Login by using POM;
- STEP 6: Verify the Result

# TIPS:

- forEach() — Goes through each data record.
- data — Represents one record.
- data.username — Gets the username.
- data.password — Gets the password.
- data.run — Decides whether to run the test.
- return — Skips the current record/ data when its run status is falsy.
- ${data.username} — Adds the username to the test name.
- === (strict equality)

# if (data.expected === "success")

- if — Checks a condition; data.expected — Gets the expected result from the current JSON data record; === Checks whether two values are strictly equal; "success" — The expected result for a successful login.

# test(`Login test- ${data.username}`, async () => {})

- Login test- test name.
- $— Dynamically adds the username from the current JSON data record to the test name.
- `` (Backticks) — Used to create a template literal in JavaScript/TypeScript; It allow to combine normal text with variables.

---

# NOTE FOR CSV & XLSX:

---

# CSV

1. Install required libraries - npm install csv-parse
2. Create a csv data set, under test-data folder
3. Create a csvReader.ts- file, under utils folder

# XLSX:

1. Install required libraries       - npm install xlsx
   This command for TypeScript      - npm install -D @types/xlsx
2. Create a xlsx data set, under test-data folder
3. Create a excelReader.ts- file, under utils folder

---

# CSV - DYNAMIC DATA-DRIVEN

---

# STEP 1: Utils-> Read CSV Data (csvReader.ts):

---

1. Import 'fs' to read the file, and 'parse' from csv-parse/sync
   to parse the CSV content
2. Accept the CSV file path as a parameter in the readCSV() function.
3. Use fs.readFileSync() to read the CSV file content.
4. Use the parse() function to convert the CSV content into usable records.
5. Enable Column Headers:true to use the first row as column headers and map each   row's values to the corresponding header.
6. Skip Empty Lines: true to ignore empty lines in the CSV file.
7. Store the parsed data in the records variable as an array of objects.
8. Use return records to make the parsed data available
   to the calling test file or function.

# forEach() vs for...of

- forEach() — Executes a callback function for each record.
  for...of — Iterates through each record directly.
- Both approaches can register a separate Playwright test for each CSV record.

# STEP 2.1: Test_csv.spec.ts (Dynamic Data-Driven Test)

---

- Import → Read CSV → Loop → Create Test → Login
  → Check Expected Result → Assert Result

# Using CSV File — forEach() Loop- How the complete test works

1. Import: Import the LoginPage class and the readCSV function.
2. Read CSV Data: Use the CSV file path to read and parse the data into loginData.
3. Loop Through Records: Use forEach() to loop through each CSV record
   and register a separate test for each record.
4. Create Dynamic Test: Use test() to create a unique test name
   using the username from the current record(more details_check_ json data-driven)
5. Perform Login: Create a LoginPage object, open the login page,
   and enter the username and password from the current CSV record.
6. Validate Result: Check the expected result. If it is "success", verify with URL;
   otherwise, verify that the error message is visible.

# Tips:

- {readCSV} -thisfunction reads the CSV file and returns its data for the tests.
- (data:any) meaning any type of variable

---

starts from here ......

# STEP 2.2: Test_csv.spec.ts (Dynamic Data-Driven Test)

# Using for...of Loop- How the complete test works

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

-------------------------------------------------------------------------------------

# EXCEL FILE: (to do that need to convert to json format# xlsx model) 
- INSTALL: --install requires Libraries - npm install xlsx
           -- npm install -D@types/xlsx - this is for TypeScript
- In test_data folder, create a excel file LoginData.xlsx and add data
- In Utils folder create Excel Utility Function # excelReader.ts
(this will convert the data into JSON key-value pair to parse through the data)

# Utils->Read Excel data (excelReader.ts)
import * as XLSX from 'xlsx';
Imports the XLSX library to read Excel files.
import path from 'path';
Imports the Node.js path module to handle file paths.
export function readExcelFile(filePath: string, sheetName: string)
Creates and exports a reusable function that accepts the Excel file path and worksheet name.
const fullPath = path.resolve(filePath);
Converts the given file path into an absolute path.
console.log('Full path is', fullPath);
Prints the full file path to the console for debugging.
const workbook = XLSX.readFile(fullPath);
Reads the Excel file and loads the workbook.
const sheet = workbook.Sheets[sheetName];
Selects the required worksheet by name.
const data = XLSX.utils.sheet_to_json(sheet);
Converts worksheet rows into an array of JavaScript objects, using the header row as property names by default.

return data;

Returns the extracted data so it can be used in Playwright tests.

}

Closes the function.

Workflow: Import Libraries → Resolve File Path → Read Workbook → Select Worksheet → Convert Rows to JSON Objects → Return Data.


# Test_xlsx.spec.ts (XLSX Dynamic Data-Driven Test)

---
Playwright XLSX Data-Driven Testing Workflow

Workflow 1: Test Execution

Import Libraries → Read XLSX File → Extract Test Data → Loop Through Rows → Create Test Cases → Navigate to Login Page → Enter Credentials → Click Login → Check Expected Result → Assert Actual Result




1. import {Excel library, LoginPage class, Excel-reading utility function.
2. Load the Excel workbook.
3. Select the required worksheet.
4. Extract worksheet data.
5. Parse rows into usable records.
6. Store test data in an array of objects.
7. Create a separate Playwright test for each data record.
8. Navigate to the application URL.
9. Create a Page Object instance using new LoginPage(page).
10. Retrieve the username, password, and expected result.
11. Pass username and password to await loginPage.doLogin(username, password).
12. Perform the login actions.
13. Capture the actual application result.
14. Validate the actual result against the expected result using expect().
15. Execute the tests.

Generate and review the Playwright test report.
- Import → Read XLSX → Loop Through Rows → Create Test → Login → Check Expected Result → Assert Result
- Create XLSX File → Import Excel Library → Load Workbook → Select Worksheet → Extract Data → Parse Rows → Store Records → Create Page Object → Loop Through Data → Pass Parameters → Perform Actions → Assert Results → Generate Report

1. Import the required Playwright testing libraries.
2. Import the LoginPage class.
3. Import or use a utility function to read the Excel file.
4. Load the workbook and select the required worksheet.
5. Extract and parse the worksheet data into usable records.
6. Make the test data available before the test cases execute.
7. Create the required Playwright test or tests.
8. Navigate to the application URL.
9. Create a LoginPage object using new LoginPage(page).
10. Use a LOOP to iterate through each Excel data record.
11. Retrieve the username, password and expected result from the current record.
12. Pass the username and password to await loginPage.doLogin().
13. Validate the actual application result against the expected result using assertions.
----------------------------------------------------------------------------------------
# Playwright API Testing Notes (https://www.youtube.com/watch?v=EEjyLfp6DoQ)
----------------------------------------------------------------------------------------
# GET REQUEST: 

Objective: Retrieve data from an API and validate the response.

1. Import test and expect from @playwright/test.
2. Create a 'test' using the request fixture provided by Playwright.
3. Send a 'GET' request and store the response in a variable.
4. Verify that the response status code is 200 OK.
5. Check that the response body contains the expected data or text.
6. Print the response body to the console.
7. Run the test and verify the results.

# POST REQUEST: 

Objective: Create a new resource by sending data to an API.

1. Import test and expect from @playwright/test.
2. Create a test using the request fixture.
3. Send a POST request with the required request body and store the response in a variable.
4. Verify that the response status code is 201 
4. Validate the response body, including the expected data or confirmation message.
5. Print the response body to the console.
6. Run the test and verify the results.

# PUT REQUEST:

Objective: Update an existing resource through an API.

1. Import test and expect from @playwright/test.
2. Create a test using the request fixture.
3. Send a PUT request with URL along with request body. Store the response in a variable.
4. Verify the expected status code, commonly 200
5. If the response contains a body, validate the updated data or expected text.
6. Print the response body to the console
7. Run the test and verify the results.

 # DELETE REQUEST: 

Objective: Delete an existing resource through an API.

1. Import test and expect from @playwright/test.
2. Create a test using the request fixture.
3. Send a DELETE request to the resource URL and store the response in a variable.
4. Verify the expected status code, commonly 204
-------------------------------------------------------------------------------------------





# Allure Report

# Recording

# Config.ts

---
# Demoblaze
# DemoBlaze_Mac

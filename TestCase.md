Test Case: TC_LOGIN_001

Positive Test Priority: High Type: Manual

T*est Case Title: Verify login with valid username and password*

Application URL: https://www.saucedemo.com/

Module: Login

Objective: To verify that a user can successfully log in to the Swag Labs application using valid credentials.

Preconditions:

- The application is accessible.
- The user has valid login credentials.
- A supported web browser is available.
  **Test data**| Field                                                                     | Value                                      |
  | ------------------------------------------------------------------------- | ------------------------------------------ |
  | Username                                                                  | standard_user                              |
  | Password                                                                  | secret_sauce                               |
  | Expected URL                                                              | https://www.saucedemo.com/inventory.html   |
  | Test execution steps                                                      |                                            |
  | **Step**                                                                 | **Action**                                |
  | ---:                                                                      | ---                                        |
  | 1                                                                         | Open the browser.                          |
  | 2                                                                         | Navigate to https://www.saucedemo.com/.    |
  | 3                                                                         | Locate the Username field.                 |
  | 4                                                                         | Enter standard_user in the Username field. |
  | 5                                                                         | Locate the Password field.                 |
  | 6                                                                         | Enter secret_sauce in the Password field.  |
  | 7                                                                         | Click the Login button.                    |
  | 8                                                                         | Verify the resulting page URL.             |
  | 9                                                                         | Verify the inventory page.                 |
  | Expected final result                                                     |                                            |
  | The user logs in successfully and is redirected to the inventory page.    |                                            |
  | Postcondition: The user is logged in and can view the available products. |                                            |

Actual result: To be filled in during manual execution.

Status: Pass / Fail

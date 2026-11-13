
// Import(functions and classes)-->test-->aysnc arrow method-->url
// -->Created object for classes by using "const"-->Call the classess

import { expect, test } from "@playwright/test"
import { LoginPage } from "../../page/Store_POM/LoginPage"
import { HomePage } from "../../page/Store_POM/HomePage"
import { ProductPage } from "../../page/Store_POM/ProductPage"
import { CartPage } from "../../page/Store_POM/CartPage"



test("Online Retail Application", async ({ page }) => {
    // This statement for open the browser
    await page.goto("https://www.demoblaze.com/")

    const loginpage = new LoginPage(page)
    // This statement for login the application
    await loginpage.DoLogin('mileend', 'mileend123')

    const homepage = new HomePage(page)
    // This statement is for Verify the message
    await homepage.VerifyLogo()


    const productpage = new ProductPage(page)
    await productpage.selectlaptop('Sony vaio i7')



    const cartpage = new CartPage(page)
    await cartpage.gotoCart()

    await page.pause()


}
)

// const: declares a variable 
// loginPage: the variable name
// new LoginPage(page): create object(instance) of the LoginPage class
// page: is passed as an argument to the LoginP class
import { Locator, Page, expect } from "@playwright/test";


export class HomePage {
    private ProductStoreLogo: Locator
    private AddToCart:Locator

    constructor(page: Page) {
        this.ProductStoreLogo = page.getByRole("link", { name: 'PRODUCT STORE', exact: true }) //<a>
        this.AddToCart = page.getByRole("link", { name: 'Add to cart', exact: true })   
    }
    async VerifyLogo() {
        // expect assertion
        await expect(this.ProductStoreLogo).toHaveText("PRODUCT STORE") // (Actual display message)
    }

}
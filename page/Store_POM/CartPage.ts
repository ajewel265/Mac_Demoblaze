import { Locator, Page } from "@playwright/test";

export class CartPage {
    private GotoCart: Locator;

    constructor(page: Page) {
        this.GotoCart = page.getByRole('link', { name: 'Cart', exact: true });
    }

    async gotoCart() {
        await this.GotoCart.click();
    }
}
import { Locator, Page } from "@playwright/test";

export class ProductPage {
    private SelectLaptop: Locator
    private SelectSonny: Locator
    private AddToCart: Locator



    constructor(page: Page) {
        //this.SelectLaptop = page.locator("#itemc") //
        this.SelectLaptop = page.getByRole('link', { name: 'Laptops', exact: true });

        //this.SelectSonny = page.locator(`.hrefch`)
        this.SelectSonny = page.getByRole('link', { name: 'Sony vaio i7', exact: true });
        this.AddToCart = page.locator(`a.btn.btn-success`)
        //this.AddToCart = page.getByRole('link', { name: 'Add to cart', exact: true });

    }
    async selectlaptop(laptopName: string) {
        await this.SelectLaptop.click();
        await this.SelectSonny.click()
        await this.AddToCart.click()
    }


}


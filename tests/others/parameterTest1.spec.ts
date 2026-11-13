// Requirements: Using small set of data so, used Array
// Open the page; goto searchbox; 
// search for multiple products, like: laptop,gift card, smartphone,monitor
// repeted same test for multiple options; to do that there are multiple ways of doing it
// step 1: by using loop statement; step 2: forEach(); Step3: describe block
// the same test multiple times for multiple sets of data
// tips@ print option : console.log(item)


import { test, expect } from '@playwright/test';

//testdata
// using array bcoz of multiple parameters # testdata 
const searchItems: string[] = ['laptop', 'Gift card', 'smartphone', 'monitor']

/*
// Step:1---> using for-of loop statement; 
    // [[[syntax: for(const item of array){}
    //     for - means repeat something
    //     const item - create a variable for the current item
    //     of- means "take each value FROM" ]]]
    // of searchItems--> thake the values FROM the searchItems array.one by one 
    // test name should be dynamic not hardcorded, bcoz it will run here 4 times,
    // that's why used ${item}; '$'-tells js/ts that inserting a value; 
    // '{}'-contains the variable; 'item'-the variable I'm inserting
    // Need to use backtick operator (``), value of the item can't be substituted here
    // the value will be captured inside the item
    

for (const item of searchItems) {
    test(`search test for ${item}`, async ({ page }) => {
        await page.goto('http://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').fill(item); // item from const veriable
        await page.locator(`input.button-1.search-box-button[type="submit"][value="Search"]`).click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });



    })
}; 

// Step:2--> Using forEach function 
// Syntax: array.forEach(function(element, index, array)) {}  OR
//         array.forEach((element, index, array)) =>{}
//parameter could be index or item; uesd =>(arrow) function 
// test should be inside the forEach()


searchItems.forEach((item) => {
    test(`search test for ${item}`, async ({ page }) => {
        await page.goto('http://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').fill(item); // item from const veriable
        await page.locator(`input.button-1.search-box-button[type="submit"][value="Search"]`).click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });


    }); 
}); */

// use describe block when we want to group tests 
// use forEach when we want to run/ create the same test for multiple data values.
// using describe
// inside the describe we can put nth number of test
// here I'm doing one block under describe, but we can do multiple group/ block 

test.describe("searching items:st", async () => {
    searchItems.forEach((item) => {
        test(`search test for ${item}`, async ({ page }) => {
            await page.goto('http://demowebshop.tricentis.com/');
            await page.locator('#small-searchterms').fill(item); // item from const veriable
            await page.locator(`input.button-1.search-box-button[type="submit"][value="Search"]`).click();
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
            


        });
    });
});
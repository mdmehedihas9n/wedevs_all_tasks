import { test, expect } from '@playwright/test';

test.describe('Update Profile', () => {

    test('Should Update Profile and Upload Picture', async ({ page }) => {

        // ===== Home page  =====
        await page.goto('https://ratul.staging.dokandev.com/login');
        console.log('✅ 1 - Page loaded');

        // ===== Login =====
        await page.locator('#reg-email').fill('mh2959599@gmail.com');
        await page.locator('#login-password').fill('m12345678');
        await page.locator("//button[normalize-space(text())='Sign in']").click();
        console.log('✅ 2 - Logged in');
        await page.waitForTimeout(2000);

        // ===== Update Profile =====
        await page.locator("//a[normalize-space()='Addresses']").click(); // click address module
        console.log('✅ 3 - address module clicked');
        await page.waitForTimeout(2000);

        await page.locator("//span[normalize-space(text())='Add New Address']").click(); // Add New Address
        console.log('✅ 4 - Add New Address');

        await page.locator('#first-name').fill('Mehedi'); // first-name
        console.log('✅ 5 - first-name');

        await page.locator('#last-name').fill('Hasan');// last-name
        console.log('✅ 6 - last-name');
        await page.waitForTimeout(2000);

        // Country  name
        await page.locator("(//div[@class=' css-hlgwow']//div)[3]").click();
        // Option select  
        await page.locator('text=Bangladesh').click();
        console.log('✅ 7 -Country ');
        await page.waitForTimeout(2000);

        //await page.locator('#address').fill('m12345678');

        // address  name
        await page.locator("//div[normalize-space(text())='Edit Address Manually']").click();
        console.log('✅ 8 -Dhaka ');

        await page.locator("(//label[contains(.,'Address *')]/following::input)[1]").fill('Shewrapara Mirpur, Dhaka');
        //await page.locator("//input[@placeholder='Apartment, suite, etc']").fill('House 397, Iqbal road, west Shewrapara');
        console.log('✅ 9 -Dhaka ');
        await page.waitForTimeout(2000);

        await page.locator("//input[@placeholder='Postal Code']").fill('1216');
        await page.waitForTimeout(2000);
        console.log('✅ 10 -zip code ');

        await page.locator('#phone').fill('01616060242');
        await page.waitForTimeout(2000);
        console.log('✅ 11 -mobile ');

        await page.locator('#address-label').fill('huda');
        await page.waitForTimeout(2000);
        console.log('✅ 11 -level ');

        await page.locator('#isDefaultAddress').click();
        console.log('✅ 11 -level ');


        // City  name
        //await page.locator("///div[@id='react-select-8-placeholder']/following-sibling::div[1]").click();
        // Option select  
        //await page.locator('text=Dhaka').click();
        console.log('✅ 11 -Country ');
        await page.waitForTimeout(5000);

        await page.locator("//button[text()='Cancel']/following-sibling::button").click();
        console.log('✅ 12 -save ');

        await page.waitForTimeout(5000);
        await page.keyboard.press('Escape');
    });

});
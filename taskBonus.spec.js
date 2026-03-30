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
        await page.locator("//div[@class='w-full']//input[1]").fill('Dhaka Bangladesh');
        // Option select  
        //await page.locator('text=Dhaka Bangladesh').click();
        console.log('✅ 8 -Dhaka ');
        await page.waitForTimeout(2000);

        // ===== Reload page to confirm =====
        await page.reload({ waitUntil: 'networkidle' });
        console.log('✅ 11 - Page reloaded');
        await page.waitForTimeout(2000);
    });

});
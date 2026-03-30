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
        await page.locator("//div[contains(@class,'mb-4 flex')]//a[1]").click(); // click edit icon
        console.log('✅ 3 - Edit profile clicked');
        await page.waitForTimeout(2000);

        await page.locator('#user-phone-no').fill('01616060242');
        console.log('✅ 4 - Phone updated');

        await page.locator("(//div[@class='flatpickr-wrapper']//input)[1]").click();
        console.log('✅ 5 - DOB calendar opened');

        await page.locator("//div[@class='numInputWrapper']//input[1]").fill('2001');
        console.log('✅ 6 - Year updated');
        await page.waitForTimeout(2000);

        await page.locator("(//span[@class='flatpickr-day'])[1]").click();
        console.log('✅ 7 - Day selected');

        await page.locator("//div[normalize-space(text())='Male']").click();
        console.log('✅ 8 - Gender selected');

        // ===== Reload page to confirm =====
        await page.reload({ waitUntil: 'networkidle' });
        console.log('✅ 11 - Page reloaded');
        await page.waitForTimeout(2000);
    });

});
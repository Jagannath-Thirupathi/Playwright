import {test} from '@playwright/test'

test('alerts', async({page}) =>{

    await page.goto('https://demo.automationtesting.in/Alerts.html');
    page.once('dialog', async dialog => {
        console.log("Simple Alert Message: ", dialog.message());
        await dialog.accept();
    })
    await page.locator('//button[@onclick="alertbox()"]').click();

     await page.locator("//a[text() = 'Alert with OK & Cancel ']").click();
    page.once('dialog', async dialog => {
        console.log("Confirm Alert Message: ", dialog.message());
        await dialog.dismiss();
    })
    await page.locator('//button[@onclick="confirmbox()"]').click();

    await page.locator('//a[@href="#Textbox"]').click();
    page.once('dialog', async dialog => {
        console.log("Prompt Alert Message: ", dialog.message());
        await dialog.accept("Jagannath");
    })
    await page.locator('//button[@onclick="promptbox()"]').click();
})

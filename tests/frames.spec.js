import {test} from '@playwright/test'

test('frames', async ({page}) =>{

    await page.goto('https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-frame-counting');
    const frame = page.frameLocator('//iframe[@id = "frame-payment-82"]')
    const holder = frame.locator('#card-holder')
    await holder.fill("ALEX JOHNSON");
    await frame.locator('#card-number').fill('5555 5555 5555 4444');
    await frame.locator('#expiry-date').fill('08/28');
    await frame.locator('#cvv').fill('456');
    await frame.locator('#btn-pay-now').click();
    console.log("Single Frame Completed")

    const nestedFrame = page.frameLocator('#frame-feedback');
    await nestedFrame.locator('#feedback-name').fill("Jagannath");
    await nestedFrame.locator('#feedback-email').fill("jagannath@gmail.com");
    const childFrame = nestedFrame.frameLocator('#frame-travel-prefs');
    await childFrame.locator('#travel-solo').click();
    await nestedFrame.locator('#btn-submit-enquiry').click();
    console.log("Nested Frame Completed")
})
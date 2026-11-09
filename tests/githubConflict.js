import{test} from '@playwright/test'

test('Validate GitHub Conflict in FlipKart', async ({page}) =>{

    await page.goto("https://www.flipkart.com/");
})
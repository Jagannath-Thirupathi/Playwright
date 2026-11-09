import{test} from '@playwright/test'

test('Validate GitHub Conflict in Amazon', async ({page}) =>{

   await page.goto("https://www.amazon.in/");
   console.log(page.url());
})
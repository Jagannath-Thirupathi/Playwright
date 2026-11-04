import {test} from '@playwright/test'

test('Window Handle', async({page, context}) =>{

   await page.goto('https://demoqa.com/browser-windows?utm_source=chatgpt.com');
   const newPagePromise = context.waitForEvent('page');
   await page.locator('#tabButton').click();
   const newPage = await newPagePromise; 
   console.log("Page url: ", newPage.url());
   const header = newPage.locator('#sampleHeading');
   console.log("Header is: ",await header.textContent());
   //await page.close();
   await newPage.bringToFront();
   await page.locator('#windowButton').click();
   await page.waitForTimeout(5000);
   const totalPage = page.context().pages();
   console.log(totalPage.length)
   const page3 =  totalPage[2];
   console.log("Page3 title: ", page3.url());

})
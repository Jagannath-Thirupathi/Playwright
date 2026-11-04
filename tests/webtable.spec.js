import {test} from '@playwright/test'

test('Webtable', async({page}) =>{

    await page.goto('https://demoqa.com/webtables?utm_source=chatgpt.com');
    const column =  page.locator('//table//thead//th');
    console.log("Total Columns: ", await column.count());
    const row = page.locator('//table//tbody//tr');
    console.log("Total rows: ", await row.count());
    const row1Data = page.locator('//table//tbody//tr[1]//td');
    console.log("Row 1 Data: ", await row1Data.allTextContents());
    const particularData = page.locator('//table//tbody//tr[2]//td[4]');
    console.log("Particular Data: ", await particularData.innerText());
    //to print all data in the table
    for(let i = 0; i < await row.count(); i++){

      const cells =  row.nth(i).locator('td');

        for(let j = 0; j < await column.count(); j++){

            console.log(await cells.nth(j).innerText());
        }

    }
})
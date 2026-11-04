import {test} from '@playwright/test'

test('Demo', async({page}) => {

    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("//input[@placeholder='First Name']").fill("Jagannath");
    await page.locator("//input[@placeholder='Last Name']").fill("Thirupathi");
    await page.locator("//textarea[@ng-model='Adress']").fill("10, kottavur, peddur post, alangayam, Tirupattur");
    await page.locator("//input[@type='email']").fill("jagannath.thirupathi@gmail.com");
    await page.locator("//input[@ng-model='Phone']").fill("8778010697");
    await page.locator("//input[@value='Male']").click();
    await page.locator("//input[@id='checkbox2']").click();
    await page.locator("//div[@id='msdd']").click();
    await page.getByText("Croatian").click();
    await page.getByText("Danish").click();
    await page.getByText("Estonian").click();
    let selectedLanguage = await page.locator("//div[@id='msdd']").innerText();
    console.log("SelectedLanguages: ", selectedLanguage.split(/(?=[A-Z])/).join(", "));
    await page.locator("body").click({ position: { x: 10, y: 10 } });
    let skill =  page.locator("//select[@id='Skills']");
    await skill.selectOption('Javascript');
    let selectedValue = await skill.inputValue();
    console.log("Selected Language: ", selectedValue);
    await page.locator("//select[@id='countries']").selectOption('Select Country');
    await page.locator(".select2-container").click();
    await page.locator("#select2-country-results").getByText("India").click();
    await page.locator("//select[@id='yearbox']").selectOption('1997');
    await page.locator("//select[@placeholder='Month']").selectOption('March');
    await page.locator("//select[@id='daybox']").selectOption('5');
    await page.locator("#firstpassword").fill("Jagannath05");
    await page.locator("#secondpassword").fill("Jagannath05");
    await page.locator("//*[@id='submitbtn']").click();
})
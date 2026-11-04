export class AdactinLoginPage{

    constructor(page){
        this.page = page;
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.loginButton = page.locator('//input[@id="login"]')

    }

    async visitUrl(){
       await this.page.goto('https://adactinhotelapp.com/')
    }

    async enterUsername(uname){
       await this.username.fill(uname)
    }

    async enterPassword(pword){
       await this.password.fill(pword);
    }

    async clickLogin(){
       await this.loginButton.click();
    }
}
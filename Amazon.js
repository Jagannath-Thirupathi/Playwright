export class Amazon{

    constructor(page){
        this.page = page;
        this.search = page.locator('//input[@id="twotabsearchtextbox"]');
    }

    async navigateUrl(){
        await this.page.goto("https://www.amazon.in/")
    }

    async searchBar(iphone){
        await this.search.fill(iphone)
        await this.page.keyboard.press('Enter')
    }


}
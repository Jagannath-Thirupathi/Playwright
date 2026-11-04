export class SearchHotel {

    constructor(page){
        this.page = page
        this.locationDropdown = page.locator('//select[@id="location"]')
        this.hotelDropdown = page.locator('//select[@id="hotels"]')
        this.roomType = page.locator('//select[@id="room_type"]')
        this.numberofRoom = page.locator('//select[@id="room_nos"]')
        this.checkIn = page.locator('//input[@id="datepick_in"]')
        this.checkOut = page.locator('//input[@id="datepick_out"]')
        this.adultsRoom = page.locator('//select[@id="adult_room"]')
        this.childrenRoom = page.locator('//select[@id="child_room"]')
        this.searchBtn = page.locator('//input[@id="Submit"]')
    }

    async selectLocation(){
        await this.locationDropdown.selectOption({label : 'Melbourne'})
    }

    async selectHotel(){
        await this.hotelDropdown.selectOption({label : 'Hotel Sunshine'})
    }

    async selectRoomType(){
        await this.roomType.selectOption({label : 'Deluxe'})
    }

    async selectNumberofRoom(){
        await this.numberofRoom.selectOption({label : '2 - Two'})
    }

    async checkInDate(){
        await this.checkIn.fill('28/10/2026')
    }

    async checkOutDate(){
        await this.checkOut.fill('30/10/2026')
    }

    async adultsPerRoom(){
        await this.adultsRoom.selectOption({label : '2 - Two'})
    }

    async childrenPerRoom(){
        await this.childrenRoom.selectOption({label : '3 - Three'})
    }

    async clicksearchBtn(){
        await this.searchBtn.click()
    }

}
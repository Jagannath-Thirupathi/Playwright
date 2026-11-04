import {test} from '@playwright/test'
import { AdactinLoginPage } from '../AdactinLoginPage'
import { SearchHotel } from '../SearchHotel';

test('Validate Adactin Login Page', async ({ page }) =>{

    const login = new AdactinLoginPage(page);
    const search = new SearchHotel(page);

    await login.visitUrl();
    await login.enterUsername('Jagannath05');
    await login.enterPassword('Jagan@05');
    await login.clickLogin();
    
    await search.selectLocation();
    await search.selectHotel();
    await search.selectRoomType();
    await search.selectNumberofRoom();
    await search.checkInDate();
    await search.checkOutDate();
    await search.adultsPerRoom();
    await search.childrenPerRoom();

})
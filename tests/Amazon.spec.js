 import {test} from '@playwright/test'
 import { Amazon } from '../Amazon'

 test('Amazon Dynamic Xpath', async({page}) =>{

     const amazon = new Amazon(page);

     await amazon.navigateUrl();

//     await amazon.searchBar('Iphone 17 pro')
 })
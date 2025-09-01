// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MarketPage } from '../pages/MarketPage';
import { CartPage } from '../pages/CartPage';
import { LeasePage } from '../pages/LeasePage';

  //run: npx playwright test MarketPlaceTest.spec.js --project chromium --headed
  //npx playwright test --ui
  //npx playwright show-report

test('I Can Request an Equipment on the MarketPlace', async ({ page }) => {
  
    test.setTimeout(60_000); 
  // HomePage
  const home=new HomePage(page);
  const market=new MarketPage(page);
  const cartpage=new CartPage(page);
  const leasepage=new LeasePage(page);

  await home.gotoHomePage();
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Beequip MKB Equipment Lease/);
  const pageURL=page.url();
  console.log('Page URL is:', pageURL);
  await expect(page).toHaveURL('https://staging.beequip.com/nl/');
    
 
  //click to button of truck
  await home.clickFindEquipment();
  await page.waitForTimeout(2000)
  await market.gotoMarketPage();
  
  //click to select truck model
  const locator = page.locator('#categoryGroups');
  await expect(locator).toHaveText(/Vrachtwagen/);
  await market.selectTruckModel();
  await page.waitForTimeout(2000)
  await cartpage.gotoCartPage();  

  //Select the truck characteristics
  await cartpage.clickCheckbox();  
  await page.getByPlaceholder('kolkenzuiger').isVisible();
  await page.getByLabel('Schuifzeilen').check();
  expect(page.getByLabel('Schuifzeilen')).toBeChecked();
  
  //filter Year
  await cartpage.enterYear('2018','2023');
  //filter Kilometer
  await cartpage.enterKilometers('0','300000');
  //filter cilinders
  await page.waitForTimeout(3000);
  await cartpage.enterCilinders();
  const bannerCart = page.locator(cartpage.activeFilters);
  await expect(bannerCart).toContainText("Actieve filters");
  await page.waitForTimeout(2000);
  const filtercilinder = page.locator(cartpage.filterCilinder);
  await expect(filtercilinder).toContainText("6");

  //chose the Truck
  await cartpage.clickEquipment();
  await page.waitForTimeout(3000);    
  //calculate Lease
  const leaseTextCart = page.locator(leasepage.leaseText);
  await expect(leaseTextCart).toContainText("Lease vanaf");  
  await leasepage.clickLease();    

});
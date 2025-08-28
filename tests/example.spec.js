// @ts-check
import { test, expect } from '@playwright/test';

test('I Can Navigate do Website', async ({ page }) => {
  await page.setExtraHTTPHeaders({
    Authorization: 'Basic '+btoa('beequip-site-staging:X6T*JvQeKfYW6q*HCyFrUot9HRRm_Y-v')
  })
  
  await page.goto('https://staging.beequip.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Beequip MKB Equipment Lease/);
  
  const pageURL=page.url();
  console.log('Page URL is:', pageURL);
  await expect(page).toHaveURL('https://staging.beequip.com/nl/')

  //run: npx playwright test

});



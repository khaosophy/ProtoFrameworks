import puppeteer from 'puppeteer';

import supabase from './supabase.js';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Navigate the page to a URL
  // await page.goto('https://www.partyrentalltd.com/products/5020');

  const { data } = await supabase.from('categories').select('blc_id, name');
  console.log(data);

  await browser.close();
})();
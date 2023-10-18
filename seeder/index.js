import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.partyrentalltd.com/products/5020');

  const data = await page.evaluate(() => {
    const categoryArray = Array.from(document.querySelectorAll('.category'))
    
    const categories = categoryArray.map(category => {
      const name = category.querySelector('.itemLabel span').innerText;
      const blc_id = parseInt(category.href.split('/').pop());
      return { name, blc_id };
    });

    return categories;
  });

  console.log(JSON.stringify(data));

  await browser.close();
})();
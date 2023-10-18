import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.partyrentalltd.com/products/5020');

  const data = await page.evaluate(() => {
    const categoryArray = Array.from(document.querySelectorAll('.category'))
    
    const categories = categoryArray.map(category => {
      const categoryName = category.querySelector('.itemLabel span').innerText;
      const categoryId = category.href.split('/').pop();
      return { categoryName, categoryId };
    });

    return categories;
  });

  console.log(data);

  await browser.close();
})();
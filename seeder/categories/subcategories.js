export default async function getSubcategories(page, categories) {
  let subcategories = [];

  for(let i = 0; i < categories.length; i++) {
    await page.goto('https://www.partyrentalltd.com/' + categories[i].blc_id);
    // await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const subcategory = {
      parent_cat_id: categories[i].blc_id,
    };

    await page.evaluate(() => {
      const title = document.querySelector('h1').innerText;
      console.log(`Reviewing ${title} subcategories...`);

      // TODO: this section is not working...
      const subcategoryArray = Array.from(document.querySelectorAll('.subCategory-row__info'));

      subcategoryArray.forEach(subcategory => {
        subcategory.name = subcategory.querySelector('.itemLabel span').innerText;
        subcategory.blc_id = parseInt(subcategory.querySelector('a').href.split('/').pop());
      });
    });

    subcategories.push(subcategory);
  }

  return subcategories;
}
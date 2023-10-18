async function getCategoriesFromWeb(page) {
  await page.goto('https://www.partyrentalltd.com/products/5020');

  return await page.evaluate(() => {
    const categoryArray = Array.from(document.querySelectorAll('.category'));
    
    const categories = categoryArray.map(category => {
      const name = category.querySelector('.itemLabel span').innerText;
      const blc_id = parseInt(category.href.split('/').pop());
      return { name, blc_id };
    });

    return categories;
  });
}

async function getCategoriesFromDb(db) {
  const { data } = await db.from('categories').select('name, blc_id');
  return data;
}

export { 
  getCategoriesFromWeb,
  getCategoriesFromDb,
};
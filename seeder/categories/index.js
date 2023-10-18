import puppeteer from 'puppeteer';
import supabase from '../supabase.js';

/**
 * This file scrapes the categories from the Party Rental Ltd. website,
 * including all of the subcategories.
 */
import { getCategoriesFromWeb, getCategoriesFromDb } from './getCategories.js';
import getSubcategories from './subcategories.js';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // todo: delete all categories from the database before running this script
  // const categories = await getCategoriesFromWeb(page);
  const categories = await getCategoriesFromDb(supabase);
  console.log(categories);
  
  const subcategories = await getSubcategories(page, categories);
  console.log(subcategories);
  // todo: send data to the database

  await browser.close();
})();
import { test, expect } from '@playwright/test';

test('sanity test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveURL(/saucedemo/);
});
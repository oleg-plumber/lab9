import { test as base } from '@playwright/test';

import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type Fixtures = {
  inventory: InventoryPage;
  cart: CartPage;
};

export const test = base.extend<Fixtures>({
  inventory: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cart: async ({ page }, use) => {
    await use(new CartPage(page));
  }
});

export { expect } from '@playwright/test';
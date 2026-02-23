import { test, expect } from '../../src/fixtures/baseTest';

test('Add one item → badge=1 → item in cart', async ({ inventory, cart }) => {
  await inventory.open();

  await inventory.addItem('sauce-labs-backpack');
  await inventory.expectCartBadge(1);

  await inventory.openCart();

  await cart.expectOpened();
  await cart.expectItemVisible('Sauce Labs Backpack');
});
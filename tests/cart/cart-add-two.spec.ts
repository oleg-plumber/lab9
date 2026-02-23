import { test, expect } from '../../src/fixtures/baseTest';

test('Add two items → badge=2 → both in cart', async ({ inventory, cart }) => {
  await inventory.open();

  await inventory.addItem('sauce-labs-backpack');
  await inventory.addItem('sauce-labs-bike-light');
  await inventory.expectCartBadge(2);

  await inventory.openCart();

  await cart.expectItemVisible('Sauce Labs Backpack');
  await cart.expectItemVisible('Sauce Labs Bike Light');
});
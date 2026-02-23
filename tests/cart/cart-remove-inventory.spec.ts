import { test } from '../../src/fixtures/baseTest';

test('Remove item from Inventory updates badge', async ({ inventory, cart }) => {
  await inventory.open();

  await inventory.addItem('sauce-labs-backpack');
  await inventory.addItem('sauce-labs-bike-light');

  await inventory.removeItem('sauce-labs-backpack');
  await inventory.expectCartBadge(1);

  await inventory.openCart();

  await cart.expectItemVisible('Sauce Labs Bike Light');
});
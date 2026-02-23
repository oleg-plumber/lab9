import { test } from '../../src/fixtures/baseTest';

test('Remove item from Cart updates badge', async ({ inventory, cart }) => {
  await inventory.open();

  await inventory.addItem('sauce-labs-backpack');
  await inventory.addItem('sauce-labs-bike-light');

  await inventory.openCart();

  await cart.removeItem('sauce-labs-backpack');

  await inventory.header.expectCartBadge(1);

  await cart.expectItemVisible('Sauce Labs Bike Light');
});
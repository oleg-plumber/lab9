import { test } from '../../src/fixtures/baseTest';

test('Continue Shopping returns to Inventory', async ({ inventory, cart }) => {
  await inventory.open();

  await inventory.addItem('sauce-labs-backpack');
  await inventory.expectCartBadge(1);

  await inventory.openCart();

  await cart.continueShopping();

  await inventory.page.waitForURL('/inventory.html');
  await inventory.expectCartBadge(1);
});
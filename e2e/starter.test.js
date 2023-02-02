/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('show Login', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await element(by.id('username')).typeText('umair@gmail.com');
    await element(by.id('password')).typeText('123456');
    await element(by.id('button')).tap();
  });
});

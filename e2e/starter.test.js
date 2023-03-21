/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('show Login', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('nametext'))).toBeVisible();
    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('umair@gmail.com');
    await expect(element(by.id('passwordtext'))).toBeVisible();
    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('123456');
    await element(by.id('button')).tap();
    await waitFor(element(by.text('Login successful with')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('OK')).tap();
  });
});

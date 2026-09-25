import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const url = 'http://localhost:3001/dylans-fencing/';
  
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/screenshot-mobile-390.png', fullPage: true });
  console.log('Mobile screenshot (390px) saved');
  
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/screenshot-desktop-1440.png', fullPage: true });
  console.log('Desktop screenshot (1440px) saved');
  
  await browser.close();
})();

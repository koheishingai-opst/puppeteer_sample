const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://zozo.jp/');
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);
  await page.screenshot({path: 'zozo.png'});

  await browser.close();

})();

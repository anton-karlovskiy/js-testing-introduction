
const puppeteer = require('puppeteer');

const { generateText, checkAndGenerate } = require('./util');

// MEMO: Unit Test
test('should out name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');

  // MEMO: confirm false positives
  const textAgain = generateText('Anna', 28);
  expect(textAgain).toBe('Anna (28 years old)');
});

// MEMO: Unit Test
// MEMO: confirm opposites
test('should output data-less text', () => {
  const text = generateText();
  expect(text).toBe('undefined (undefined years old)');
});

// MEMO: Integration Test
test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: true
    // headless: false, // MEMO: run a browser with a UI
    // slowMo: 80, // MEMO: slow down the operation so that we have a chance of seeing what's happening
    // args: ['--window-size=1920,1080'] // MEMO: should lanuch a browser with this size
  });
  const page = await browser.newPage('');
  await page.goto('file:///F:/07_development/js-testing-introduction/index.html');
  // MEMO: you can find all commands in the official puppeteer docs
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Anna (28 years old)');
}, 10000);


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

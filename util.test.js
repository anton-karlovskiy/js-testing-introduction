
/**
 * MEMO: we can block the following line in favor of the mocked axios.js
 * we used the following line to use the mocked http.js from __mocks__/http.js not from /https.js
 * we checked it by looking up the console log when the test is running
 */
// jest.mock('./http');

/**
 * MEMO: we are using the mocked axios.js from __mocks__/axios.js not from the real axios third party
 * it's done automatically as long as we put axios.js in the __mocks__ directory
 */

const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});

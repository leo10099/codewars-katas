const solution = require('./index.js')

test('Test 1', () => {
  expect(solution('abc', 'bc')).toBeTruthy()
})

test('Test 2', () => {
  expect(solution('abc', 'd')).toBeFalsy()
})
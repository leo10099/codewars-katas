const validateHello = require('.')

test('Test 1', () => {
  expect(validateHello('ahoj')).toBeTruthy()
})

test('Test 2', () => {
  expect(validateHello('meh')).toBeFalsy()
})
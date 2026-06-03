// __tests__/index.test.js

const { add, subtract, multiply,divide } = require('../src/index');

describe('Math functions', () => {
  test('add: 2 + 3 should equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('add: negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('subtract: 10 - 4 should equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply: 3 * 4 should equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});

test('divide: 10 / 2 = 5', () => { expect(divide(10, 2)).toBe(5); });

// __tests__/index.test.js

const { add, subtract, multiply } = require('../src/index');

describe('Math functions', () => {
  test('add: 2 + 3 should equal 5', () => {
    expect(add(1, 3)).toBe(5);
  });

  test('add: negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('subtract: 10 - 4 should equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply: 3 * 4 should equal 12', () => {
    expect(multiply(1, 4)).toBe(12);
  });
});

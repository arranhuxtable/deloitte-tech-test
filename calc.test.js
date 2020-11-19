const calc = require('./calc.js');

test('28 returns Plong', () => {
  expect(calc(28)).toBe('Plong');
});

test('30 returns PlingPlang', () => {
  expect(calc(30)).toBe('PlingPlang');
});

test('21 returns PlingPlong', () => {
  expect(calc(21)).toBe('PlingPlong');
});

test('105 returns PlingPlangPlong', () => {
  expect(calc(105)).toBe('PlingPlangPlong');
});

test('35 returns PlangPlong', () => {
  expect(calc(35)).toBe('PlangPlong');
});

test('34 returns Plong', () => {
  expect(calc(34)).toBe('34');
});

test('null object throws exception', () => {
  expect(() => {
    calc(null);
  }).toThrow();
});

test('Different object type throws exception', () => {
  expect(() => {
    calc({});
  }).toThrow();
});

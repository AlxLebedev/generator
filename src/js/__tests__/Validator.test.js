import Validator from '../Validator';

test('Latin letter only (name -> Зомби)', () => {
  const received = new Validator();
  expect(received.validateUsername('Зомби')).toBe(false);
});

test('Allowed symbols "-", "_" (name -> Zombie-power_forever)', () => {
  const received = new Validator();
  expect(received.validateUsername('Zombie-power_forever')).toBe(true);
});

test('Allowed numbers (name -> Zombie4ever)', () => {
  const received = new Validator();
  expect(received.validateUsername('Zombie4ever')).toBe(true);
});

test('Not allowed more then three numbers in a row (name -> Zombie1234Power)', () => {
  const received = new Validator();
  expect(received.validateUsername('Zombie1234Power')).toBe(false);
});

test('Not allowed to start with a numbers (name -> 2Zombie)', () => {
  const received = new Validator();
  expect(received.validateUsername('2Zombie')).toBe(false);
});

test('Not allowed to end with a number (name -> Zombie2)', () => {
  const received = new Validator();
  expect(received.validateUsername('Zombie2')).toBe(false);
});

test('Not allowed to start with a symbol "_" (name -> _Zombie1234Power)', () => {
  const received = new Validator();
  expect(received.validateUsername('_Zombie1234Power')).toBe(false);
});

test('Not allowed to end with a symbol "_" (name -> Zombie1234Power_)', () => {
  const received = new Validator();
  expect(received.validateUsername('Zombie1234Power_')).toBe(false);
});

test('Not allowed to start with a symbol "-" (name -> -Zombie1234Power)', () => {
  const received = new Validator();
  expect(received.validateUsername('-Zombie1234Power')).toBe(false);
});

test('Not allowed to end with a symbol "-" (name -> Zombie1234Power-)', () => {
  const received = new Validator();
  expect(received.validateUsername('Zombie1234Power-')).toBe(false);
});

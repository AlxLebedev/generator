import Daemon from '../characters/Daemon';

test('distance = 1, attack = 100, stoned = false', () => {
  const received = new Daemon();
  received.distanceAttack = 1;
  received.attack = 100;

  expect(received.attack).toBe(100);
});

test('distance = 2, attack = 100, stoned = false', () => {
  const received = new Daemon();
  received.distanceAttack = 2;
  received.attack = 100;

  expect(received.attack).toBe(90);
});

test('distance = 3, attack = 100, stoned = false', () => {
  const received = new Daemon();
  received.distanceAttack = 3;
  received.attack = 100;

  expect(received.attack).toBe(80);
});

test('distance = 4, attack = 100, stoned = false', () => {
  const received = new Daemon();
  received.distanceAttack = 4;
  received.attack = 100;

  expect(received.attack).toBe(70);
});

test('distance = 5, attack = 100, stoned = false', () => {
  const received = new Daemon();
  received.distanceAttack = 5;
  received.attack = 100;

  expect(received.attack).toBe(60);
});

test('distance = 2, attack = 100, stoned = true', () => {
  const received = new Daemon();
  received.distanceAttack = 2;
  received.stoned = true;
  received.attack = 100;

  expect(received.attack).toBe(85);
});

test('get distance', () => {
  const received = new Daemon();
  received.distanceAttack = 2;

  expect(received.distanceAttack).toBe(2);
});

test('set incorrect distance', () => {
  const received = new Daemon();

  function setIncorrectDistance() {
    return received.distanceAttack = 'A2';
  }

  expect(setIncorrectDistance).toThrow();
});

test('stoned = true', () => {
  const received = new Daemon();
  received.stoned = true;

  expect(received.stoned).toBe(true);
});

test('set incorrect stoned value', () => {
  const received = new Daemon();

  function SetIncorrectStoned() {
    return received.stoned = 'bla-bla';
  }

  expect(SetIncorrectStoned).toThrow();
});

test('set incorrect attack value', () => {
  const received = new Daemon();

  function SetIncorrectAttack() {
    return received.attack = 'bla-bla';
  }

  expect(SetIncorrectAttack).toThrow();
});

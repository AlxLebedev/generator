import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';

import Team from '../Team';

test('Add Bowman to team', () => {
  const bowman = new Bowman('Steve Gadd');
  const team = new Team();
  team.add(bowman);
  const received = team.toArray();
  const expected = [{
    name: 'Steve Gadd',
    type: 'Bowman',
    _health: 100,
    level: 1,
    _attack: 25,
    _protection: 25,
    _powerModeStatus: false,
    powerModeWasEnabled: false,
    powerModeHitQuantity: 0,
  }];
  expect(received).toEqual(expected);
});

test('Add Bowman and Swordsman to team', () => {
  const bowman = new Bowman('Steve Gadd');
  const swordsman = new Swordsman('Todd Sucherman');
  const team = new Team();
  team.addAll(bowman, swordsman);
  const received = team.toArray();
  const expected = [{
    name: 'Steve Gadd',
    type: 'Bowman',
    _health: 100,
    level: 1,
    _attack: 25,
    _protection: 25,
    _powerModeStatus: false,
    powerModeWasEnabled: false,
    powerModeHitQuantity: 0,
  },
  {
    name: 'Todd Sucherman',
    type: 'Swordsman',
    _health: 100,
    level: 1,
    _attack: 40,
    _protection: 10,
    _powerModeStatus: false,
    powerModeWasEnabled: false,
    powerModeHitQuantity: 0,
  }];
  expect(received).toEqual(expected);
});

test('Add Bowman and two Swordsman to team', () => {
  const bowman = new Bowman('Steve Gadd');
  const swordsman = new Swordsman('Todd Sucherman');
  const team = new Team();
  team.add(bowman);
  team.add(swordsman);

  function returnError() {
    team.add(swordsman);
  }

  expect(returnError).toThrow();
});

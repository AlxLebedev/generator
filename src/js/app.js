import Team from './Team';

import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Undead from './characters/Undead';
import Zombie from './characters/Zombie';
import Daemon from './characters/Daemon';

const steve = new Bowman('Steve Gadd');
const todd = new Swordsman('Todd Sucherman');
const jared = new Magician('Jared Falk');
const anika = new Undead('Anika Nilles');
const emmanuelle = new Zombie('Emmanuelle Caplette');
const elise = new Daemon('Elise Trouw');

const dreamTeam = new Team();

dreamTeam.addAll(steve, todd, jared, anika, emmanuelle, elise);

console.log(dreamTeam);

for (const character of dreamTeam) {
  console.log(character);
}

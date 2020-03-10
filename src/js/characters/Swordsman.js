import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this._attack = 40;
    this._protection = 10;
  }
}

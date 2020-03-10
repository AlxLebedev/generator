import Character from './Character';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this._attack = 25;
    this._protection = 25;
  }
}

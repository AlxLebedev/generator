import Character from './Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this._attack = 25;
    this._protection = 25;
  }
}

import Character from './Character';

export default class DeadCharacter extends Character {
  constructor(name) {
    super(name);
    this.type = 'Dead character';
    this._health = 0;
    this._attack = 11;
    this._protection = 11;
  }
}

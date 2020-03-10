import CharacterForce from '../CharacterForce';

export default class Magician extends CharacterForce {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this._attack = 10;
    this._protection = 40;
  }
}

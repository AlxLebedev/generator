import CharacterForce from '../CharacterForce';

export default class Daemon extends CharacterForce {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this._attack = 10;
    this._protection = 40;
  }
}

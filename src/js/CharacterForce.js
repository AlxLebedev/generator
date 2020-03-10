import Character from './characters/Character';

export default class CharacterForce extends Character {
  constructor(name) {
    super(name);
    this._stoned = false;
    this._distanceAttack = 2;
  }

  set distanceAttack(value) {
    if (parseFloat(value) === value && Number.isInteger(parseFloat(value))) {
      this._distanceAttack = value;
    } else {
      throw new Error('It`s not a correct number!');
    }
  }

  get distanceAttack() {
    return this._distanceAttack;
  }

  set stoned(value) {
    if (value === true || value === false) {
      this._stoned = value;
    } else {
      throw new Error('It`s not a correct value: must be "true" or "false"');
    }
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    if (parseFloat(value) === value && Number.isInteger(parseFloat(value))) {
      this._attack = value;
    } else {
      throw new Error('It`s not a correct number!');
    }
  }

  get attack() {
    let attackDiscount = null;
    switch (this._distanceAttack) {
      case 2:
        attackDiscount = 0.9;
        break;
      case 3:
        attackDiscount = 0.8;
        break;
      case 4:
        attackDiscount = 0.7;
        break;
      case 5:
        attackDiscount = 0.6;
        break;
      default:
        attackDiscount = 1;
        break;
    }

    if (this._stoned === true) {
      return Math.ceil((this._attack * attackDiscount) - Math.log2(this._distanceAttack) * 5);
    }
    return Math.ceil(this._attack * attackDiscount);
  }
}

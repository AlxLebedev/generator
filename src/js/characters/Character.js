export default class Character {
  constructor(name) {
    this.name = name;
    this._health = 100;
    this.level = 1;
    this._powerModeStatus = false;
    this.powerModeWasEnabled = false;
    this.powerModeHitQuantity = 0;
  }

  levelUp() {
    if (this._health < 1) {
      throw new Error(`${this.name} is dead - can't level up a dead character`);
    }
    this.level += 1;
    this._attack += this._attack * 0.2;
    this._protection += this._protection * 0.2;
    this._health = 100;
  }

  hit() {
    if (this._powerModeStatus === true && this.powerModeHitQuantity < 3) {
      this.powerModeHitQuantity += 1;
      if (this.powerModeHitQuantity === 3) {
        this._powerModeStatus = false;
      }
      return `Attack level: ${this._attack * 2}, Protection level: ${this._protection * 2}, Health level: ${this._health * 2}`;
    }
    return `I have standard level: attack ${this._attack}, protection ${this._protection}, health ${this._health}`;
  }

  set powerMode(value) {
    if (value === 'on') {
      this._powerModeStatus = this.powerModeWasEnabled === false;
      this.powerModeWasEnabled = true;
    } else {
      this._powerModeStatus = false;
    }
  }

  get powerMode() {
    return this._powerModeStatus;
  }

  get attack() {
    return this._powerModeStatus === true ? (this._attack * 2) : this._attack;
  }

  get protection() {
    return this._powerModeStatus === true ? (this._protection * 2) : this._protection;
  }

  get health() {
    return this._powerModeStatus === true ? (this._health * 2) : this._health;
  }
}

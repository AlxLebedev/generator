export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Already is in our members');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  * [Symbol.iterator]() {
    const setSize = this.members.size;
    const team = this.members.values();
    for (let currSetSize = 0; currSetSize < setSize; currSetSize += 1) {
      yield team.next().value;
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

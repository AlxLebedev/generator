export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(code, textValue) {
    this.errors.set(code, textValue);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return `Sorry, ${code} is unknown error`;
  }
}

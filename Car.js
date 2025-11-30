class Car {
  #fuel;
  #engineOn;

  constructor(fuel = 100) {
    this.#fuel = fuel;
    this.#engineOn = false;
  }

  start() {
    if (this.#fuel > 0) {
      this.#engineOn = true;
    }
  }

  stop() {
    this.#engineOn = false;
  }

  drive() {
    if (this.#engineOn && this.#fuel > 0) {
      this.#fuel--;
      return "Car is driving";
    } else {
      return "Cannot drive";
    }
  }
}

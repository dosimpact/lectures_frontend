// using private property
// using static property
// using readonlt property

class DataBase {
  // - instance
  static #instance = null;
  // ==
  // - createInstance
  static createInstance() {
    return new DataBase();
  }
  // - getInstance
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = this.createInstance();
    }
    return this.#instance;
  }
  // static + readonly
  static get instance() {
    return this.#instance;
  }
  // -
}

const inst1 = DataBase.getInstance();
const inst2 = DataBase.getInstance();
console.log(inst1);
console.log(inst1 === inst2);
console.log(DataBase.instance);

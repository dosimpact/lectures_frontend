const add = (a, b) => a + b;

const makePerson = (age, name) => ({ age, name });

class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

// export func
module.exports = { add, makePerson, Person };

// export default func
// module.exports = add;

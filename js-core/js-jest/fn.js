const add = (a, b) => a + b;

const makePerson = (age, name) => ({ age, name });

class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

const throwErrorer = (octopus) => {
  throw new Error(octopus);
};

// export func
module.exports = { add, makePerson, Person, throwErrorer };

// export default func
// module.exports = add;

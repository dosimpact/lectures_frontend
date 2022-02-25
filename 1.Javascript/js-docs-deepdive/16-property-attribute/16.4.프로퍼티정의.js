//✅ eg
const person = {};

Object.defineProperty(person, "firstName", {
  value: "kim",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(person, "lastName", {
  value: "dodo",
});

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
});
console.log(Object.getOwnPropertyDescriptors(person));
// {
//     firstName: {
//       value: 'kim',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     lastName: {
//       value: 'dodo',
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     fullName: {
//       get: [Function: get],
//       set: [Function: set],
//       enumerable: false,
//       configurable: false
//     }
//   }

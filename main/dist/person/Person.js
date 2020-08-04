"use strict";
// import { makeRandomNumber } from "../utils/makeRandomNumber";
// import IPerson from "./IPerson";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.default = Person;
exports.makePerson = (name, age) => {
    return { name, age };
};
//# sourceMappingURL=Person.js.map
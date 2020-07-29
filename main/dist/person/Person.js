"use strict";
// import { makeRandomNumber } from "../utils/makeRandomNumber";
// import IPerson from "./IPerson";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
const makeRandomNumber_1 = require("../utils/makeRandomNumber");
class Person {
    constructor(name, age = makeRandomNumber_1.makeRandomNumber()) {
        this.name = name;
        this.age = age;
    }
}
exports.default = Person;
exports.makePerson = (name, age = makeRandomNumber_1.makeRandomNumber()) => {
    return {
        name,
        age,
    };
};
//# sourceMappingURL=Person.js.map
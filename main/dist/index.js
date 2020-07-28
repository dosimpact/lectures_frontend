"use strict";
// import Person, { makePerson } from "./person/Person";
// import IPerson from "./person/IPerson";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importStar(require("./person/Person"));
const chance_1 = __importDefault(require("chance"));
const R = __importStar(require("ramda"));
const chance = new chance_1.default();
const testMakePerson = () => {
    let dos = Person_1.makePerson("dos");
    let test = new Person_1.default("test");
    console.log(dos, test);
};
testMakePerson();
let people = R.range(0, 3).map((i) => new Person_1.default(chance.name(), chance.age()));
console.log(people);
//# sourceMappingURL=index.js.map
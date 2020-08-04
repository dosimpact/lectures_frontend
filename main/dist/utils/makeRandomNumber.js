"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomeNumber = void 0;
// let MAX_NUM = 100;
// export function makeRandomNumber(max: number = MAX_NUM) {
//   return Math.ceil(Math.random() * max);
// }
const MAX_NUM = 100;
exports.makeRandomeNumber = (num = MAX_NUM) => {
    return Math.ceil(Math.random() * num);
};
//# sourceMappingURL=makeRandomNumber.js.map
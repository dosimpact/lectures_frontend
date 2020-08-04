// let MAX_NUM = 100;
// export function makeRandomNumber(max: number = MAX_NUM) {
//   return Math.ceil(Math.random() * max);
// }
const MAX_NUM = 100;
export const makeRandomeNumber = (num: number = MAX_NUM): number => {
  return Math.ceil(Math.random() * num);
};

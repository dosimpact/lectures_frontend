let MAX_NUM = 100;
export function makeRandomNumber(max: number = MAX_NUM) {
  return Math.ceil(Math.random() * max);
}

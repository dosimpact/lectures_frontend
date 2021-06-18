import { NumberValidator } from "./interfaces";

export const SSNRegExp = /^[0-9]*$/;

class SSNValiator implements NumberValidator {
  validate(s: string): boolean {
    return s.length === 6 && SSNRegExp.test(s);
  }
}
export { SSNValiator };

export default SSNValiator;

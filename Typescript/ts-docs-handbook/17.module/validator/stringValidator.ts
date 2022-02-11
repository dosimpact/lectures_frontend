import { StringValidator } from "./interfaces";

export const numberRegEx = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
  validate(s: string): boolean {
    return s.length === 5 && numberRegEx.test(s);
    // throw new Error("Method not implemented.");
  }
}

// Export 문 (Export statements)
export { ZipCodeValidator };
export { ZipCodeValidator as MainValidator };

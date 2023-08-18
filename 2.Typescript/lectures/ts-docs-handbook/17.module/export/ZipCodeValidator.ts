const zipCodeReg = /^[0-9]*$/;

class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && zipCodeReg.test(s);
  }
}

export = ZipCodeValidator;

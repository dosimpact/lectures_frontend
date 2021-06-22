import { MainValidator } from "./validator/stringValidator";
// import statement
import { SSN, Zip as ZipEval } from "./validator";
// import 를 단일 변수로 받기
import * as Validators from "./validator";
// global script import ( side-effect only)
import "./hello.script";
// type을 명시적으로 import 하기 ( interface, type 등만 가능 ! )
import type { NumberValidator } from "./validator/interfaces";

let validResult: boolean = new MainValidator().validate("10012");
console.log(validResult);

validResult = new ZipEval().validate("1290");
console.log(validResult);

validResult = new SSN().validate("981213");
console.log(validResult);

validResult = new Validators.SSN().validate("981213");
console.log(validResult);

class CustomValidator implements NumberValidator {
  validate(s: string): boolean {
    throw new Error("Method not implemented.");
  }
}

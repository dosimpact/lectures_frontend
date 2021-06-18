## 17. 모듈

- import/export 가 있는 스크립트 파일은 모듈로 처리
- 없는 구문은 전역 스크립트로 처리한다.

## 17.1 모듈

### Basic export/import

- 모듈은 export구문을 사용하여, 본인의 scope의 변수를 밖으로 추출
- 다른 모듈에서 import를 사용해 명시적으로 로드
- 모듈로더 : CommonJS 모듈용 Node.js , AMD 모듈용 RequireJS로더

```ts
import { NumberValidator } from "./interfaces";

export const SSNRegExp = /^[0-9]*$/;

class SSNValiator implements NumberValidator {
  validate(s: string): boolean {
    return s.length === 6 && SSNRegExp.test(s);
  }
}
export { SSNValiator };

export default SSNValiator;
```

### export/import statements

- as 구문

```ts
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
---
// import statement
import { SSN, Zip as ZipEval } from "./validator"
```

### re-export

```ts
// 3 Re-export 하기 (Re-exports)
export { SSNValiator as SSN } from "./numberValidator";
export { ZipCodeValidator as Zip } from "./stringValidator";
```

### side-effect only import

```ts
// global script import ( side-effect only)
import "./hello.script";
```

### 타입 명시 import

```ts
// type을 명시적으로 import 하기 ( interface, type 등만 가능 ! )
import type { NumberValidator } from "./validator/interfaces";
```

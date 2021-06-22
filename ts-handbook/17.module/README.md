## 17. 모듈

- import/export 가 있는 스크립트 파일은 모듈로 처리
- 없는 구문은 전역 스크립트로 처리한다.

## 17.1 모듈

### Basic export/import

- 모듈은 export구문을 사용하여, 본인의 scope의 변수를 밖으로 추출
- 다른 모듈에서 import를 사용해 명시적으로 로드
- 모듈로더 : CommonJS 모듈용 Node.js , AMD 모듈용 RequireJS로더

- 모듈은 지역scope로 변수를 보호하며, 일부를 export할 수 있다.

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
- 이름을 바꿔서 export/import 가능 하다.

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

- export { } from ""
- 모듈을 재조립해서 출력하고 싶을때 ( 하위 모듈을 다 정리한, index.ts 파일 )

- export \* as Renamed from ""
- export default가 없는 모듈을, 명명하여 export 할 때

```ts
// 3 Re-export 하기 (Re-exports)
export { SSNValiator as SSN } from "./numberValidator";
export { ZipCodeValidator as Zip } from "./stringValidator";
```

```ts
// 3 Re-export 하기 (Re-exports)
import { NumberValidator } from "./interfaces";
export const SSNRegExp = /^[0-9]*$/;
class SSNValiator implements NumberValidator {
  validate(s: string): boolean {
    return s.length === 6 && SSNRegExp.test(s);
  }
}
export { SSNValiator };
export default SSNValiator;
---
export * as NumberValidObj from "./numberValidator";
---
import { NumberValidObj } from "./validator/index";
new NumberValidObj.default().validate("hello");
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

### "export = " 지원

- 기존의 exports를 단일객체로 지정하는것은 export default 가 대체된다.
- 기존의 exports = {}로 객체를 넣는것은 export 구문으로 대처된다.

- exports 객체의 워크플로우를 모델링 하기위해 "export = "구문으로 지원한다.
- "export =" 구문은 import module = require("module") 로 가져와야한다.

```ts
const zipCodeReg = /^[0-9]*$/;
class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && zipCodeReg.test(s);
  }
}

export = ZipCodeValidator;
---
import Zip = require("./export/ZipCodeValidator");
const testRes = new Zip().isAcceptable("05154");
console.log("Zip - testRes", testRes);

```

### 🚀 모듈을 위한 코드 생성

- 대상 모듈에 따라서, 컴파일 되는 코드가 다르다.
- 모듈 대상은
  Node.js (CommonJS), require.js (AMD), UMD, SystemJS, , ECMAScript 2015 native modules (ES6)

### 🚀동적 모듈 로딩

- if 구문에 의해서, require 모듈
- ts 스크립트 또한 typesafe한 동적 로딩 시나리오 제공

### 🚀 .d.ts 모듈

### 🚀 와일드카드 모듈 선언

## 🚀 모듈 구조화에 대한 지침 (Guidance for structuring modules)

### Export as close to top-level as possible

### if you're only exporting a single class or function, use export default

### If you're exporting multiple objects, put them all at top-level

### Explicitly list imported names

### Re-export to extend

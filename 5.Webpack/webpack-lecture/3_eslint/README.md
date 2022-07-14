
## ESLint

정적분석도구
- 코드품질검사 : 잼재적 오류나 버그 예방
- 포맷팅 : 일관된 코드 스타일 유지

```js
// eslint 설치
npm i -D eslint

// eslint 초기화 
// -- .eslintrc.js 설정파일을 만들게 된다.
npx eslint --init

// eslint 실행
npx eslint app.js
// eslint 실행 + 자동 수정
npx eslint app.js --fix
```

## .eslintrc.js
esLint의 규칙은 다음에서 확인 가능하다.
- https://eslint.org/docs/rules/
- ✓  eslint의 기본(추천) 규칙, 이는  "extends": "eslint:recommended" 으로 활성화
- 🔧 --fix 옵션으로 자동으로 고처주는것이 가능한 옵션  
- 규칙에 설정하는 값은 세 가지다. "off"나 0은 끔, "warn"이나 1은 경고, "error"나 2는 오류.   

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // console.log()(function () {})()와 같은 멀티라인 애러 검사
    "no-unexpected-multiline": "error",
    // 필요이상의 콤마 애러
    "no-extra-semi": "error",
  },
};

```

## prettier

프리티어는 코드를 더 예쁘게 포멧팅 해준다.
- eslint의 포멧팅 기능도 있기때문에, 
- eslint에 prettier 규칙을 제외하고, prettier까지 실행시키도록 셋팅해야한다.

```js
// 프리티어 설치
npm i -D prettier
// 프리티어 실행 및 포멧팅 후 결과 반영
npx prettier app.js --write

// 1. 프리티어와 충돌되는 eslint 포멧팅 옵션 제거
// --   extends: ["eslint-config-prettier"]
npm i -D eslint-config-prettier
// 2. 프리티어의 규칙을 eslint에 추가하여, eslint만 실행해도 되게끔 한다. 
// --   plugins: ["prettier"],rules: { "prettier/prettier": "error"},
npm i -D eslint-plugin-prettier


// 1+2 모듈 설치 후 eslintrc.js 을 다음 처럼 설정해도 된다.
// -- extends: [ "eslint:recommended", "plugin:prettier/recommended"],
// 프리티어 중복되는 규칙 제거 + 프리티어도 eslint가 같이 실행  

```

ESLint에서 기본으로 제공하는 설정 외에 자주 사용하는 두 가지가 있다.  
    airbnb
    standard

    
airbnb 설정은 airbnb 스타일 가이드를 따르는 규칙 모음이다. eslint-config-airbnb-base 패키지로 제공된다.  
standard 설정은 자바스크립트 스탠다드 스타일을 사용한다. eslint-config-standard 패키지로 제공된다.  

## .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // 추천하는 규칙을 사용하는 옵션
  // -- eslint-config-prettier(프리티어 포멧팅 규칙을 위해 중복된 eslint 규칙 제거)
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  // eslint-plugin-prettier : 프리티어의 규칙을 eslint에 추가(플러그인)
  plugins: ['prettier'],
  rules: {
    // eslint-plugin-prettier : 프리티어의 규칙을 eslint에 추가(규칙)
    'prettier/prettier': 'error',
    // console.log()(function () {})()와 같은 멀티라인 애러 검사
    'no-unexpected-multiline': 'error',
    // 필요이상의 콤마 애러
    'no-extra-semi': 'error',
  },
};

```

## .prettierrc. 

- 프리티어의 규칙을 설정
- 플러그인덕에 eslint-plugin-prettier에서 인식한다.

```js
{
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "endOfLine": "auto"
  }
```
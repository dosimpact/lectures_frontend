
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
// 프리티어와 충돌되는 eslint 포멧팅 옵션 제거
// --   extends: ["eslint-config-prettier"]
npm i -D eslint-config-prettier
// 프리티어의 규칙을 eslint에 추가
npm i -D eslint-plugin-prettier
// 프리티어 실행 및 포멧팅
npx prettier app.js --write
```

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

## .prettierrc
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
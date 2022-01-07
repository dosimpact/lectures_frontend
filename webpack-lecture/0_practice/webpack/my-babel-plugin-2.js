// myplugin.js:
module.exports = function myplugin() {
  return {
    visitor: {
      // https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-block-scoping/src/index.js#L26
      VariableDeclaration(path) {
        console.log('VariableDeclaration() kind:', path.node.kind); // const

        if (path.node.kind === 'const') {
          path.node.kind = 'var';
        }
      },
    },
  };
};
//npx babel ./src/app.js --plugins ./webpack/my-babel-plugin-2.js

// const -> var 로 변환해주는 등 블록 스코프>함수 스코프로 변환
// npx babel ./src/app.js --plugins @babel/plugin-transform-block-scoping

// // 화살표 함수 변환 추가
// npx babel ./src/app.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-arrow-functions

// // 설정파일 추가 후
// npx babel ./src/app.js

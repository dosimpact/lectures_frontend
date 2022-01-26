const apiMocker = require('connect-api-mocker');
const path = require('path');

module.exports = {
  before: (app, server, compiler) => {
    // {{host}}/api 로 요청을 하면
    // {{process.cwd()}}/webpack/mocks/api 의 디레터리 구조와 연동을 시켜준다.
    app.use(apiMocker('/api', 'webpack/mocks/api'));

    // 모든 /api 경로는 apiMocker에게 위임
    // app.get('/api', (req, res) => {
    //   res.json({
    //     message: 'server is running',
    //   });
    // });
  },
};

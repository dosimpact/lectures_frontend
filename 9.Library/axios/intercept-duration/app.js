const axios = require("axios").default;

axios.interceptors.request.use((x) => {
  // to avoid overwriting if another interceptor already defined the same object (meta)
  x.meta = x.meta || {};
  x.meta.requestStartedAt = new Date().getTime();
  return x;
});

axios.interceptors.response.use(
  (x) => {
    console.log(
      `Execution time for: ${x.config.url} - ${
        new Date().getTime() - x.config.meta.requestStartedAt
      } ms`
    );
    return x;
  },
  (x) => {
    // Handle 4xx & 5xx responses
    console.error(
      `Execution time for: ${x.config.url} - ${
        new Date().getTime() - x.config.meta.requestStartedAt
      } ms`
    );
    throw x;
  }
);
const run = async () => {
  // SUCCESS call
  await axios
    .get("https://jsonplaceholder.typicode.com/todos/1", {
      headers: { "x-trace-id": "1234-1234" },
    })
    .then((x) => x.data)
    .then((x) => console.log(x));

  // FAILED call - 404
  //     await axios.get('https://jsonplaceholder.typicode.com/todos12/1', { headers: { 'x-trace-id': '1234-1234'} })
  //         .then( x => x.data)
  //         .then( x => console.log(x))
};

const bootstrap = async () => {
  await run();
};

bootstrap();

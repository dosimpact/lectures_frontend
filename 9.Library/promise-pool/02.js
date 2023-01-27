const PromisePool = require("@supercharge/promise-pool").default;

const users = [
  { name: "Marcus", time: 1000 },
  { name: "Norman", time: 2500 },
  { name: "Christian 1", time: 1700 },
  { name: "Christian 2", time: 1700 },
  { name: "Christian 3", time: 2700 },
  { name: "Christian 4", time: 1700 },
  { name: "Christian 6", time: 3000 },
  { name: "Christian 7", time: 1700 },
  { name: "Christian 8", time: 3700 },
  { name: "Christian 9", time: 1700 },
];

async function run() {
  const { results, errors } = await PromisePool.for(users)
    .withConcurrency(2)
    .process(async ({ name, time }) => {
      await new Promise((resolve) => setTimeout(resolve, time));
      console.log(`waited ${name} ${time}ms`);
      return name;
    });

  console.log("Results ->      ");
  console.log(results);

  console.log(`Errors -> ${errors.length ? errors : "none"}`);
}

run();

#!/usr/bin/env node
var hi = require("./main");

// process.argv 에 실행 명령어의 인자가 있음.
// console.log(process.argv);

console.log("hi : ", hi[process.argv[2] || "ko"]);

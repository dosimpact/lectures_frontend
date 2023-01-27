var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const FORMAT = "YYYY년 MM월 DD일 HH:mm:ss";
const logm = (m) => console.log(`${m.format(FORMAT)}`);

// # [5] min max

var d1 = moment();
var d2 = moment().add(10, "day");
var d3 = moment().subtract(20, "day");
var d4 = moment().add(30, "day");

logm(d1);
logm(d2);
logm(d3);
logm(d4);

console.log("--> max");
logm(moment.max([d1, d2, d3, d4]));

console.log("--> min");
logm(moment.min([d1, d2, d3, d4]));

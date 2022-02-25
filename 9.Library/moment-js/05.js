var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const FORMAT = "YYYY년 MM월 DD일 HH:mm:ss";
const logm = (m) => console.log(`${m.format(FORMAT)}`);

// # [4] Display

// ## Difference
var d1 = moment();
var d2 = moment().add(10, "day");
console.log(d1.diff(d2)); // -864000001
console.log(d1.diff(d2, "day")); // -10

var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const FORMAT = "YYYY년 MM월 DD일 HH:mm:ss";
const logm = (m) => console.log(`${m.format(FORMAT)}`);

// # [3] Manipulate

// ## Add 1.0.0+

logm(moment());
logm(moment().add(1, "d"));
logm(moment().add(1, "day"));
logm(moment().add(1, "days"));
/**
2022년 02월 09일 13:03:25
2022년 02월 10일 13:03:25
2022년 02월 10일 13:03:25
2022년 02월 10일 13:03:25
 */

// ## endOf
// ✅ 한주단위, 하루단위 등 으로 slice 하고 싶다면.
logm(moment().endOf("week"));
logm(moment().endOf("day"));
/**
2022년 02월 12일 23:59:59
2022년 02월 09일 23:59:59
 */

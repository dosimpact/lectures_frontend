var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const FORMAT = "YYYY년 MM월 DD일 HH:mm:ss";
const logm = (m) => console.log(`${m.format(FORMAT)}`);

// # [4] Display

const campaignData = {
  startDate: "2022-01-27T00:00:00+09:00",
  endDate: "2022-07-27T00:00:00+09:00",
};

// eg)
const isBetween =
  moment(campaignData?.startDate) < moment() &&
  (campaignData?.endDate ? moment() < moment(campaignData?.endDate) : true);

console.log(isBetween);

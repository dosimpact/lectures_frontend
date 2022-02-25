/*
## 표준시

    GMT: Greenwich Mean Time의 약자로 영국 그리니치 천문대를 기준으로하는 평균 태양시를 의미합니다.
    UTC: Universal Time, Coordinated의 약자로 세슘 원자 진동수를 기준으로 만들어진 시간을 의미합니다.
    UTC+9: UTC의 기준시간에 9시간을 더한 시간, 즉 한국 표준시와 동일합니다.
    KTS: Korean Standard Time의 약자로 대한민국의 표준시입니다.

## moment-timezone

    moment-timezone, 선언한 moment의 타임존을 원하는 지역으로 설정

## unit

  namespace unitOfTime {
        type Base = (
            "year" | "years" | "y" |
            "month" | "months" | "M" |
            "week" | "weeks" | "w" |
            "day" | "days" | "d" |
            "hour" | "hours" | "h" |
            "minute" | "minutes" | "m" |
            "second" | "seconds" | "s" |
            "millisecond" | "milliseconds" | "ms"
        );
    }

 */

// var moment = require("moment");
var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

console.log(`${moment()}`); // Wed Feb 09 2022 10:18:27 GMT+0900
console.log(`${moment().format("YYYY년 MM월 DD일 HH:mm:ss")}`); // 2022년 02월 09일 10:09:32

console.log(`${moment().month()}`); // 1 ,오늘은 2월 ( 1월 = 0 ,)
console.log(`${moment().date()}`); // 9 , 오늘은 9 일
console.log(`${moment().day()}`); // 3  , 오늘은 수요일(=3)

console.log(`${moment().diff(moment("2022-02-08"), "days")}`); // 1
// diff( 02-08 , 02-09 ) -> 1 출력, 하루가 지났다 라고 읽기

// # [2] Get + Set

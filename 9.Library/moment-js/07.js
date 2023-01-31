var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const FORMAT = "YYYY년 MM월 DD일 HH:mm:ss";
const logm = (m) => console.log(`${m.format(FORMAT)}`);

// # [7] handling Date Object <-> String

/*

1. Axios로 시간객체(Moment,Date)를 보내면 자동으로 UTC로 변환된다. 왜그럴까?

axios에서 직접 UTC변환하는 작업이 없다. 이는 객체의 직렬화 ( 문자열로 변환 ) 할때 발생한다.
- axios에서 직렬화 수행을 위해 JSON.stringify를 호출  
- Date객체를 toJSON 을 호출 (Moment객체도 마찬가ㅣㅈ)
- date.toISOString 을 호출 

2. 시간의 기준을 UTC로 통일한다.

백앤드 시스템에서의 시간은 단 하나이다. UTC로 통일된다.
즉, 백앤드에 요청도 UTC로 변경해서 요청 해야 한다. 
- 백앤드의 DB시간도 UTC기준으로 저장되고, 검색한다.

각 다른 타임존에 있는 클라이언트를 생각해보자. 백앤드가 어드나라의 요청인지 파악하여
타임존 별로 UTC를 변환시켜줄 수 없다. 클라이언트에서 처리하도록 한다.


3. 시간객체가 있는 파라미터는 문자열로 변환 후 직렬화 한다. 

정확한 버그의 이유를 모르겠지만 '"2023-01-01T00:00:00.000Z"' 이렇게 문자열이 2번 래핑된다면

*/

console.log("Date toISOString \t", new Date().toISOString());
console.log("Date toJSON \t\t", new Date().toJSON());
console.log("moment toISOString \t", moment().toISOString());
console.log("moment toJSON \t\t", moment().toJSON());
console.log("--* All same \n");

console.log("JSON.stringify", JSON.stringify(moment()));
console.log("JSON.stringify", JSON.stringify(new Date()));
console.log("--* JSON Serialize - 1 All same \n");

console.log("JSON.stringify", JSON.stringify([moment(), moment()]));
console.log("JSON.stringify", JSON.stringify([new Date(), new Date()]));
console.log(
  "JSON.stringify",
  JSON.stringify({ startDate: moment(), endDate: moment() })
);
console.log("--* JSON Serialize - 2 All same \n");

console.log(
  "JSON.stringify",
  JSON.stringify([moment().toJSON(), moment().toJSON()])
);
console.log("JSON.stringify", JSON.stringify([moment(), moment()]));
console.log("--* JSON Serialize - 3 All same \n");

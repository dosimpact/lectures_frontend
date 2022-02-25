const formEl = document.querySelector("#formId");

// const targetObj = {
//   v: 1,
//   "user.name": "dodo",
//   "profile.email": "dodo@do.co",
//   "user.age": 1,
//   "profile.ph": "12)123-141",
//   "ref.user1.email": "user1@user.com",
// };
// const mayby = {
//   v: 1,
//   user: {
//     name: "dodo",
//     age: 1,
//   },
//   profile: {
//     email: "dodo@do.co",
//     ph: "12)123-141",
//   },
//   ref: {
//     user1: {
//       email: "user1@user.com",
//     },
//   },
// };

function upsertObj(obj, key, objValue) {
  obj[key] = key in obj ? { ...obj[key], ...objValue } : { ...objValue };
}
function parseNestedName(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  // 이름에 . 이 있으면 분리하여
  const keys = Object.keys(obj).sort();
  // . 기준으로 key값의 value object에 넣는다.
  const result = {};
  for (let key of keys) {
    if (key.includes(".")) {
      const idx = key.indexOf(".");
      const fKey = key.slice(0, idx);
      const bKey = key.slice(idx + 1);
      upsertObj(result, fKey, parseNestedName({ [bKey]: obj[key] }));
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
// const goalObj = parseNestedName(targetObj);
// console.log("goalObj", goalObj);

var wantedBody = {
  name: "dodo",
  refEmail: ["t1@t.c", "t2@t.c", "t3@t.c"],
  introduce:
    "At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",
  favCourse: "js", // radio button one of [js,ts,react]
  smsId: true, // checkbox -> boolean
  emailId: false, // checkbox -> boolean
  tags: ["A", "B"], //checkbox -> string array
  grade: 1, // select & option -> one of [1,2,3,4]
  startDate: "2021-08-05",
  endDateTime: "2021-08-05T11:42", // to ISO
  refer: {
    name: "참고인이름",
    age: 12,
  },
};

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(formEl);
  console.log(Object.fromEntries(formData));
  // 주의 : 중복된 name 값은 마지막 name값으로 대체된다.
  let defaultBody = Object.fromEntries(formData);
  console.log(defaultBody);

  // 1. checkbox parsing : string|undefeind => boolean

  // 객체의 키값이 존재하면 true, 존재 X라면 false
  //(1) if-else 구문 사용
  //   if ("notice_email" in defaultBody)
  //     defaultBody.notice_email = !!defaultBody.notice_email;
  //   else defaultBody.notice_email = false;

  // (2) 존재성 삼항 연산자 ( in, ? , !! )
  defaultBody.notice_sms =
    "notice_sms" in defaultBody ? !!defaultBody.notice_sms : false;

  //(3) !! 연산자 ?. 연산자 사용
  // !! ( undefined | string ) => boolean
  defaultBody.notice_email = !!defaultBody?.notice_email;

  // 2. refEmail,tags parsing :  =>  string[]
  defaultBody.tags = formData.getAll("tags");
  defaultBody.refEmail = formData.getAll("refEmail");
  console.log(defaultBody);
  // 3. time check (no effect)
  if ("endDateTime" in defaultBody && defaultBody.endDateTime)
    defaultBody.endDateTime = new Date(defaultBody.endDateTime).toISOString();
  console.log(defaultBody);
  // 4. parseNestedName
  defaultBody = parseNestedName(defaultBody);
  console.log(defaultBody);
});

const formEl = document.querySelector("#formId");

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
};

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  formElements();
  multiPartFormdata();
});

function formElements() {
  const body = {};
  for (let el of formEl.elements) {
    if (el.name && el.nodeName === "INPUT") {
      if (el.type === "text") {
        body[el.name] = el.value;
      }
      if (el.type === "checkbox" && el.checked) {
        body[el.name] = el.value;
      }
      if (el.type === "radio" && el.checked) {
        body[el.name] = el.value;
      }
    }
    if (el.name && el.nodeName === "TEXTAREA") {
      body[el.name] = el.value;
    }
    if (el.name && el.nodeName === "SELECT") {
      body[el.name] = el.value;
    }

    if (el.name === "grade") body[el.name] = Number(body[el.name]);

    if (el.name === "notice_sms") body[el.name] = !!body[el.name];
    if (el.name === "notice_email") body[el.name] = !!body[el.name];
  }
  body["tags"] = Array.from(formEl.elements)
    .filter((el) => el.name === "tags" && el.checked)
    .map((el) => el.value);

  body["refEmail"] = Array.from(formEl.elements)
    .filter((el) => el.name === "refEmail" && el.value)
    .map((el) => el.value);
  console.log(body);
}

function multiPartFormdata() {
  const formData = new FormData(formEl);
  // console.log(Object.fromEntries(formData));
  // 주의 : 중복된 name 값은 마지막 name값으로 대체된다.
  let defaultBody = Object.fromEntries(formData);
  // console.log(defaultBody);

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
  // console.log(defaultBody);
  // 3. time check (no effect)
  if ("endDateTime" in defaultBody && defaultBody.endDateTime)
    defaultBody.endDateTime = new Date(defaultBody.endDateTime).toISOString();
  // console.log(defaultBody);
  // 4. parseNestedName
  // defaultBody = parseNestedName(defaultBody);
  console.log(defaultBody);
}

# FormData

- 목적 : form -> application/json



```js
// 문서의 모든 form 태그 수집
document.forms
>HTMLCollection [form#formId, formId: form#formId]

// form태그의 하위 input 수집
document.forms[0].elements
>HTMLFormControlsCollection(18) [input#nameID, input, input, input, textarea#desc, input#Javascript, input#Tyescript, input#React, input#smsId, input#emailId, input#AId, input#BId, select#gradeId, input#startDateId, input#endDateTimeId, input, input, button, nameID: input#nameID, name: input#nameID, refEmail: RadioNodeList(3), desc: textarea#desc, introduce: textarea#desc, …]

// iterate
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
```

## ref
[https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection)

[https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
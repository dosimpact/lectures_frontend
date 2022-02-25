# FormData

- 목적 : form -> multipart/form-data -> application/json

```js
const formData = new FormData(formEl);
console.log(Object.fromEntries(formData));
// 주의 : 중복된 name 값은 마지막 name값으로 대체된다.
let defaultBody = Object.fromEntries(formData);
console.log(defaultBody);
```
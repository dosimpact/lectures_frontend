"use strict";
class App {}

const formElem = document.querySelector("#userProfile");

console.log(formElem);
formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);

  const fd = new FormData(formElem);
  const formState = Object.fromEntries(fd);
  console.log("formState", formState);
  for (let [name, value] of fd) {
    console.log(name, value);
  }
  //   console.log(fd.keys());
  //   console.log(fd.values());
  //   console.log(fd);
  //   for (var value of fd.values()) {
  //     console.log(value);
  //   }
});

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  const fd = new FormData(formElem);
  console.log(fd.getAll());
  console.log(fd.keys());
  console.log(fd.values());
});

// formElem.addEventListener("formdata", (e) => {
//   console.log("formdata fired");
//   // Get the form data from the event object
//   let data = e.formData;
//   for (var value of data.values()) {
//     console.log(value);
//   }
//   // submit the data via XHR
// });

const Joi = require("joi");

// joi : object validator
// - joi 의 장점 : 관계에 따른 (조건) validation 가능하다

const schema = Joi.object().keys({
  username: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.required":
            err.message = "username needed";
            break;
        }
      });
      return errors;
    }),
  date: Joi.number().integer().min(1900).max(2018),
});

const testcase = [
  {
    username: "dodo",
  },
  {
    username: "do",
  },
  {},
];

var { error, value, warning } = schema.validate(testcase[0]);
console.log(error, value);

var { error, value, warning } = schema.validate(testcase[1]);
console.log(error, value);

var { error, value, warning } = schema.validate(testcase[2]);
console.log(error, value);

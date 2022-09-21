/*
      'any.custom': [Object],
      'any.default': [Object],
      'any.failover': [Object],
      'any.invalid': [Object],
      'any.only': [Object],
      'any.ref': [Object],
      'any.required': [Object],
      'any.unknown': [Object],

        --- 

      'string.alphanum': [Object],
      'string.base': [Object],
      'string.base64': [Object],
      'string.creditCard': [Object],
      'string.dataUri': [Object],
      'string.domain': [Object],
      'string.email': [Object],
      'string.empty': [Object],
      'string.guid': [Object],
      'string.hex': [Object],
      'string.hexAlign': [Object],
      'string.hostname': [Object],
      'string.ip': [Object],
      'string.ipVersion': [Object],
      'string.isoDate': [Object],
      'string.isoDuration': [Object],
      'string.length': [Object],
      'string.lowercase': [Object],
      'string.max': [Object],
      'string.min': [Object],
      'string.normalize': [Object],
      'string.token': [Object],
      'string.pattern.base': [Object],
      'string.pattern.name': [Object],
      'string.pattern.invert.base': [Object],
      'string.pattern.invert.name': [Object],
      'string.trim': [Object],
      'string.uri': [Object],
      'string.uriCustomScheme': [Object],
      'string.uriRelativeOnly': [Object],
      'string.uppercase': [Object]
*/
const Joi = require("joi");

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

var { error, value, warning } = schema.validate(testcase[2]);
console.log(error, value);
console.log(error.message);

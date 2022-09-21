const qs = require("query-string");

const queryToString = (query) => qs.stringify(query, { encode: false });
const parseToString = (query) => qs.parse(query, { encode: false });

const query = { firstName: "John", lastName: "Doe" };
console.log("queryToString", queryToString(query));
console.log("parseToString", parseToString(queryToString(query)));

const obj = parseToString(queryToString(query));
console.log(obj["firstName"]);

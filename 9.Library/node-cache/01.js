const NodeCache = require("node-cache");
const myCache = new NodeCache();

// setter
var obj = { my: "Special", variable: 42 };
var success = myCache.set("myKey", obj, 10000);
console.log(success);

// getter
var value = myCache.get("myKey");
if (value == undefined) {
  // handle miss!
  console.log("no value");
} else {
  console.log("value", value);
}

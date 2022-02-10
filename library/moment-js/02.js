// var moment = require("moment");
var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

// # [1] Parse

// ## Clone Deep Copy
// 1. moment() constructor
// 2. clone method

var a = moment([2012]);
var b = moment(a);
a.year(2000);
b.year(); // 2012

var a = moment([2012]);
var b = a.clone();
a.year(2000);
b.year(); // 2012

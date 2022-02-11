import Zip = require("./export/ZipCodeValidator");

const testRes = new Zip().isAcceptable("05154");
console.log("Zip - testRes", testRes);

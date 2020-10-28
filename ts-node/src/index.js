"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var prod = process.env.NODE_ENV === 'production';
app.get("/", function (req, res) {
    res.send("hello world!");
});
app.listen((prod ? process.env.PORT : 4000), function () {
    console.log("server is running on " + process.env.PORT);
});

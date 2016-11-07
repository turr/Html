var fs = require("fs");

var data = fs.readFileSync('content.txt');
console.log(data.toString());
console.log("啊");
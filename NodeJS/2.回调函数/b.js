var fs = require("fs");

fs.readFile('content.txt', function (err, data) {
    if (err) return console.log(err.stack);
    console.log(data.toString());
});

console.log("程序执行结束!");



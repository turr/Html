//链式流
var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('content.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('content.txt.gz'));

console.log("文件压缩完成。");

setTimeout(function() {
	fs.createReadStream('content.txt.gz')
		.pipe(zlib.createGunzip())
		.pipe(fs.createWriteStream('content2.txt'));

	console.log("文件解压完成。");
}, 2000);
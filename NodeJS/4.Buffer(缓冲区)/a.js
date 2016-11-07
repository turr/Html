//写入缓冲区
//buf.write(string[, offset[, length]][, encoding])
//string - 写入缓冲区的字符串。
//offset - 缓冲区开始写入的索引值，默认为 0 。
//length - 写入的字节数，默认为 buffer.length
//encoding - 使用的编码。默认为 'utf8' 。

//从缓冲区读取数据
//buf.toString([encoding[, start[, end]]])
//encoding - 使用的编码。默认为 'utf8' 。
//start - 指定开始读取的索引位置，默认为 0。
//end - 结束位置，默认为缓冲区的末尾。

var buf1 = new Buffer(15);
var len1 = buf1.write("www.runoob.com");
console.log("写入字节数 : "+  len1);
console.log( buf1.toString('utf8'));
console.log();

var buf2 = new Buffer(15);
var len2 = buf2.write("www.runoob.com",0,10);
console.log("写入字节数 : "+  len2);
console.log( buf2.toString('utf8',0,5));

//将 Buffer 转换为 JSON 对象 
//buf.toJSON()  

var sjson = buf2.toJSON(buf2);
console.log(sjson);
console.log();


//缓冲区合并
//Buffer.concat(list[, totalLength])
//list - 用于合并的 Buffer 对象数组列表。
//totalLength - 指定合并后Buffer对象的总长度。

//拷贝缓冲区
//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
//targetBuffer - 要拷贝的 Buffer 对象。
//targetStart - 数字, 可选, 默认: 0
//sourceStart - 数字, 可选, 默认: 0
//sourceEnd - 数字, 可选, 默认: buffer.length

//缓冲区裁剪
//buf.slice([start[, end]])
//start - 数字, 可选, 默认: 0
//end - 数字, 可选, 默认: buffer.length

var concat1 = new Buffer('菜鸟教程 ');
var concat2 = new Buffer('www.runoob.com');
var concat_r = Buffer.concat([concat1,concat2]);
console.log("concat_r 内容: " + concat_r.toString('utf8'));

var copy_r = new Buffer(30);
concat_r.copy(copy_r);
console.log("copy_r content: " + copy_r.toString('utf8'));

var slice_r = copy_r.slice(0,12);
console.log("slice_r content: " + slice_r.toString('utf8'));

console.log();



//缓冲区比较
//buf.compare(otherBuffer);   返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
var compare1 = new Buffer('A');
var compare2 = new Buffer('B');
var compare_r = compare1.compare(compare2);

if(compare_r < 0) {
   console.log(compare1 + " 在 " + compare2 + "之前");
}else if(compare_r == 0){
   console.log(compare1 + " 与 " + compare2 + "相同");
}else {
   console.log(compare1 + " 在 " + compare2 + "之后");
}


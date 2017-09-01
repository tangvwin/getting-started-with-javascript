/同步方案

//引入fs模块
var fs = require('fs');

//定义要查询的目标文件夹
var dirPathString = '/Users/jianfengtang/words-from-the-heart';
//定义读取要写入的文件的存放路径，名称和格式
var outputPathString = './tang.txt';

//读取内容并赋值给写入文件
var outPutFileContent = fs.readdirSync(dirPathString);

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, outPutFileContent);

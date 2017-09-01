

//同步方案

//引入fs模块
var fs = require('fs');

//定义要查询的目标文件夹
var dirPathString = '/Users/jianfengtang/words-from-the-heart';
//定义读取要写入的文件的存放路径，名称和格式
var outputPathString = './tangjianfeng.txt';

//读取内容并赋值给写入文件
var outPutFileContent = fs.readdirSync(dirPathString);

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, outPutFileContent);



//异步方案
var fs =require('fs')
var readPathString = '/Users/jianfengtang/words-from-the-heart';
var writeFileString = './tangjianfeng1.txt';
function callback(err, files) {
    if (err) {
         console.log('读取文件失败');
         return;
    }
    if (files.length >0) {
        console.log(files);
        fs.writeFile(writeFileString, files, callbackwrite);
    } else {
        console.log('没有找到任何文件');
    }
}

 function callbackwrite(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
   
fs.readdir(readPathString,callback );
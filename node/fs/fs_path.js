const fs = require("fs");

// 使用相对路径与绝对路径创建文件

// fs.writeFileSync('./test.txt','hello world');
// fs.writeFileSync('D:/test.txt','hello world');

console.log(__dirname); // 当前文件所在目录的绝对路径

fs.writeFileSync(__dirname + "/test8.txt", "hello world");

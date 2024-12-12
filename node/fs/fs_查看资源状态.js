const fs = require("fs");
fs.stat("./test.txt", (err, stats) => {
  console.log(err, stats);
  // 判断是否是文件
  const isFile = stats.isFile();
  //判断是否文件夹
  const isDir = stats.isDirectory();
  console.log(isFile, isDir);
});

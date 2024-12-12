const path = require("path");
const fs = require("fs");
// 在绝对路径下创建文件
fs.writeFileSync(path.resolve(__dirname, "01.txt"), "hello");

console.log(path.resolve(__dirname, "01.txt"),"当前绝对路径")

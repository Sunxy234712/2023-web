// 创建文件夹
const fs = require("fs");
fs.mkdir("./view", (err) => {});

// 递归创建多层级文件夹
fs.mkdir("./view/a/b/c", { recursive: true }, (err) => {});

// 读取文件夹
fs.readdir("./view", (err, files) => {
  console.log(files);
});

// 删除文件夹
fs.rmdir("./view/a/b/c", (err) => {
  if (err) {
  } else {
    console.log("删除成功");
  }
});

// 递归删除
// fs.rmdir("./view/a", { recursive: true }, (err) => {
//   if (err) {
//   } else {
//     console.log("删除成功");
//   }
// })
// 建议使用
// fs.rmdir("./view/a", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("删除成功");
//   }
// });

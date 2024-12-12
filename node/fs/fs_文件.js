// 写入文件
const fs = require("fs");

// 异步写入
fs.writeFile("./test.txt", "异步写入：hello world", (err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("写入成功");
  }
});

// 同步写入
fs.writeFileSync("./test2.txt", "同步写入：hello world");

// 异步追加写入

fs.appendFile("./test.txt", "追加写入：hello nodeJs", (err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("追加写入成功");
  }
});

// 文件流写入 适用于大文件写入与多次频繁写入内容的常见
const ws = fs.createWriteStream("./test3.txt");
ws.write("床前明月光\r\n");
ws.write("床前明月光\r\n");
ws.write("疑是地上霜\r\n");
ws.write("举头望明月\r\n");
ws.write("低头思故乡\r\n");

ws.close();

// 文件读取

// 异步读取
fs.readFile("./test3.txt", (err, data) => {
  if (err) {
    // console.log(err)
  } else {
    // console.log(data.toString())
  }
});

// 同步读取
const data = fs.readFileSync("./test3.txt");
//console.log("同步读取\r\n",data.toString())

// 文件流读取
const rs = fs.createReadStream("./test3.txt");
rs.on("data", (chunk) => {
  // console.log(chunk.toString())
});
rs.on("end", () => {
  // console.log("读取完成")
});

// 练习

// 复制文件
// 逻辑：读取源文件，写入目标文件

fs.readFile("./test3.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("./test4.txt", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log("复制成功")
      }
    });
  }
});

// 使用流文件  先读再写

const rs2 = fs.createReadStream("./test3.txt");
const ws2 = fs.createWriteStream("./test6.txt");
// rs2.on("data",(chunk)=>{
//   ws2.write(chunk)
// })
rs2.pipe(ws2);

// 文件重命名与移动
fs.rename("./test6.txt", "./静夜思.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("重命名成功")
  }
});

// 文件删除

// fs.unlink("./静夜思.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log("删除成功")
//   }
// });

 fs.rm("./静夜思.txt", (err) => {});

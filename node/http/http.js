const http = require("http");
const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");
const mimes={
  css:"text/css",
  js:"text/javascript",
  png:"image/png",
  jpg:"image/jpeg",
  gif:"img/gif",
  mp4:"video/mp4",
  mp3:"audio/mp3",
  json:"application/json",
}
// 创建服务对象
http
  .createServer((request, response) => {
    const { pathname } = new URL(request.url, "http://127.0.0.1");
    // 读文件
    let root = __dirname;
    const filePath = root + pathname;
    const extname = path.extname(filePath).slice(1);
    console.log(extname);
    console.log("rootPath", root);
    console.log("pathname", pathname);
    console.log("filePath", filePath);
    // 设置响应头
    response.writeHead(200, {
      "Content-Type": ` ;charset=utf-8`,
    });
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.statusCode = 500;
        response.end("服务器内部错误");
      } else {
        response.statusCode = 200;
        response.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("3000端口监听中...");
  });

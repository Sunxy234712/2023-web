const path = require("path");
console.log(__filename); // 当前文件的绝对路径
console.log(path.parse(__filename));
const baseName = path.basename(__filename);
const extName = path.extname(__filename);
const dirName = path.dirname(__filename);
console.log(baseName, extName, dirName);


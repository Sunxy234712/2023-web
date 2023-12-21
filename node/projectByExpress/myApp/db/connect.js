const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/wechat')
const conn = mongoose.connection
conn.on('open', () => {
    console.log('数据库连接成功')
})
conn.on('error', (err) => {
    console.log('err', err)
})
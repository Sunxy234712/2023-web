const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    pwd: String
})
const userModel = mongoose.model('userModel', userSchema)
module.exports = userModel
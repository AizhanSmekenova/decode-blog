const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: String,
    fullname: String,
    password: String,
    repassword: String
})

module.exports = mongoose.model("user", UserSchema)
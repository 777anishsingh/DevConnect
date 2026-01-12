const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    age: Number,
    gender: String,
    password: String
});

module.exports = mongoose.model('User', userSchema)
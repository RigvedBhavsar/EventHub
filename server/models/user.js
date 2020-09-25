const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname :String,
    sname : String,
    email: String,
    pnum : Number,
    address : String,
    password: String
});

module.exports = mongoose.model('user', userSchema, 'users');
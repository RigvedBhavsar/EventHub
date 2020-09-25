const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventenrollSchema = new Schema({
    fname :String,
    sname : String,
    topic: String,
    email : String
});

module.exports = mongoose.model('enrollment', eventenrollSchema, 'enrollments');
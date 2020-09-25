const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speceveSchema = new Schema({
    name :String,
    description : String,
    teacher: String,
    date : String
});

module.exports = mongoose.model('specevent', speceveSchema, 'specevents');
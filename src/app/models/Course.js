const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    des: { type: String, maxLength: 700 },
    image: { type: String, maxLength: 355 },
    createdAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course, 'courses');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// them slug vao model courses
const slug = require('mongoose-slug-generator');
// soft delete by mongoose-delete
const mongooseDelete = require('mongoose-delete');
const course = new Schema({
    name: { type: String, match: /[a-z]/, require: true }, //<- tên không được quá 255 kí tự
    description: { type: String, maxLenght: 600 },
    img: { type: String, maxLenght: 255 },
    videoID: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }, // unique dùng để sử dụng thư viện shortID để tạo ra các slug ko trùng lặp
    createAt: { type: Date, default: Date.now }, //<- lưu trữ thời gian mà dữ liệu dc tạo
    updateAt: { type: Date, default: Date.now }, //<- lưu trữ thời gian mà dữ liệu được cập nhập

});
//add plugin
mongoose.plugin(slug);
course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true }); // add plugin cho mongoose hay course cung dc
module.exports = mongoose.model('course', course);
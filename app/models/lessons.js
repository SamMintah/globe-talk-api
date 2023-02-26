const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
  media: {
    type: [{ type: String, required: true }],
    validate: [arrayLimit, '{PATH} exceeds the limit of 10']
  },
  createdDate: { type: Date, default: Date.now }
});

function arrayLimit(val) {
  return val.length <= 10;
}

module.exports = mongoose.model('Lesson', lessonSchema);

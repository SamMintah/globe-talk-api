const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vocabularySchema = new Schema({
  word: { type: String, required: true },
  language: { type: String, required: true },
  meaning: { type: String, required: true },
  usage: { type: String },
  example: { type: String },
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vocabulary', vocabularySchema);

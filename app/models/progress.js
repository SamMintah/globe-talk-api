const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
  vocabularyIds: [{ type: Schema.Types.ObjectId, ref: 'Vocabulary' }],
  isCompleted: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Progress', progressSchema);

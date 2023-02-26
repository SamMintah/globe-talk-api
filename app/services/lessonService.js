const Lesson = require('../models/lesson');

const lessonService = {
  getAllLessons: async () => {
    try {
      const lessons = await Lesson.find();
      return lessons;
    } catch (err) {
      throw new Error(`Failed to fetch lessons: ${err.message}`);
    }
  },

  getLessonById: async (id) => {
    try {
      const lesson = await Lesson.findById(id);
      return lesson;
    } catch (err) {
      throw new Error(`Failed to fetch lesson: ${err.message}`);
    }
  },

  createLesson: async (lessonData) => {
    try {
      const lesson = new Lesson(lessonData);
      await lesson.save();
      return lesson;
    } catch (err) {
      throw new Error(`Failed to create lesson: ${err.message}`);
    }
  },

  updateLessonById: async (id, lessonData) => {
    try {
      const updatedLesson = await Lesson.findByIdAndUpdate(id, lessonData, { new: true });
      return updatedLesson;
    } catch (err) {
      throw new Error(`Failed to update lesson: ${err.message}`);
    }
  },

  deleteLessonById: async (id) => {
    try {
      const deletedLesson = await Lesson.findByIdAndDelete(id);
      return deletedLesson;
    } catch (err) {
      throw new Error(`Failed to delete lesson: ${err.message}`);
    }
  }
};

module.exports = lessonService;

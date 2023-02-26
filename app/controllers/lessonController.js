const Lesson = require('../models/Lesson');

// Controller function for creating a new lesson
exports.createLesson = async (req, res) => {
  try {
    const { title, description, language, level } = req.body;

    const newLesson = new Lesson({
      title,
      description,
      language,
      level
    });

    const savedLesson = await newLesson.save();

    res.status(201).json({
      message: 'Lesson created successfully',
      lesson: savedLesson
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Controller function for retrieving a single lesson by ID
exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Controller function for updating a lesson by ID
exports.updateLessonById = async (req, res) => {
  try {
    const { title, description, language, level } = req.body;

    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    lesson.title = title;
    lesson.description = description;
    lesson.language = language;
    lesson.level = level;

    const savedLesson = await lesson.save();

    res.json({
      message: 'Lesson updated successfully',
      lesson: savedLesson
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Controller function for deleting a lesson by ID
exports.deleteLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    await lesson.remove();

    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

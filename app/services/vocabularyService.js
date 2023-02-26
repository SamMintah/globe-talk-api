const Vocabulary = require('../models/vocabulary');

const createVocabulary = async (data) => {
  try {
    const vocabulary = new Vocabulary(data);
    const savedVocabulary = await vocabulary.save();
    return savedVocabulary;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllVocabularies = async () => {
  try {
    const vocabularies = await Vocabulary.find();
    return vocabularies;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getVocabularyById = async (id) => {
  try {
    const vocabulary = await Vocabulary.findById(id);
    if (!vocabulary) {
      throw new Error(`Vocabulary with id ${id} not found`);
    }
    return vocabulary;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateVocabularyById = async (id, data) => {
  try {
    const vocabulary = await Vocabulary.findByIdAndUpdate(id, data, { new: true });
    if (!vocabulary) {
      throw new Error(`Vocabulary with id ${id} not found`);
    }
    return vocabulary;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteVocabularyById = async (id) => {
  try {
    const vocabulary = await Vocabulary.findByIdAndDelete(id);
    if (!vocabulary) {
      throw new Error(`Vocabulary with id ${id} not found`);
    }
    return vocabulary;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createVocabulary,
  getAllVocabularies,
  getVocabularyById,
  updateVocabularyById,
  deleteVocabularyById,
};

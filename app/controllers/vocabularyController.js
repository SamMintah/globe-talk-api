const Vocabulary = require('../models/vocabulary');

// Controller actions for vocabulary
const vocabularyController = {
  // Get all vocabularies
  getAll: async (req, res) => {
    try {
      const vocabularies = await Vocabulary.find();
      res.status(200).json(vocabularies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single vocabulary by id
  getById: async (req, res) => {
    try {
      const vocabulary = await Vocabulary.findById(req.params.id);
      if (vocabulary) {
        res.status(200).json(vocabulary);
      } else {
        res.status(404).json({ message: 'Vocabulary not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new vocabulary
  create: async (req, res) => {
    const vocabulary = new Vocabulary({
      // Add vocabulary properties from request body here
    });

    try {
      const newVocabulary = await vocabulary.save();
      res.status(201).json(newVocabulary);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update an existing vocabulary by id
  update: async (req, res) => {
    try {
      const vocabulary = await Vocabulary.findByIdAndUpdate(
        req.params.id,
        {
          // Add updated vocabulary properties from request body here
        },
        { new: true }
      );
      if (vocabulary) {
        res.status(200).json(vocabulary);
      } else {
        res.status(404).json({ message: 'Vocabulary not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a vocabulary by id
  delete: async (req, res) => {
    try {
      const vocabulary = await Vocabulary.findByIdAndDelete(req.params.id);
      if (vocabulary) {
        res.status(200).json({ message: 'Vocabulary deleted' });
      } else {
        res.status(404).json({ message: 'Vocabulary not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = vocabularyController;

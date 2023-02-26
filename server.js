const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(helmet());
app.use(compression());

// Routes
const userRoutes = require('./app/routes/userRoutes');
const lessonRoutes = require('./app/routes/lessonRoutes');
const vocabRoutes = require('./app/routes/vocabRoutes');
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/vocab', vocabRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// MongoDB connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

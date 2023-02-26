# globe-talk-api
Language Learning App
# Globe-Talk API

Globe-Talk is a language learning platform that allows users to connect with native speakers to improve their language skills. This repository contains the backend API for the Globe-Talk platform.

## Getting Started

To use the Globe-Talk API, you will need to have Node.js and MongoDB installed on your machine. You can then follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/globe-talk-api.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The server will start running on `http://localhost:5000`.


## API Documentation
The Globe-Talk API consists of the following endpoints:


## API Endpoints

### Authentication
- `POST /users/register`: Register a new user
- `POST /users/login`: Login as an existing user

### Users
- `GET /users/:id`: Get user information by ID
- `PUT /users/:id`: Update user information by ID
- `DELETE /users/:id`: Delete user by ID

### Lessons

- `GET /lessons`: Get all lessons
- `GET /lessons/:id`: Get lesson by ID
- `POST /lessons`: Create a new lesson
- `PUT /lessons/:id`: Update lesson by ID
- `DELETE /lessons/:id`: Delete lesson by ID

### Vocabulary

- `GET /vocabulary`: Get all vocabulary
- `GET /vocabulary/:id`: Get vocabulary word by ID
- `POST /vocabulary`: Create a new vocabulary word
- `PUT /vocabulary/:id`: Update vocabulary word by ID
- `DELETE /vocabulary/:id`: Delete vocabulary word by ID

## Error Handling
If an error occurs in any endpoint, the API will return a JSON object with an error property and a corresponding HTTP status code.


## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
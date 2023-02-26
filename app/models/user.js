const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nativeLanguage: { type: String, required: true },
  learningLanguage: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
  isVerified: { type: Boolean, default: false },
  lastActive: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);

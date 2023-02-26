const User = require('../models/user');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    throw new Error('Error finding user');
  }
};

const updateUser = async (userId, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!updatedUser) throw new Error('User not found');
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) throw new Error('User not found');
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};

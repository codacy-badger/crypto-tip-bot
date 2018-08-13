import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  }
});

const UserModel = mongoose.model('users', userSchema, 'users');

export { UserModel as default };

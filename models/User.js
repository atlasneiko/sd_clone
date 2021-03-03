const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    orderHistory: {
      type: objectId
    },
    phoneNumber: {
      type: String
    }

  }
)

module.exports = User = mongoose.model('User', UserSchema);

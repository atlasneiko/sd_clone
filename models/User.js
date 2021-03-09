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
    type: {
      type: String,
      default: 'guest'
    },
    orderHistory: {
      type: Schema.Types.ObjectId
    },
    phone: {
      type: String
    }

  }
)

module.exports = User = mongoose.model('User', UserSchema);

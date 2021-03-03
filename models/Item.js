const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    modifiers: [objectId],

  }
)

module.exports = Item = mongoose.model("Item", ItemSchema);
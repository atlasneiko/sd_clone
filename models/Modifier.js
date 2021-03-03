const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModifierSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0
    }

  }
)

module.exports = Modifier = mongoose.model("Modifier", ModifierSchema);
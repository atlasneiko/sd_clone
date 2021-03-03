const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    items: {
      type: Map,
      of: Number
    }
  },
  {
    timestamp: true
  }
)

module.exports = Order = mongoose.model("Order", OrderSchema);
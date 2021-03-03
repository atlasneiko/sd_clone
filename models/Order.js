const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    
  },
  {
    timestamp: true
  }
)

module.exports = Order = mongoose.model("Order", OrderSchema);
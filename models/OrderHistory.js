const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderHistorySchema = new Schema(
  {
    orders: [objectId]
  }
)

module.exports = OrderHistory = mongoose.model("OrderHistory", OrderHistorySchema);
const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema"); // ✅ Orders যোগ করো

const OrdersModel = mongoose.model("order", OrdersSchema); // ✅ Orders যোগ করো

module.exports = { OrdersModel };
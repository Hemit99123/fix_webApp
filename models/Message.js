const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
message: String

});

module.exports = new mongoose.model("message", messageSchema);
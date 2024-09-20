const mongoose = require("mongoose");
const config = require("../config/config");

const database = mongoose.createConnection(config.MONGO_URI);

module.exports = database;

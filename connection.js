const mongoose = require("mongoose");

async function databaseconnection(url) {


  await mongoose.connect(url);

}

module.exports = { databaseconnection}
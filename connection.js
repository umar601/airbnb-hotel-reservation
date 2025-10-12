require("dotenv").config();
const mongoose = require("mongoose");

async function testConnection() {
  try {
    console.log("🔹 Attempting to connect to MongoDB Atlas...");
    await mongoose.connect(process.env.ATLASDB_URL); // no deprecated options
    console.log("✅ Connected to MongoDB Atlas successfully!");

    // Optional: List databases
    const admin = new mongoose.mongo.Admin(mongoose.connection.db);
    const dbs = await admin.listDatabases();
    console.log("Databases in cluster:");
    dbs.databases.forEach(db => console.log(" -", db.name));

    await mongoose.connection.close();
    console.log("🔹 Connection closed.");
  } catch (err) {
    console.error("❌ Connection failed!");
    console.error(err.message);
  }
}

testConnection();

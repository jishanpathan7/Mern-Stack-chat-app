const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongodburi, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        })
        console.log(`MongoDB Connected to the Database:${conn.connection.host}😊🌍.`.america);
    } catch (err) {
        console.error(`Error connecting to the Database. ${err.message}`.red.bold);
        process.exit(1);
    }
};
module.exports = connectDB;

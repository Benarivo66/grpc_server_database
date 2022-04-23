const mongoose = require('mongoose');

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = () => {
    try {
        mongoose.connect(MONGO_URI);
        console.log("db connected");
    } catch (error) {
        throw Error(error);
    }
    
}
module.exports = connectDB;
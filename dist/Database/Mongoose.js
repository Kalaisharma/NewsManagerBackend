"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/NewsManager";

const newsSchema = new mongoose.Schema(
  {
    fullName: String,
    address: String,
    email: String,
    mobileNumber: String,
    feedback: String,
    country: String,
    state: String,
  },
  { collection: "UserFeedback" }
); // Explicitly specify the collection name

const News = mongoose.model("UserFeedback", newsSchema);
exports.News = News;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

exports.connectDB = connectDB;

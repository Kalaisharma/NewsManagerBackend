"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = void 0;

const Mongoose_1 = require("../Database/Mongoose");

const getNews = async (req, res) => {
  try {
    await (0, Mongoose_1.connectDB)(); // Establish connection

    const { fullName, address, email, mobileNumber, feedback, country, state } =
      req.body;
    console.log(
      fullName,
      address,
      email,
      mobileNumber,
      feedback,
      country,
      state
    );

    const newArticle = new Mongoose_1.News({
      fullName,
      address,
      email,
      mobileNumber,
      feedback,
      country,
      state,
    });
    const result = await newArticle.save();
    console.log("New article saved:", result);

    res
      .status(201)
      .json({
        message: "News article added successfully",
        article: newArticle,
      });
  } catch (error) {
    console.error("Error adding news:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getNews = getNews;

"use strict";
const express = require("express");
const cors = require("cors");
const router = require("./Routes/Routes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" })); // Enable CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/news", router);

// Gracefully close MongoDB connection on app shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed gracefully");
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});

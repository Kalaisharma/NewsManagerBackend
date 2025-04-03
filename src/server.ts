import express, { Application } from "express";
import cors from "cors";
//import dotenv from "dotenv";
import router from "./Routes/Routes";
// import errorHandler from "./middlewares/errorHandler";

// Load environment variables
require("dotenv").config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

//"https://mynewsmanager.netlify.app"
// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Routes
app.use("/news", router);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});

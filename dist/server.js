"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Routes_1 = __importDefault(require("./Routes/Routes"));
// import errorHandler from "./middlewares/errorHandler";
// Load environment variables
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Parse JSON requests
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded requests
// Routes
app.use("/api", Routes_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

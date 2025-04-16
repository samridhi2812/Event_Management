import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import eventRoute from "./route/event.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Env variables
const PORT = process.env.PORT || 4001;
const URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// Routes
app.use("/event", eventRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

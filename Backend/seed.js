import mongoose from "mongoose";
import dotenv from "dotenv";
import events from "./eventsData.js"; // adjust path based on actual file location
import Event from "./model/event.model.js"; // adjust path to model if needed

dotenv.config();

const seedEvents = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Clear old data
    await Event.deleteMany();
    console.log("Old events removed");

    // Insert new data
    await Event.insertMany(events);
    console.log("New events inserted");

    process.exit(); // Exit successfully
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1); // Exit with failure
  }
};

seedEvents();

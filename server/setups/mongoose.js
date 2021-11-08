import mongoose from "mongoose";
import {config} from "dotenv";

config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting MongoDb"));

db.on("open", () => {
  console.log("Database connected successfully.");
});

export default mongoose;

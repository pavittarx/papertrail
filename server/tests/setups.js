import { config } from "dotenv";
import mongoose from "mongoose";

config();

export const setupMongoose = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose;
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "ConnectionError"));
db.once("open", () => console.log("DB Connected Successfully"));
db.on("close", () => console.log("Connection Closed"));

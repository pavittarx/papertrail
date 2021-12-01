import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    task: String,
    description: String,
    type: {
      type: String,
      enum: ["scheduled", "completed", "overdue"]
    },
    time: {
      type: Date,
      default: Date.now()
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users"
    }
  },
  { timestamps: true }
);

const Plans = mongoose.model("plans", planSchema);

export default Plans;
import mongoose from "mongoose";

const { Types } = mongoose.Schema;

const shopsSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    cover: String,
    products: [
      {
        type: Types.ObjectId,
        ref: "products",
      },
    ],
    seller: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Shops = mongoose.model("shops", shopsSchema);

export default Shops;

import mongoose from "mongoose";

const { Types } = mongoose.Schema;

const productsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    inStock: Boolean,
    images: [String],
    shop: {
      type: Types.ObjectId,
      ref: "shops",
    },
    seller: {
      type: Types.ObjectId,
      ref: "users",
    },
    published: Boolean,
  },
  { timestamps: true }
);

const Products = mongoose.model("products", productsSchema);

export default Products;

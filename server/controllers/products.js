import { Products } from "models";

import { Success } from "@/_utils/response";

export const createProduct = async (req, res) => {
  const { _id, shop } = res.locals.user;

  const product = await Products.create({ ...req.body, seller: _id, shop });

  if (!product)
    throw new Error("Unable to add product. Please try again later.");

  res.json(Success("Product added successfully.", { product }));
};

export const putProduct = async (req, res) => {
  const { _id } = res.locals.user;
  const { id } = req.body;

  const updatedProduct = await Products.findOneAndUpdate(
    { _id: id, seller: _id },
    { ...req.body, seller: _id, shop },
    { new: true }
  );

  if (!updatedProduct)
    throw new Error("The product does not exist or does not belong to you.");

  res.json(Success("Product updated successfully.", { product }));
};

/// todo: setup S3 & Multer 
export const uploadImages = async (req, res) => {};

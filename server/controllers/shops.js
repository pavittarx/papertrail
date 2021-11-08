import { Shops } from "models";

export const createShop = async (req, res) => {
  const { _id } = res.locals.user;

  const shop = await Shops.findOne({ name: req.body.name });

  if (shop)
    throw new Error(
      "Shop with given name has already been registered. Please try a different name."
    );

  const newShop = await Shops.create({ ...req.body, seller: _id });

  /// todo: needs finishing
};

export const putShop = (req, res) => {};

export const uploadLogo = (req, res) => {};

export const uploadCover = (req, res) => {};

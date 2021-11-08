import { Users } from "models";
import { Success } from "_utils/response";

export const getUser = async (req, res) => {
  const { _id } = res.locals.user;

  const user = await Users.findOne({ _id });

  if (!user) throw new Error("Unable to fetch user. Please try again.");

  res.json(Success("Fetched user successfully", { user }));
};

export const putUser = async (req, res) => {
  const { _id } = res.locals.user;

  /// removes password, type from req.body
  const { password, type, ...update } = req.body;

  /// mongoose removes any extra properties (apart from model) automatically.
  const user = await Users.findOneAndUpdate({ _id }, update, {
    new: true,
    useFindAndModify: false,
  });

  if (!user)
    throw new Error("Error while updating user. Please try again later.");

  res.json(Success("User updated successfully.", { user }));
};

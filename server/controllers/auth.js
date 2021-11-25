import { Users } from "models";

import {
  createToken,
  verifyAndDecodeToken,
  encryptSecret,
  verifySecret,
} from "_utils/auth";
import { Success } from "_utils/response";

export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const user = await Users.findOne({ email });

  if (user) throw new Error("The email already exists. Please login.");

  const hash = await encryptSecret(password);

  const newUser = await Users.create({
    name,
    email,
    password: hash,
    phone
  });

  if (!newUser._id) throw new Error("Error while creating new User");

  const { _id, password: _, ...userData } = newUser._doc;

  const token = await createToken({ _id });

  res.json(
    Success("User has been registered successfully.", {
      token,
      user: { _id, ...userData },
    })
  );
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });

  if (!user)
    throw new Error(
      "User with provided email does not exist. Please register."
    );

  const { _id, password: hash, ...userData } = user._doc;

  if (!verifySecret(password, hash))
    throw new Error("Please provide valid login credentials.");

  const token = await createToken({ _id });

  res.json(
    Success("User Logged in Successfully.", {
      token,
      user: { _id, ...userData },
    })
  );
};

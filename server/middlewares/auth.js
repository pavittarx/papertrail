import { Users } from "models";
import { verifyAndDecodeToken } from "_utils/auth";

export const authenticate = async (req, res, next) => {
  const token =
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ").pop();

  if (!token) throw new Error("Authentication Token Missing.");

  const tokenData = await verifyAndDecodeToken(token);

  const { _id } = tokenData;

  const user = await Users.findOne({ _id });

  if (!user || !user._id)
    throw new Error("The user for provided token does not exist.");

  res.locals.user = user;

  next();
};

export const checkType = (typeToCheck) => {
  return (_, res, next) => {
    const { type } = res.locals.user;

    if (type !== typeToCheck) throw new Error("Unauthorized: Invalid User");

    next();
  };
};

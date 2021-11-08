import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

import { TOKEN_AGE } from "_config/app";

config();

/**
 * Creates a JWT Token from given data
 * @param {data} - object
 * @returns JWT Token String
 */
export const createToken = async (data) => {
  return await jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: TOKEN_AGE,
  });
};

/**
 * Verifies and Decodes given JWT Token
 * @param {token} - JWT Token String
 * @returns Boolean
 */
export const verifyAndDecodeToken = async (token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

/**
 * Encrypts any secret say, Password
 * @param {secret} - string 
 * @returns hash
 */
export const encryptSecret = async (secret) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(secret, salt);
};

/**
 * Checks provided secret against the provided hash.
 * @param {*} secret 
 * @param {*} hash 
 * @returns Boolean
 */
export const verifySecret = async (secret, hash) => {
  return await bcrypt.compare(secret, hash);
};

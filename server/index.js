/**
 * Sets up and starts the express server
 */

import app from "./app";
import { config } from "dotenv";
import mongoose from "setups/mongoose";

config();

app.listen(process.env.PORT, () =>
  console.log(`[Ready]: Listening at ${process.env.PORT}`)
);

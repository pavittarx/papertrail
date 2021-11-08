import express from "express";
import cors from "cors";
import { config } from "dotenv";

import { authRouter, userRouter } from "./routes";

/**
 * Picks up Env. variables from the .env file.
 */
config();

const app = express();

/**
 * Express related Middlewares
 */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Routes Configuration
 */

app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);

/**
 * Sample Test Route for Express Testing
 */
app.get("/", (_, res) => {
  res.json({
    message: `Server up at Port ${process.env.PORT}`,
  });
});

export default app;

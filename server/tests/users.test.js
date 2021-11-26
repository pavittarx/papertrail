import supertest from "supertest";
import { config } from "dotenv";

import app from "server/app";
import { setupMongoose } from "./setups";
import mongoose from "setups/mongoose";
import jestConfig from "jest.config";

describe("User Routes", () => {
  let _app;
  let _req;
  let _mongoose;
  let _token;

  const userCreds = {
    name: "John Doe",
    email: "john@johndoe.com",
    password: "johnDoe123"
  };

  const headers = (token) => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  })

  beforeAll(async () => {
    jest.setTimeout(20 * 1000);

    _app = app.listen(process.env.PORT);
    _req = supertest.agent(_app);
    _mongoose = await setupMongoose();

    // Setup User
    const response = await _req.post("/api/v1/register").send(userCreds);
    const { body } = response;

    if (body.error) {
      console.log(body.data.errors);
      throw new Error(body.data.errors);
    }

    _token = body.data.token;

  });

  afterAll(async () => {
    const res = await _mongoose.connection.db.collection("users").deleteOne({email: userCreds.email});

    console.log("end res", res);

    await _mongoose.connection.close();
    await _mongoose.disconnect();
    await _app.close();
  });

  test("Get User", async () => {
    const response = await _req.get("/api/v1/user").set(headers(_token));

    const { body } = response;

    expect(body.error).toBeUndefined();
    expect(body.data.user.name).toBe(userCreds.name);
    expect(body.data.user.email).toBe(userCreds.email);
    expect(typeof body.data.user._id).toBe("string");

    return response;
  });

  test("PUT User", async () => {
    const userUpdate = {
      name: "Bonny White",
      type: "seller"
    }

    const response = await _req.put("/api/v1/user").set(headers(_token)).send(userUpdate);

    const { body } = response;

    expect(body.error).toBeUndefined();
    expect(body.data.user.name).toBe(userUpdate.name);
    expect(body.data.user.type).not.toBe(userUpdate.type);

    return response;
  })
});

import { expect } from "@jest/globals";
import supertest from "supertest";
import { config } from "dotenv";

import { setupMongoose } from "./setups";

import app from "app";

config();

describe("Auth Features", () => {
  let _req;
  let _app;
  let _mongoose;

  beforeAll(async () => {
    jest.setTimeout(20 * 1000);

    _app = app.listen(process.env.PORT);
    _req = supertest.agent(app);
    _mongoose = await setupMongoose();
  });

  afterAll(async () => {
    await _mongoose.connection.db.dropCollection("users");

    await _mongoose.connection.close();
    await _mongoose.disconnect();
    await _app.close();
  });

  const user = {
    name: "Danny Wrath",
    email: "hello@wrath.com",
    password: "123456789",
    type: "buyer",
    phone: "9995577733",
  };

  test("Register User", async () => {
    const db_user = await _req.post("/api/v1/register").send(user);

    expect(db_user).toBeDefined();

    const { body } = db_user;

    expect(body.message).toBe("User has been registered successfully.");

    expect(typeof body.data.token).toBe("string");

    return db_user;
  });

  test("User Login", async () => {
    const db_user = await _req
      .post("/api/v1/login")
      .send({ email: user.email, password: user.password });

    expect(db_user).toBeDefined();

    const { body } = db_user;

    expect(body.error).toBeUndefined();
    expect(typeof body.message).toBe("string");
    expect(typeof body.data.token).toBe("string");

    return db_user;
  });
});

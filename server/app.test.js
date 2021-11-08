import { config } from "dotenv";

config();

import supertest from "supertest";
import app from "./app";
import { setupMongoose } from "tests/setups";

describe("Basic Testing", () => {
  let _app;
  let _req;
  let _mongoose;

  beforeAll(async () => {
    _app = app.listen(8000);
    _req = supertest.agent(_app);
    _mongoose = await setupMongoose();

  });

  test("/ Route ", async () => {
    const response = await _req.get("/");

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({
      message: "Server up at Port 7000",
    });

    return response;
  });

  afterAll(async () => {
    await _mongoose.connection.close();
    await _mongoose.disconnect();
    await Promise.all(_mongoose.connections.map(con => con.close()));
    _app.close();
  });

  afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });
});

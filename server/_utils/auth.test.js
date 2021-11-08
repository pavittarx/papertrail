import { expect, it } from "@jest/globals";
import {
  createToken,
  verifyAndDecodeToken,
  encryptSecret,
  verifySecret,
} from "_utils/auth";

describe("Auth Utilities (_utils/auth)", () => {
  const tokenData = {
    _id: "0027",
    name: "pavittarx",
  };

  const secret = "pavittarx";

  it("createToken Method ", async () => {
    const token = await createToken(tokenData);

    expect(token).toBeDefined();
    expect(typeof token).toBe("string");

    return token;
  });

  it("verifyAndDecodeToken Method", async () => {
    const token = await createToken(tokenData);

    const data = await verifyAndDecodeToken(token);

    expect(data).toBeDefined();
    expect(data).toMatchObject(tokenData);

    return data;
  });

  it("encryptSecret: ", async () => {
    const hash = await encryptSecret(secret);

    expect(hash).toBeDefined();
    expect(typeof hash).toBe("string");

    return hash;
  });

  it("verifySecret", async () => {
    const hash = await encryptSecret(secret);

    const result = await verifySecret(secret, hash);

    expect(result).toBeDefined();
    expect(result).toBeTruthy();

    return result;
  });
});

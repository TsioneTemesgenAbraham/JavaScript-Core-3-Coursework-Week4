let verify = require("./password-verifier");

test("If the password is less than 8 characters", function () {
  expect(verify("mimimimi")).toBe("Password accepted");
});

test("If the password is null", function () {
  expect(verify("")).toBe("Password rejected");
});

test("If the password does not have at least 1 uppercase letter", function () {
  expect(verify("miMimimi")).toBe("Password accepted");
});

test("If the password does have at least 1 number", function () {
  expect(verify("miMifim1")).toBe("Password accepted");
});

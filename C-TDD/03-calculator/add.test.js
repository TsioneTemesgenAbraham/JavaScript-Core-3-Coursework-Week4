let adding = require("./add");

test("Return 0 for ''", function () {
  expect(adding("")).toBe(`0`);
});

test("Return the same number if it's only one argument", function () {
  expect(adding("5")).toBe(`5`);
});

test("Return the sum of two numbers", function () {
  expect(adding("5,3")).toEqual(`8`);
});

//

test("Numbers bigger than 1000 should be ignored", function () {
  expect(adding("5,30,1001")).toEqual(`35`);
});

test("A negative number will throw an error", function () {
  expect(adding("5,-30")).toEqual(`"negatives not allowed: -30"`);
});

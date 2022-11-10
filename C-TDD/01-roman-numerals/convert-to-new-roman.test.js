let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman(1)).toBe("I");
  expect(convertToNewRoman(4)).toBe("IV");
  expect(convertToNewRoman(9)).toBe("IX");
  expect(convertToNewRoman(300)).toBe("CCC");
  expect(convertToNewRoman(200)).toBe("CC");
  expect(convertToNewRoman(99)).toBe("XCIX");
});

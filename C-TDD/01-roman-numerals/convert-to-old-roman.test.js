let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toBe("I");
  expect(convertToOldRoman(4)).toBe("IIII");
  expect(convertToOldRoman(9)).toBe("VIIII");
  expect(convertToOldRoman(300)).toBe("CCC");
  expect(convertToOldRoman(200)).toBe("CC");
  expect(convertToOldRoman(99)).toBe("XCVIIII");
});

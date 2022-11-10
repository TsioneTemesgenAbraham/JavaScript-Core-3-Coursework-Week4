function convertToNewRoman(n) {
  let roman = "";

  roman += "M".repeat(n / 1000);
  n %= 1000;
  roman += "CM".repeat(n / 900);
  n %= 900;
  roman += "D".repeat(n / 500);
  n %= 500;
  roman += "CD".repeat(n / 400);
  n %= 400;
  roman += "C".repeat(n / 100);
  n %= 100;
  roman += "XC".repeat(n / 90);
  n %= 90;
  roman += "L".repeat(n / 50);
  n %= 50;
  roman += "XL".repeat(n / 40);
  n %= 40;
  roman += "X".repeat(n / 10);
  n %= 10;
  roman += "IX".repeat(n / 9);
  n %= 9;
  roman += "V".repeat(n / 5);
  n %= 5;
  roman += "IV".repeat(n / 4);
  n %= 4;
  roman += "I".repeat(n);

  return roman;
}

module.exports = convertToNewRoman;

function adding(numbers) {
  if (numbers == "") {
    return "0";
  }

  if (numbers.includes("-")) {
    // throw new Error("negative");
    let newNegative = numbers
      .split(",")
      .map(Number)
      .filter((num) => num < 0);

    return `"negatives not allowed: ${newNegative}"`;
  }

  if (numbers.length === 1) {
    return `${numbers}`;
  }

  if (numbers.length >= 2 && numbers.split(",").map((num) => num > 1000)) {
    let newN = numbers
      .split(",")
      .map(Number)
      .filter((num) => num < 1000)
      .reduce((a, b) => a + b, 0);

    return `${newN}`;
  }
}

module.exports = adding;

// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filteredNum = numbers.filter((num) => typeof num == "number");

  let result = 0;
  for (let i = 0; i < filteredNum.length; i++) {
    result += filteredNum[i];
  }
  return result / filteredNum.length;
}

module.exports = average;

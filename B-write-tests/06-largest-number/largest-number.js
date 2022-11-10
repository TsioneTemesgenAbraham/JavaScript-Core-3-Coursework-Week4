let array = [3, 6];
function getLargestNumber(array) {
  let largestNumber;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}
let arra = [3, 6];
getLargestNumber(arra);
module.exports = getLargestNumber;

// Задание 1
function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

console.log(calculateDistance(3, 7));
// Задание 2
function calculateSegmentProduct(A, B, C) {
  return Math.abs((A-C)*(B-C));
}

console.log(calculateSegmentProduct(0, 5, 2));
// Задание 3
function calculateKilobytes(fileSizeInBytes) {
return Math.abs(fileSizeInBytes / 1024);
}

console.log(calculateKilobytes(5000));
// Задание 4
function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA/lengthB);
}

console.log(calculateSegments(10, 3))
// Задание 5
function calculateDigitSum(twoDigitNumber) {
  first_num = Math.floor(twoDigitNumber % 10)
  second_num = Math.floor(twoDigitNumber / 10)
  return Math.abs(first_num + second_num);
}

console.log(calculateDigitSum(47));
// Задание 6
function swapHundredsAndTens(treeDigitNumber) {
  num_A = Math.floor(treeDigitNumber / 100)
  num_B = Math.floor((treeDigitNumber / 10) % 10)
  num_C = Math.floor(treeDigitNumber % 10)
  return Math.abs(num_B * 100 + num_A * 10 + num_C);
}
console.log(swapHundredsAndTens(123));
// Задание 7
function getHundredsDigit(number) {
  if (number > 0);
    return Math.floor(number / 100 % 10);
}
console.log(getHundredsDigit(1234));
// Задание 8
function getFullHours(seconds) {
return Math.floor(seconds / 60 / 60);
}
console.log(getFullHours(3600));
// Задание 9 
function getDayOfWeek(dayOFYear) {
firstDay = 1
weekDay = (firstDay + dayOFYear - 1) % 7
return (weekDay);
}
console.log(getDayOfWeek(365));
// Задание 10
function countSquares(A, B, C) {
return Math.floor((A * B) / (C * C));
}
console.log(countSquares(10, 10, 5));
export { calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum,  swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares };
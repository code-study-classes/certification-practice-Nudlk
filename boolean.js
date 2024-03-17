//Задание 1
function inPositive(x1) {
    return Boolean(x1 > 0)
}
console.log(inPositive(-1))

//Задание 2
function isOdd(x1) {
    return Boolean(x1 % 2 != 1 && x1 % 2 != -1)
}
console.log(isOdd(3))

//Задание 3
function checkInequality(x1, x2) {
    return Boolean(x1 > 2 && x2 <=3)
}
console.log(checkInequality(4, 3))

//Задание 4
function checkInequality2(x1, x2) {
    return Boolean(x1 >= 0 && x2 <= -2)
}
console.log(checkInequality2(-1, -2))

//Задание 5
function checkBetweenNumbers(x1, x2, x3) {
    return Boolean(x1 < x2 && x2 < x3)
}
console.log(checkBetweenNumbers(5, 5, 8))

//Задание 6
function checkOddThreeDigitNumber(x1) {
    return Boolean(x1 / 100 >= 1 && x1 % 2 == 1 && x1 % 2 == -1)
}
console.log(checkOddThreeDigitNumber(-789))

//Задание 7
function checkUniqeDigits(x1) {
    x2 = Math.abs(x1)
    return Boolean((Math.floor(x2/100) != x2%10 && x2%10 != Math.floor(x2%100/10) && Math.floor(x2/100) != Math.floor(x2%100/10)))
}
console.log(checkUniqeDigits(-77))

//Задание 8
function isSecondQuadrant(x1, y) {
    return Boolean(x1 < 0 && y > 0)
}
console.log(isSecondQuadrant(-2, 3))

//Задание 9
function isIsoscelesTriangle(x1, x2, x3) {
    return Boolean(x1 == x2 || x2 == x3 || x1 == x3)
}
console.log(isIsoscelesTriangle(5, 5, 6))

//Задание 10
function areSameColorFields(x1, y1, x2, y2) {
    return Boolean((x1+y1)%2 == 0 && (x2+y2)%2 == 0)
}
console.log(areSameColorFields(1, 1, 2, 2))

export{inPositive, isOdd, checkInequality, checkInequality2, checkBetweenNumbers, checkOddThreeDigitNumber, checkUniqeDigits, isSecondQuadrant, isIsoscelesTriangle, areSameColorFields}

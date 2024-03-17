//Задание 1
function isPositive(x1) {
    return Boolean(x1 > 0);
}
console.log(isPositive(-1));

//Задание 2
function isOdd(x1) {
    x1 = Math.abs(x1);
    return Boolean(x1 % 2 === 1);
}
console.log(isOdd(5));

//Задание 3
function checkInequality(x1, x2) {
    return Boolean(x1 > 2 && x2 <=3);
}
console.log(checkInequality(4, 3));

//Задание 4
function checkInequality2(x1, x2) {
    return Boolean(x1 >= 0 || x2 < -2);
}

console.log(checkInequality2(4, -3));

//Задание 5
function checkBetweenNumbers(x1, x2, x3) {
    return Boolean(x1 < x2 && x2 < x3)
}
console.log(checkBetweenNumbers(5, 5, 8));

//Задание 6
function checkOddThreeDigitNumber(x1) {
    x1 = Math.abs(x1);
    return Boolean(x1 > 100 && x1 % 2 === 1);
}
console.log(checkOddThreeDigitNumber(135));

//Задание 7
function checkUniqueDigits(number) {
    number = Math.abs(number);
    if (number < 100 || number > 999) {
    return false;
  }
    return Boolean((Math.floor(number/100) != number%10 && number%10 != Math.floor(number%100/10) && Math.floor(number/100) != Math.floor(number%100/10)));
}
console.log(checkUniqueDigits(-1234));

//Задание 8
function isSecondQuadrant(x1, y) {
    return Boolean(x1 < 0 && y > 0);
}
console.log(isSecondQuadrant(-2, 3));

//Задание 9
function isIsoscelesTriangle(x1, x2, x3) {
    if (x1 == x2 && x2 == x3 && x1 == x3) {
        return false;
    }
    return Boolean(x1 == x2 || x2 == x3 || x1 == x3);
}
console.log(isIsoscelesTriangle(5, 5, 5));

//Задание 10
function areSameColorFields(x1, y1, x2, y2) {
return (x1 + y1) % 2 === (x2 + y2) % 2;
}

console.log(areSameColorFields(1, 1, 2, 2));
export{isPositive, isOdd, checkInequality, checkInequality2, checkBetweenNumbers, checkOddThreeDigitNumber, checkUniqueDigits, isSecondQuadrant, isIsoscelesTriangle, areSameColorFields};

// Задание 1
function incrementIfPositive(number) {
    if (number > 0)
    return number + 1;
    else {
        return number;
    }
}
console.log(incrementIfPositive(5));

// Задание 2
function getIndexOfSmallerNumber(number1, number2) {
    if (number1 < number2) {
        return 1;
    }   else if (number2 < number1) {
        return 2;
    }   else {
        return 1;
    }
}
console.log(getIndexOfSmallerNumber(5, 3));

// Задание 3
function findMiddleNumber(number1, number2, number3) {
  let min = number1;
  let max = number1;
  if (number2 < min) {
    min = number2;
  } else if (number2 > max) {
    max = number2;
  }
  if (number3 < min) {
    min = number3;
  } else if (number3 > max) {
    max = number3;
  }
  let middle = number1 + number2 + number3 - min - max;
  return middle;
}

console.log(findMiddleNumber(5, 8, 3)); 

// Задание 4
function findUniqueNumber(number1, number2, number3, number4) {
    if (number1 === number2 && number2 === number3) {
        return 4;
    } else if (number1 === number2 && number2 === number4) {
        return 3;
    } else if (number1 === number3 && number3 === number4) {
        return 2;
    } else {
        return 1;
    }
}
console.log(findUniqueNumber(2,2,3,2));


// Задание 5
function calculateF(x) {
    if (x < 0) {
        return 0;
    } else if (x >= 0 && x < 1 || x >= 2 && x < 3) {
        return 1;
    } else {
        return -1;
    }
}
console.log(calculateF(1.5));

// Задание 6
function describeNumber(n) {
  if (n < 10) {
    return "нечетное однозначное число";
  } else if (n < 100) {
    if (n % 2 === 0) {
      return "четное двузначное число";
    } else {
      return "нечетное двузначное число";
    }
  } else {
    if (n % 2 === 0) {
      return "четное трехзначное число";
    } else {
      return "нечетное трехзначное число";
    }
  }
}
console.log(describeNumber(24));

// Задание 7
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
        default:
            return "Invalid day number.";
            break;
    }
}
console.log(getDayName(1));

// Задание 8
function convertToMeters(unitNumber, lengthInUnits) {
    let lengthInMeters;
    switch (unitNumber) {
        case 1:
            lengthInMeters = lengthInUnits * 0.1;
            break;
        case 2:
            lengthInMeters = lengthInUnits * 1000;
            break;
        case 3:
            lengthInMeters = lengthInUnits;
            break;
        case 4:
            lengthInMeters = lengthInUnits * 0.001;
            break;
        case 5:
            lengthInMeters = lengthInUnits * 0.01;
            break;
        default:
            return "Invalid unit number";
    }
    return lengthInMeters;
}
console.log(convertToMeters(4, 12));

// Задание 9
function describeAge(age) {
    let first_num = Math.floor(age / 10);
    let second_num = age % 10;
    switch(first_num) {
        case 2:
            first_num = "двадцать";
            break;
        case 3:
            first_num = "тридцать";
            break;
        case 4:
            first_num = "сорок";
            break;
        case 5:
            first_num = "пятьдеcят";
            break;
        case 6:
            first_num = "шестьдесят";
            break;
    }
    switch(second_num) {
        case 0:
            second_num = "лет";
            break;
        case 1:
            second_num = "один год";
            break;
        case 2:
            second_num = "два года";
            break;
        case 3:
            second_num = "три года";
            break;
        case 4:
            second_num = "четыре года";
            break;
        case 5:
            second_num = "пять лет";
            break;
        case 6:
            second_num = "шесть лет";
            break;
        case 7:
            second_num = "семь лет";
            break;
        case 8:
            second_num = "восемь лет";
            break;
        case 9:
            second_num = "девять лет";
            break;
    }
 return first_num + " " + second_num;
}

console.log(describeAge(45));

// Задание 10
function describeNumber2(number) {
    let result = "";
    let firstDigit = Math.floor(number / 100);
    let lastTwoDigits = number % 100;

    switch (firstDigit) {
        case 1:
            result += "сто";
            break;
        case 2:
            result += "двести";
            break;
        case 3:
            result += "триста";
            break;
        case 4:
            result += "четыреста";
            break;
        case 5:
            result += "пятьсот";
            break;
        case 6:
            result += "шестьсот";
            break;
        case 7:
            result += "семьсот";
            break;
        case 8:
            result += "восемьсот";
            break;
        case 9:
            result += "девятьсот";
            break;
    }

    if (lastTwoDigits > 0) {
        let tens = Math.floor(lastTwoDigits / 10);
        let ones = lastTwoDigits % 10;

        switch (tens) {
            case 2:
                result += " двадцать";
                break;
            case 3:
                result += " тридцать";
                break;
            case 4:
                result += " сорок";
                break;
            case 5:
                result += " пятьдесят";
                break;
            case 6:
                result += " шестьдесят";
                break;
            case 7:
                result += " семьдесят";
                break;
            case 8:
                result += " восемьдесят";
                break;
            case 9:
                result += " девяносто";
                break;
        }

        if (tens !== 1) {
            switch (ones) {
                case 1:
                    result += " один";
                    break;
                case 2:
                    result += " два";
                    break;
                case 3:
                    result += " три";
                    break;
                case 4:
                    result += " четыре";
                    break;
                case 5:
                    result += " пять";
                    break;
                case 6:
                    result += " шесть";
                    break;
                case 7:
                    result += " семь";
                    break;
                case 8:
                    result += " восемь";
                    break;
                case 9:
                    result += " девять";
                    break;
            }
        } else {
            switch (lastTwoDigits) {
                case 10:
                    result += " десять";
                    break;
                case 11:
                    result += " одиннадцать";
                    break;
                case 12:
                    result += " двенадцать";
                    break;
                case 13:
                    result += " тринадцать";
                    break;
                case 14:
                    result += " четырнадцать";
                    break;
                case 15:
                    result += " пятнадцать";
                    break;
                case 16:
                    result += " шестнадцать";
                    break;
                case 17:
                    result += " семнадцать";
                    break;
                case 18:
                    result += " восемнадцать";
                    break;
                case 19:
                    result += " девятнадцать";
                    break;
            }
        }
    }

    return result.trim();
}
console.log(describeNumber2(278));
export {incrementIfPositive, getIndexOfSmallerNumber, findMiddleNumber, findUniqueNumber, calculateF, describeNumber, getDayName, convertToMeters, describeAge, describeNumber2};

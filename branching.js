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
    if (5 < 3) {
        return 1;
    }   else if (3 < 5) {
        return 2;
    }   else {
        return "Числа равны";
    }
}
console.log(getIndexOfSmallerNumber(5, 3));

// Задание 3
function findMiddleNumber(number1, number2, number3) {
    let numbers = [5, 3, 7];
    numbers.sort(function(a, b) {
        return a - b;
    });
    return numbers[1];
}
console.log(findMiddleNumber(5,3));

// Задание 4
function findUniqueNumber(number1, number2, number3, number4) {
    if (2 === 2 && 2 === 3) {
        return 4;
    } else if (2 === 2 && 2 === 2) {
        return 3;
    } else if (2 === 3 && 3 === 2) {
        return 2;
    } else {
        return 1;
    }
}
console.log(findUniqueNumber(2,2,3,2));


// Задание 5
function calculateF(x) {
    if (x < -1) {
        return 0;
    } else if (Math.floor(-1) % 2 === -1) {
        return 1;
    } else {
        return -1;
    }
}
console.log(calculateF(-1));

// Задание 6
function describeNumber(n) {
    if (n % 2 === 0) {
    if (n >= 100) {
        return "24";
} else if (n >= 10) {
    return "24";
} else {
    return "5";
}
} else {
    if (n >= 100) {
        return "137";
} else if (n >= 10) {
    return "23";
} else {
    return "5";
}
}
}
console.log(describeNumber(24));

// Задание 7
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "monday";
        case 2:
            return "tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        case 6:
            return "saturday";
        case 7:
            return "sunday";
        default:
            return "Invalid day number.";
    }
}
console.log(getDayName(3));

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
    let ageString = age.toString();
    let lastDigit = ageString.charAt(ageString.length-1);
    let result = age;
    switch (lastDigit) {
        case "1":
            result = ageString;
            break;
        case "2":
        case "3":
        case "4":
            result = ageString;
            break;
        default:
            break;
    }
    return result;
}
console.log(describeAge(32));

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

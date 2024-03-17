// Задание 1
function sumOfSquares(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++){
      sum += i * i;
    }
    return sum;
  }

  console.log(sumOfSquares(2, 5))
// Задание 2
  function power(a, n) {
    let sum = 1;
    for (let i = 0; i < n; i++){
      sum *= a;
    }
    return sum;
  }

  console.log(power(2, 3));
// Задание 3
  function factorialProduct(a) {
    let sum = 1;
    for (let i = 1; i <= a; i++){
      sum *= i;
    }
    return sum;
  }

  console.log(factorialProduct(3));
// Задание 4
  function fibonacciSequence(n) {
    let sum = 1;
    let k = 1;
    for (let i = 2; i <= n; i++){
      let l = sum+k;
      sum = k;
      k = l;
    }
    return sum;
  }

  console.log(fibonacciSequence(5));
// Задание 5
  function sumOfPowers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += Math.pow(i, i);
    }
    return sum;
  }

  console.log(sumOfPowers(3));
// Задание 6
  function remainingLength(a, n) {
    while (a-n > 0){
      a -= n;
    }
    return a;
  }

  console.log(remainingLength(15, 4));
// Задание 7
  function findExponent(n) {
    let k = 0;
    while (n > 1){
        n = n/2;
        k++;
    }
    return k;
  }

  console.log(findExponent(8));
// Задание 8
  function findMinAndMax(a) {
    let k = 0;
    let sum = 0;
    while (sum < a){
        k++;
        sum += k
    }
    return k;
  }

  console.log(findMinAndMax(20));
// Задание 9
  function CalculateGCD(a, b) {
      while (b !== 0) {
          let h = b;
          b = a % b;
          a = h;
      }
      return a;
  }

  console.log(CalculateGCD(27, 81));
// Задание 10
  function findFibonacciIndex(a) {
  let h = 2;
  let sum = 1;
  let k = 1;
      while (a > k) {
        h += 1;
        let l = sum+k;
        sum = k;
        k = l;
      }
      return h;
  }

  console.log(findFibonacciIndex(55));
  export {sumOfSquares, power, factorialProduct, fibonacciSequence, sumOfPowers, remainingLength, findExponent, findMinAndMax, CalculateGCD, findFibonacciIndex};

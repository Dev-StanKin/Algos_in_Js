const fibonnaci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

// console.log(fibonnaci(3))
// console.log(fibonnaci(5))
// console.log(fibonnaci(7))

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(1))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(5))

// isPowerOfTwo Bitwise Operation

// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false
//   }
//   return (n & (n - 1)) === 0
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(5))

const twoSummation = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[i] === target) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([1,3,5,6,5], 8))

// Calculate max-profit from a given array of stock prices to determine the best time to buy and sell stocks.

const maxProfit = (price) => {
  let globalProfit = 0;
  for (let i = 0; i < price.length - 1; i++) {
    for (let j = i + 1; j < price.length; j++) {
      currProfit = price[j] - price[i];
      if (currProfit > globalProfit) {
        globalProfit = currProfit;
      }
    }
  }
  return globalProfit;
};

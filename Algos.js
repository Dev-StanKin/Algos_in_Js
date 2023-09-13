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

const linear = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

// console.log(linear([1, 2, 3, 6], 2))
// console.log(linear([1, 2, 3, 6], 10))
// console.log(linear([1, 2, 3,8,9,7,75,90,58,950,6], 6))

const binary = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

// console.log(binary([-5, 2, 4, 6, 10], 10))
// console.log(binary([-5, 2, 4, 6, 10], 6))
// console.log(binary([-5, 2, 4, 6, 10], 20))

// Recursive Binary search

const recursiveBinary = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);

  const search = (arr, target, leftIndex, rigthIndex) => {
    if (leftIndex > rightIndex) {
      return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1);
    } else {
      return search(arr, target, middleIndex + 1, rightIndex);
    }
  };
};

// console.log(binary([-5, 2, 4, 6, 10], 10))
// console.log(binary([-5, 2, 4, 6, 10], 6))
// console.log(binary([-5, 2, 4, 6, 10], 20))

const bubble = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

// const arr  = [9, 4, 3, 8, 1, 7]
// bubble(arr)
// console.log(arr)
// console.log(bubble([9, 4, 3, 8, 1, 7]))

// Insertion Sort

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

// const arr = [8, 20, -2, 4, 6]
// insertionSort(arr)
// console.log(arr)

// Big -0 -> 0(n^2)

// Palindrome

const isPalindrome = (x) => {
  return x < 0 ? false : x === +x.toString().split('').reverse().join('');
};

const res = isPalindrome(121);
// console.log(res)

// Anagram

const isAnagram = (s, t) => {
  if (s.length != t.length) {
    return false;
  }
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  return s === t;
};

// console.log(isAnagram("anagram", "uagaram"))

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

// Quick sort Algo

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// const arr = [-6, 20, 8, 4, -2]
// console.log(quickSort(arr))
// Worst case = O(n^2)
// Avg case = O(nlogn)

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  let sorted = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sorted.push(leftArr.shift());
    } else {
      sorted.push(rightArr.shift());
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
};
// BigO -> O(nlogn)

const cartesianProduct = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

// Big-O -> O(mn)

const climbingStairCase = (n) => {
  const noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
};

// console.log(climbingStairCase(1))
// console.log(climbingStairCase(2))
// console.log(climbingStairCase(3))
// console.log(climbingStairCase(4))
// console.log(climbingStairCase(5))

// Big-O -> O (n)

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk 1 ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

// towerOfHanoi(3, 'A','C','B')

// Big-O -> O(2^n)

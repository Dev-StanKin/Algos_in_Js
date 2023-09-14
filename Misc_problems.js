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

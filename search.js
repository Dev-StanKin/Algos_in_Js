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

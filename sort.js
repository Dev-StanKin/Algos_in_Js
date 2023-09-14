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

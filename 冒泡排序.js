// 快排  
// 最佳情况：O(n log n)，当每次选择的基准都能将数组均匀地分成两个子数组时。

// 最坏情况：O(n^2)，当每次选择的基准都是数组的最大或最小值时。

// 平均情况：O(n log n)。

let arr = [1, 5, 6, 7, 4, 10]

function kuaipai (arr) {

  if (arr.length <= 1) {
    return arr
  }

  let left = [];
  let centerNum = arr[Math.floor(arr.length / 2)];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }
    if (arr[i] > centerNum) {
      right.push(arr[i])
    } else if (arr[i] < centerNum) {
      left.push(arr[i])
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (i === Math.floor(arr.length / 2)) {
  //     continue;
  //   }
  //   if (arr[i] < centerNum) {
  //     left.push(arr[i]);
  //   } else {
  //     right.push(arr[i]);
  //   }
  // }

  return [...kuaipai(left), centerNum, ...kuaipai(right)]
}

let sorft = kuaipai(arr)
// console.log(sorft);

// 归并排序 
// 最佳情况：O(n log n)，当每次选择的基准都能将数组均匀地分成两个子数组时。

// 最坏情况：O(n log n)，当每次选择的基准都是数组的最大或最小值时。

// 平均情况：O(n log n)。


let arr2 = [1, 5, 6, 7, 4, 10]

function chaifen (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  console.log(left, 0, right);
  return merge(chaifen(left), chaifen(right));
}
function merge (left, right) {
  console.log(left, 1, right);
  let leftIndex = 0
  let rightIndex = 0
  let result = []
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
chaifen(arr2)
// console.log(chaifen(arr2));
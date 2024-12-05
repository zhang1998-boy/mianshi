// 将两个数组合并成一个有序数组
// let a = [0, 1, 5, 6, 78];
// let b = [100, 73, 8, 9];

// let c = a.concat(b)
// let d = c.sort((a, b) => a - b)
// console.log(d);
function mergeSortedArrays (arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  // 合并两个数组
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // 如果 arr1 还有剩余元素
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // 如果 arr2 还有剩余元素
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

let a = [99, 1, 5, 6, 78];
let b = [100, 73, 8, 9];

// 首先对两个数组进行排序
a.sort((x, y) => x - y);
b.sort((x, y) => x - y);

// 合并两个有序数组
let mergedArray = mergeSortedArrays(a, b);

console.log(mergedArray);

//  生成一个 树结构
const arr = [
  { id: 1, name: '1' },
  { id: 2, name: '1.1', parentId: 1 },
  { id: 3, name: '1.2', parentId: 1 },
  { id: 4, name: '1.1.1', parentId: 2 },
  { id: 5, name: '2' },
  { id: 6, name: '2.1', parentId: 5 }
];

function buildTree (arr) {
  const map = arr.reduce((acc, node) => {
    acc[node.id] = { ...node, children: [] };
    return acc;
  }, {});
  // map是一个对象，key是id，value是对象

  return arr.reduce((roots, node) => {
    if (node.parentId) {
      const parent = map[node.parentId];  // 这里的数据是浅拷贝，修改的值 roots指向的值也会被修改
      console.log(map, '1111');
      parent.children.push(map[node.id]);
    } else {
      roots.push(map[node.id]);
    }
    return roots;
  }, []);
}

const tree = buildTree(arr);
console.log(JSON.stringify(tree, null, 2));

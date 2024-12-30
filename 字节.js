// 实现一个 get 函数，get(obj, chain, defaultVal)
// 举例：
const obj = {
  a: {
    b: [{
      c: 2
    }]
  }
}

// get(obj, 'a.b[0].c', 0); // 输出 2
// get(obj, 'a.b.c', 0); // 输出 0

// 解析路径字符串，将其转换为一个路径数组。

// 遍历路径数组，逐层访问对象。

// 如果路径中的某一层不存在，则返回默认值。

// 如果路径存在，则返回对应的值。

// function get (objs, chain, defaultVal) {
//   const keys = chain.split(/\.|\[|\]/).filter(Boolean);
//   // const path = chain.split(/\.|\[|\]/)
//   // console.log(keys, path);
//   let current = objs;
//   for (const item of keys) {
//     if (current && typeof current === 'object' && keys in current) {
//       current = current[item];
//     } else {
//       return defaultVal;
//     }

//   }
//   return current !== undefined ? current : defaultVal;
// }
function get (obj, chain, defaultVal) {
  // 将路径字符串转换为路径数组
  const path = chain.split(/\.|\[|\]/).filter(Boolean);
  console.log(path);
  // 逐层访问对象
  let current = obj;
  for (const key of path) {
    if (current && typeof current === 'object' && key in current) {
      console.log(current[key]);
      current = current[key];
    } else {
      return defaultVal;
    }
  }

  return current !== undefined ? current : defaultVal;
}



// console.log(get(obj, 'a.b.c', 0));
// console.log(get(obj, 'a.b[0].c', 0)); // 输出 2
// get(obj, 'a.b.c', 0); // 输出 0
get(obj, 'a.b[0].c', 0)




// ---------------计算数组乘积------------------
function productExceptSelf (nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // 计算前缀积
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  // 计算后缀积
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  console.log(result, '-');

  return result;
}

// 测试
let nums = [1, 2, 3, 4];
let output = productExceptSelf(nums);
console.log(output); // 输出 [24, 12, 8, 6]
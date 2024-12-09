// 将路由参数返回
function parseQueryString (queryString) {
  const params = new URLSearchParams(queryString);
  const result = {};
  // console.log(params);
  for (let [key, value] of params) {
    result[key] = value;
  }
  return result;
}
new URLSearchParams("STRING")

// 示例
const queryString = 'name=John&address=123%20Main%20St&age=30';
// const parsedParams = parseQueryString(queryString);
// console.log(parsedParams); // 输出: { user_name: 'John', user_address: '123 Main St', age: '30' }


// 数组去重 
const arr = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 1]
// console.log([...new Set(arr)])
// console.log(Array.from(new Set(arr)))

// 利用filter+indexOf来实现数组去重
arr.filter((item, index) => { return arr.indexOf(item) === index })

function uniqueArray (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 示例
const arr1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = uniqueArray(arr1);
console.log(uniqueArr); // 输出: [1, 2, 3, 4, 5]
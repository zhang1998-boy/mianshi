
let url = 'https://www.badiu.com?a=12&b=zhang&c=true&a=14&a=15'

// 结果：{
//   "a": [12, 14, 15],
//     "b": "zhang",
//       "c": true
// }
// 方式1
// let dealValue = url.split("?")[1]
// let res = { a: [], b: '', c: '' }
// let newUrl = new URLSearchParams(dealValue)
// for (let [key, value] of newUrl) {
//   if (key === 'a') {
//     res.a.push(value)
//   } else {
//     res[key] = value
//   }
// }
// console.log(res);

// 方式2
// let data = { a: [], b: '', c: '' }
// let urlArr = url.split('?')
// let newUrlArr = urlArr[1].split('&')
// newUrlArr.forEach((item) => {
//   let [key, value] = item.split('=')
//   if (key === 'a') {
//     data.a.push(value)
//   } else {
//     data[key] = value
//   }
// })

// console.log(newUrl)


// 方式3
function parseQueryString (url) {
  let result = {};
  let queryString = url.split('?')[1]; // 获取查询字符串部分
  let params = queryString.split('&'); // 将查询字符串按 & 分割
  // ['a=12', 'b=zhang', 'c=true', 'a=14', 'a=15']
  params.forEach(param => {
    let [key, value] = param.split('='); // 将每个参数按 = 分割
    value = decodeURIComponent(value); // 解码 URL 编码的值

    // 尝试将值转换为布尔值或数字
    if (value === 'true' || value === 'false') {
      value = value === 'true';
    } else {
      console.log(Number(value));
      let numValue = Number(value);
      if (!isNaN(numValue)) {
        value = numValue;
      } else {
        value = value;

      }
    }

    // 如果键已经存在，将其值转换为数组并添加新值
    if (result.hasOwnProperty(key)) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  });

  return result;
}

let result = parseQueryString(url);
console.log(result);
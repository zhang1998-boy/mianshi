//手写一个 promise。all
function promiseAll (promises) {
  return new Promise((resolve, reject) => {
    // 如果传入的不是一个数组，直接抛出错误
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Promise.all requires an array'));
    }

    const results = [];
    let completedPromises = 0;

    // 遍历传入的 Promise 数组
    promises.forEach((promise, index) => {
      // 将所有的 Promise 转换为 Promise 对象
      Promise.resolve(promise).then(
        (value) => {
          // 将结果存储在对应的位置
          results[index] = value;
          completedPromises += 1;

          // 如果所有 Promise 都完成了，则 resolve 结果数组
          if (completedPromises === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          // 如果有一个 Promise 失败，则 reject 错误
          reject(reason);
        }
      );
    });

    // 如果传入的数组为空，则直接 resolve 一个空数组
    if (promises.length === 0) {
      resolve(results);
    }
  });
}

// 示例用法
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // 输出: [3, 42, "foo"]
});

// 考察 promise.ALL的问题 当队列中有一个是失败的状态则返回rejected，如果是空数组则立即返回,正常返回promise.resolve
// 考察 promise.race的问题 当队列中有一个是失败的状态则返回rejected，如果是空数组则无返回,正常返回最快的状态
// promise.all的缺点   失败优先   无法处理部分成功 （可以使用 Promise.allSettled。）

// 是一个用于处理多个 Promise 的静态方法。它接收一个包含多个 Promise 的数组，并返回一个新的 Promise。
// 这个新的 Promise 在所有输入的 Promise 都成功完成时才会成功完成，并且返回一个包含所有 Promise 结果的数组。
// 如果任何一个 Promise 失败，则新的 Promise 会立即失败，并返回第一个失败的 Promise 的错误。
const promise4 = Promise.resolve(3);
const promise5 = Promise.reject('Error: Something went wrong');
const promise6 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

Promise.all([promise4, promise5])
  .then((values) => {
    console.log(values, '1111'); // 不会执行到这里
  })
  .catch((error) => {
    console.error(error, '2222'); // 输出: Error: Something went wrong
  });
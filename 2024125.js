// 闭包-以下输出什么？ 输入10 和0-9
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  )(i)
}
// let 立即执行函数


//  执行循序 evntloop
// 宏任务队列用于处理需要较长时间执行的任务，如定时器、I/O操作等。

// 微任务队列用于处理需要尽快执行的任务，如Promise的回调。

// 事件循环会优先处理微任务队列中的任务，然后再处理宏任务队列中的任务。

// 这种机制确保了JavaScript能够在单线程环境中高效地处理异步操作，同时避免了阻塞主线程。
const a = new Promise((resolve, reject) => {
  console.log('promise1');
  setTimeout(() => {
    console.log('promise2');
    resolve('success')
    console.log('promise3');
  }, 1000)
  console.log(2);
})

setTimeout(() => {
  console.log(3);
}, 1000)

a.then(res => {
  console.log(res);
})

console.log(4);

// promise1   2 4  promise2  promise3   sucess  3

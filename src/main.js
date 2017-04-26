// require $ from 'jquery'
let $ = require('jquery')
let xs = require('xstream').default
let fromEvent = require('xstream/extra/fromEvent')
console.log(fromEvent)
$(function(){
  console.log("zzzz")
  var stream1 = xs.periodic(1000)
    .filter(i => i % 2 === 0)
    .map(i => i * i)

  var stream2 =  xs.periodic(2000)
    .map(i => i + 100)

  var stream3 = xs.combine(stream1, stream2).endWhen(xs.periodic(10000).take(1))
  // So far, the stream is idle.
  // As soon as it gets its first listener, it starts executing.

  stream3.addListener({
    next: arr => console.log(arr[0]+arr[1]),
    error: err => console.error(err),
    complete: () => console.log('completed'),
  })
})
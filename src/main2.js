// require $ from 'jquery'
let $ = require('jquery')
let xs = require('xstream').default
let fromEvent = require('xstream/extra/fromEvent').default

$(function(){
  var streamArr = []
  var inputArr = document.querySelectorAll('.numInput')
  for(let i = 0;i < inputArr.length;i++){
    streamArr.push(fromEvent(inputArr[i], 'change')
      .map(e => e.target.value ? e.target.value - 0 : 0)
      .filter(i => i % 3 !== 0)
      .startWith(0))
  }
  // var stream1 = fromEvent(input1, 'change').map(e => e.target.value ? e.target.value - 0 : 0).startsWith(0),
  //   stream2 = fromEvent(input2, 'change').map(e => e.target.value ? e.target.value - 0 : 0).startsWith(0),
  //   stream3 = fromEvent(input3, 'change').map(e => e.target.value ? e.target.value - 0 : 0).startsWith(0)

  var streamAll = xs.combine(...streamArr)
    .map(arr => arr.reduce((x, y) => x + y))
    // .map(i => parseInt(i))
    // .filter(i => (i % 3 !== 0))
    // .fold((acc, i) => acc + i, 0)

  streamAll.addListener({
    next:i => console.log(i),
    error:err => console.error(err),
    complete:i => console.log('completed',i)
  })

  // var sum = 0
  // input1.click(e => {
  //   var val = e.target.value ? e.target.value - 0 : 0
  //   sum += val

  // })
})
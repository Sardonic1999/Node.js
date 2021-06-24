var a=10
console.log(a)

console.log(a + '10')

console.log(a + + '10')

console.log(typeof a + '10')

console.log(typeof a + + '10')

console.log(typeof (a + + '10'))

console.log(typeof (a + '10'))

console.log("========")
//10.33
var b=10.33333
console.log(b.toFixed(2))

//10.00
console.log(Math.round(b))

//10.00 string
console.log(Math.round(b).toFixed(2))

//10.00 numberga o'tish
console.log(Number.parseFloat(Math.round(b).toFixed(2)))
console.log(Number.parseInt(Math.round(b).toFixed(2)))

console.log("==================")

//true vs false

var q = 10;
var w = 100;

console.log(q = w)
console.log(q == w)
console.log(q === w)
console.log(q > w)
console.log(q >= w)

console.log("==================")
var s = 20;
var c = '20'

console.log(s == c)
console.log(s === c)
    
console.log("==================")

console.log(s != c)
console.log(true)
console.log(!true)

console.log("==================")

var z = 10;
var x = 20;
var y = 30;

//&& - va
//  - yoki

console.log(++z)

console.log(z==x && ++z)

z == x && z++
console.log(z)

z != x && z++
console.log(z)

console.log(z != x && z++)

console.log("===========")

console.log(z = x )
var str1 = "PDP Academy"
console.log(str1)

var str1 = "PDP \n Academy"
console.log(str1)

var str1 = "pdp 'academy'"
console.log(str1)


var name = 'Sardor'
var str2 = "PDP \n Acadmey"
var str3 = 'Mening ismim'

console.log(str3.concat(name, str2))

var str4 = `mening ${name} ismim
sardor S`

console.log(str4)

console.log(str4.length)

console.log(str4[0])
console.log(str4[str4.length - 1])
console.log(str4[str4.length - 3])
console.log(str4[str4.length - 2])

console.log(str4.search(`ism`))
console.log(str4.indexOf(`ism`)) // ikkta argument yozish mumkin

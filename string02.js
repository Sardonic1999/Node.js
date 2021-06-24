// concat

title = 'pdp academy'
logo = ' it center'
console.log(title.concat(logo, " test"))

// replace

console.log(title.replace('pdp', "PDP"))  // istalgan so'z mumkin
console.log(title.replace('Pdp', "PDP"))  // o'zgarmaydi 'Pdp' katta harf bor
console.log(title.replace(/Pdp/i, "IT"))   // /sth/i - farqi yoq

// slice

console.log(title.slice(0, 3))  // ikkta argument oladi va kesadi 
console.log(title.slice(3, 6))  // ikkta argument oladi va kesadi 

// substr

console.log(title.substr(3, 6))  // 6 ta harf kesvoladi
console.log(title.substr(3))  // 3 dan boshlab kesadi hammasini
console.log(title.substr(3, -3))  // oxiridan 3 ta kesadi.

// substring

console.log(title.substring(3, 6))  // 3 dan 6 chi indexgacha kesadi.
console.log(title.substring(3))  // 3 dan hammasini. minusli qiymat berib bo'lmaydi.



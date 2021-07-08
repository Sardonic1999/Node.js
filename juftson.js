
let number= 8923912830912831 // juft sonlar topilsin
sum = 0
for (let i=0; i<number.toString().length; i++){
    sum = number.toString()[i]
    if(sum%2 == 0){
        console.log(sum);
    }
// console.log(sum)
}

console.log('===========')

let str = 'pdp, academy pdp, academy pdp, academy'  // , va probel bor joylar sanalsin
let b = 0
let c = 0
let a = str
for (let i = 0; i< str.length; i++){
    a=str.slice(i)
    b=a.indexOf(', ')
    if (b == 0){
        c++
    }
}
console.log(c);
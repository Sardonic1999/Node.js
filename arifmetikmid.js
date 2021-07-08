// let str1 = 'Pdp Academy '
// str2 = str1.replace('Pdp', "IT")
// let i = 0
// for (i; i<1; i++){
//     console.log(str1.repeat(10));
//     console.log(str2.repeat(10));
// }

// let a= str1.repeat(10);
// let y=a;

// //Pp
// let x=0;
// let b=0;
// let c=0;
// let d=0;

// for (let i=0; i<a.length; i++){
//     y=a.slice(i)
//     x=y.indexOf("P");
//     c=y.indexOf("p");
//     if(x==0){
//         b++
//     }
//     if(c==0){
//         d++
//     }
// }

// let num=b+d 
// console.log('Pp',num);


let str1 = 'Pdp Academy  '
str2 = str1.replace('Pdp',"IT")
let i = 0
for (i; i<10; i++){
        console.log(str1.repeat(10));
        console.log(str2.repeat(10));
}


let a= str1.repeat(10);
let y=a;

//Pp
let x=0;
let b=0; 
let c=0; 
let d=0;

//Dd
let x1 = 0;
let b1 = 0;
let c1 = 0;
let d1 = 0;

//Aa
let x2 = 0;
let b2 = 0;
let c2 = 0;
let d2 = 0

for(let i=0; i<a.length; i++){
    y=a.slice(i)
    //Pp
    x=y.indexOf("P");
    c=y.indexOf("p");
    if(x==0){
        b++
    }
    if(c==0){
        d++
    }
    //Dd
    x1=y.indexOf("D");
    c1=y.indexOf("d");
    if(x1==0){
        b1++
    }
    if(c1==0){
        d1++
    }
    //Aa
    x2=y.indexOf("A");
    c2=y.indexOf("a");
    if(x2==0){
        b2++
    }
    if(c2==0){
        d2++
    }
}
let num=b+d
let num1=b1+d1
let num2=b2+d2
console.log('Pp',num);
console.log('Dd',num1);
console.log('Aa',num2);

let arifmetik = (num+num1+num2)/3
console.log("o'rta  arifmetik -",arifmetik);

let geometrik = Math.cbrt(num*num1*num2)
console.log("o'rta  geometrik -",geometrik);









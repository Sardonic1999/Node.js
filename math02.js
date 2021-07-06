// n = 81  3, 5 karrali. toq va juftligini tekshirish. 

n = 101

if(n % 2 == 0){
    console.log(n , 'juft')
}else if(n % 3 == 0){
    console.log(n , 'toq')
}else if (n % 5 == 0){
    console.log(n , 'toq')
}else if(n % 7 == 0){
    console.log(n , 'toq')
}else if (n % 1 == 0){
    console.log( n , 'toq')
}else {
    console.log('eror')
}

// if(n % 2 != 0){
//     console.log('toq') bu holat ham boladi
// }


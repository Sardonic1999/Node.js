var num = 2345678

var str = num.toString()

for(let i=0; i<str.length; i++){
    // console.log(str[i])
    
    if(str[i]%2 ==0 && str[i-1] !==undefined && str[i+1] !==undefined){  // juft sonlarni har ikkala tomonlari yigindisi
        console.log(eval(`${str[i-1]} + ${str[i+1]}`))
    }
}
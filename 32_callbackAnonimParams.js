//callback anonim dengan parameter

function kali(a,b){
    console.log(a*b)
}

function callback(operasi,a,b){
    operasi(a,b)
}

callback(kali,7,8)
callback(function(a,b){
    console.log(a+b)
},25,5)
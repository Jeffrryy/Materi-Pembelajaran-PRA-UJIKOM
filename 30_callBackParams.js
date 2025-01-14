function kali(a,b){
    console.log(`hasil kali dari ${a} dan ${b} adalah ${a*b}`)
}
function tambah(a,b){
    console.log(`hasil tambah dari ${a} dan ${b} adalah ${a+b}`)
}
function kurang(a,b){
    console.log(`hasil kurang dari ${a} dan ${b} adalah ${a-b}`)
}
function bagi(a,b){
    console.log(`hasil bagi dari ${a} dan ${b} adalah ${a/b}`)
}


function kalkulator(operasi,a,b){
    operasi(a,b)
}

kalkulator(bagi,3,2)
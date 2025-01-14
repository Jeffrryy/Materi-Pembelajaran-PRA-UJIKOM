function cetak(data){
    console.log(data)
}

function kali(a,b){
    return a*b
}
function tambah(a,b){
    return a+b
}

function aritmatika(c,d){
    let perkalian = kali(c,d)
    let pertambahan = tambah(c,d)
    cetak(c + `x` + d +`=` + perkalian)
    cetak(c + `+` + d +`=` + pertambahan)
}



aritmatika(8,9)

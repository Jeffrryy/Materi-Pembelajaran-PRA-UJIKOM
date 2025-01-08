let mahasiswa = [
    {nama:"agus",usia:10},
    {nama:"budi",usia:15},
    {nama:"rehan",usia:10},
    {nama:"azril",usia:21},
    {nama:"bagas",usia:10},
]

function filterUsia(mahasiswaa1){
    return mahasiswaa1.filter(m => m.usia>20)
}

let mahasiswaDiatas20 = filterUsia(mahasiswa)
console.log(mahasiswaDiatas20)

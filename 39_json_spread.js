let dataPerusahaan = {
    perusahaan:"PT prima Teknologi",
    lokasi:{
        kota:'Kota Impian',
        negeri:'di negeri kayangan'
    }

}
// (...) adalah operator spread
let dataBudi = {
    ...dataPerusahaan,
    nama:'budi YAYA'
}

let dataJaya = {
    ...dataPerusahaan,
    nama:'Jaya Abadi'
}

console.log('Nama       : ' + dataJaya.nama)
console.log('Perusahaan : ' + dataJaya.perusahaan)
console.log('Kota       : ' + dataJaya.lokasi.kota)
console.log('Negeri     : ' + dataJaya.lokasi.negeri)


function resepNasiGoreng(nasi,telur,sayuran,bumbu) {
    const nasiGoreng = `Nasi goreng terbuat dari: ${nasi},${telur},${sayuran},dan ${bumbu} `
    return nasiGoreng;
}

const hidangan = resepNasiGoreng("Nasi Putih","Telur Ayam","Bawang Goreng","Kecap Manis")
console.log(hidangan)
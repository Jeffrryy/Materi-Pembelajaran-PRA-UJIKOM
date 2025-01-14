class hewan{
    constructor(nama,warna){
        this.nama = nama
        this.warna = warna
    }
    Makan(){
        console.log(this.nama + ' sedang makan')
    }
}

//Kelas Anak yang mewarisi dari kelas utama(hewan)
class Anjing extends hewan{
    constructor(nama,warna,ras){
        super(nama,warna);
        this.ras = ras
   }
   gonggong(){
    console.log(this.nama + " menggongong!")
   }
}

let anjingSaya = new Anjing("moi","coklat","Bulldog")
anjingSaya.Makan()
anjingSaya.gonggong()
console.log('Ras Anjing Saya:' + anjingSaya.ras)

//Contoh Kasus inheritance 2
class mobilBiasa{
    constructor(roda,mesin){
        this.roda=roda
        this.mesin=mesin
    }

    maju(){
        console.log("majuuu")
    }
    mundur(){
        console.log("Mundurr")
    }
}

class mobilSport extends mobilBiasa{
    constructor(roda,mesin,nama){
            super(roda,mesin)
            this.nama = nama
    }
    majuAlaSport(){
        console.log(`mobil ${this.nama} sedang melaju ala mobil sport anjay`)
    }
}

let mobilSportF35 = new mobilSport(6,7,"Ferrari F35")
console.log("jumlah roda:"+mobilSportF35.roda)
console.log("jumlah mesin:"+mobilSportF35.mesin)
mobilSportF35.majuAlaSport() 
class Nasigoreng{
    constructor(bahan1,bahan2){
        this.bahan1 = bahan1;
        this.bahan2 = bahan2;
    }
    masak(){
        console.log("nasi goreng sedang dimasak")
    }
    sajikan(){
        console.log("nasi goreng siap disajikan")
    }
}
//constructor adalah untuk membuat dan menginisialisasi object
let nasiGorengSpecial = new Nasigoreng("Nasi","Telur")
nasiGorengSpecial.masak();
nasiGorengSpecial.sajikan();

//contoh kasus 2
class Mobil{
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

let apanjahhhh = new Mobil(4,1)
console.log("===============")
console.log("jumlah roda:"+apanjahhhh.roda)
console.log("jumlah mesin:"+apanjahhhh.mesin)
apanjahhhh.maju()
let portuner = new Mobil(4,2)
console.log("===============")
console.log("jumlah roda:"+portuner.roda)
console.log("jumlah mesin:"+portuner.mesin)
portuner.maju()

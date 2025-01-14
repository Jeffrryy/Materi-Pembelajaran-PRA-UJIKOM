class Mobil{
    Roda=4;
    mesin=1;

    maju(){
        console.log("majuuu")
    }
    mundur(){
        console.log("Mundurr")
    }


}

let avanza = new Mobil()

avanza.maju()
avanza.mundur()

console.log("jumlah roda:"+avanza.Roda)
console.log("jumlah mesin:"+avanza.mesin)

let fortuner = new Mobil()
fortuner.maju()
fortuner.mundur()

console.log("jumlah roda:"+fortuner.Roda)
console.log("jumlah mesin:"+fortuner.mesin)

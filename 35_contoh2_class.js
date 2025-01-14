class kue{
    constructor(rasa,warnaKrim){
        this.rasa=rasa
        this.warnaKrim=warnaKrim
    }

    potong(){
        console.log("kue Dipotong")
    }

    makan(){
        console.log("Kue Dimakan")
    }

}

let kueCoklat = new kue("coklat","merah")
kueCoklat.potong()
kueCoklat.makan()
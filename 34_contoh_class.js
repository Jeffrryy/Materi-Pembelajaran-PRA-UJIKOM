class Mobil{
    constructor(merk,model){
        this.merk = merk
        this.model = model
    }

    klakson(){
        console.log("beep")
    }
   
}
let mobilSaya = new Mobil("Toyota","Corolla")
mobilSaya.klakson()

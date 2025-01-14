let greeting = function(){
    console.log("hello world")
}

greeting()

//contoh callback anonim

function halo(){
    console.log("halo")
}

holo = () => console.log("halo")

function callback(operasi){
    operasi()
}

callback(halo)
callback(holo)
callback(function(){
    console.log("ini function anonim")
})
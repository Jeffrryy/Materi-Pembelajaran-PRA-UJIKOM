function callback(x){
    console.log("demo")
    x()
}

function f1(){
    console.log("f1")
}

function f2(){
    console.log("f2")
}

callback(f1)
callback(f2)
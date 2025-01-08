let musik = ["Rock","Metal","Pop","J-Pop"]

for (let i = 0; i < musik.length; i++) {
    console.log(`iterasi ke-${i+1}:Sedang memeriksa musik ${musik[i]}`)
    if(musik[i]==="Pop"){
        console.log(`Saya menemukan musik:${musik[i]}`)
        break;
    }
    
}



for (let i = 0; i < 20;i++){
    console.log(`ini angka ke-${[i]}`)
    if(i === 4){
        console.log(`menemukan angka yang dituju yaitu ${i+1}`)
        break;
    }
}
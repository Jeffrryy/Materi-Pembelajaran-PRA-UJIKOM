let nilai = 85;
let predikat;

switch (true) {
    case (nilai >= 90):
        predikat = "A";
        break;
    case (nilai >= 80):
        predikat = "B";
        break;
    case (nilai >= 70):
        predikat = "C";
        break;
    case (nilai >= 60):
        predikat = "D";
        break;
    default:
        predikat = "E";
}

console.log("Nilai:", nilai);
console.log("Predikat:", predikat);

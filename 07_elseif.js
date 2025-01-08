let nilai = 85;
let peringkat;

if (nilai >= 90) {
    peringkat = "A";
} else if (nilai >= 80) {
    peringkat = "B";
} else if (nilai >= 70) {
    peringkat = "C";
} else if (nilai >= 60) {
    peringkat = "D";
} else {
    peringkat = "E";
}

console.log("Nilai:", nilai);
console.log("Peringkat:", peringkat);

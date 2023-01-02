/*
Ternary Operator :
- Ternary operator adalah operator sederhana dari if statement
- Ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka niai kedua diambil

*/

let nilai = 75
let ucapan;

// Kode : Tanpa Ternary Operator
if (nilai >= 75){
  ucapan = "Selamat Anda Lulus"
} else {
  ucapan =" Silahkan Coba Lagi"
}

document.writeln(`<p>${ucapan}</p>`)

 
// Kode : Menggunakan Ternary Operator
let nilaiT = 60
const ucapanT = nilaiT >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi"

document.writeln(`<p>${ucapanT}</p>`)

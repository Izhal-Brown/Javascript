/*
NaN
- Bagaiman jika ternyata data string yang kita coba konversi ke number bukanlah data yang valid 
- Jika data string yang kita coa lakukan konversi bukan lah data valid, maka hasil dari konversi tersebut adalah NaN(Not a Number)
- NaN adalah number spesial yang menyebutkan bahwa ini bukanlah number
- Jika NaN dioperasikan data number lainnya, maka hasilnya akan menjadi NaN lagi
*/

// Kode : NaN
document.writeln(`<p>${parseInt("salah")}</p>`)//NaN
document.writeln(`<p>${parseInt("2salah")}</p>`)// 2 mentolerir kesalahan yang ada sete;ah angka
document.writeln(`<p>${parseFloat("eko")}</p>`) // NaN
document.writeln(`<p>${parseFloat("1.1eko")}</p>`) // 1.1 mentolerir kesalahan yang ada sete;ah angka
document.writeln(`<p>${Number("10")}</p>`) // 10 
document.writeln(`<p>${Number("10coy")}</p>`) // NaN tidak dapat mentolerir yang ada sete;ah angka




/*
Kode : Operasi Pada NaN
mengoprasikan data apapun dengan NaN maka hasilnya NaN
*/
const value1 = Number ("salah"); // NaN
const value2 = 100;

const sum = value1 + value2 // NaN

document.writeln(`<p>${sum}</p>`)



/*
isNaN() Function
- Kadang kita ingin mengecek apakah sebuah Number itu NaN atau bukan
- Untuk melakukan pengecekan tersebut, kita bisa menggunakan function isNaN(Number)
- Hasilnya adalah berupa data boolean, true jika NaN, false jika bukan
*/

document.writeln(`<p>${isNaN(value1)}</p>`) // true
document.writeln(`<p>${isNaN(value2)}</p>`) // false
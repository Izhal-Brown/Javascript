/*

Operator typeof
- Typeof merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variabel
- Karena JavaScript merupakan dynamic language, jadi kadang kita perlu mengecek tipe data sebuah value atau variabel menggunakan opertor typeof
- Hasil dari operator typeof adalah string tipe datanya



*/

// let data
// let data = null
// let data = 1
// let data = "eko"
// let data = []
let data = {}


const typeData = typeof data;
document.writeln(`<p>${typeData}</p>`)
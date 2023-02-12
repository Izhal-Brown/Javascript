/*
Function Parameter :
- Kita bisa mengirim informasi ke function yang ingin kita panggil
- Untuk melakukan hal tersebut, kita perlu penambahan parameter atau argument di function yang sudah kita buat
- Parameter ditempatkan di dalam kurung () di deklarasi method
- Parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma

*/

// Kode : Function Parameter
// Membuat function dengan parameter
function sayHello(firstName, lastName){
  document.writeln(`<p>Hello ${firstName} ${lastName}</p>`)
}

// memanggil function dengan parameter
sayHello("Rizhal", "Ridwan")
sayHello("Rezha", "Raya")
/*
* Rest Parameter :
- Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada satu parameter, dan secara otomatis akan dikonversi menjadi Array
- Untuk membuat rest parameter, ada ketentuannya
- Rest parameter hanya boleh ada satu difunction, tidak boleh lebih dari satu
- Rest parameter hanya boleh berada diposisi paling akhir, tidak boleh di depan atau ditengah, kecuali memang cuma ada 1 parameter
- Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument
*/

// ? Kode Rest Parameter ->

function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  document.writeln(`<p> Total ${name} is ${total} </p>`);
}

sum("Orange", 2, 3, 4, 6, 7, 8);
sum("Apple", 5, 5, 6, 7, 5, 6);
sum("Banana", 9, 5, 2, 3, 4);

/*
* Spread Syntax
- Kadang kita terlanjur memiliki data berupa Array
- Tapi Untungnya kita juga bisa mengirim Array ke Rest Parameter
- Kita bisa gunakan ...(titik tiga kali) diikuti dengan array nya ketika memanggil function
- Fitur ini dinamakan Spread Syntax
*/

sum("Nangka", ...[2, 3, 4, 6, 7, 8]);
sum("Anggur", ...[5, 5, 6, 7, 5, 6]);
sum("Durian", ...[9, 5, 2, 3, 4]);

const values = [10, 13, 12, 4, 56, 67];
sum("Test", ...values);

/*
* Arguments Object : 
- Sebelum ada fitur rest parameter, di JavaScript sudah ada fitur yang bernama arguments object
- Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments
- Arguments secara otomatis bisa digunakan di function
- Namun perlu diingat, bahwa untuk Javascript saat ini, lebih baik disarankan menggunakan rest parameter dibanding arguments object
*/

// ?Kode : Arguments Object ->
function oldsum() {
  let total = 0;
  for (const item of arguments) {
    total += item;
  }
  document.writeln(`<p> Total is ${total} </p>`);
}

oldsum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

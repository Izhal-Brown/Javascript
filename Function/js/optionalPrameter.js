/*
Optional Parameter :
- Secara default, parameter di function itu optional
- Artinya kita tidak wajib mengisi valuenya ketika memanggil function
- Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined
*/

// Kode : Optional Parameter ->
function sayHello(firstName, middleName, lastName) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

sayHello("Rizhal");

/*
Default Parameter :
- Sekarang kita tahu bahwa parameter itu optional, artinya kita bisa tidak memberi value terhadap parameter
- parameter juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default value
*/

// Kode : Default Parameter ->
function register(name, gender = "UNKNOWN") {
  document.writeln(`<p>${name}</p>`);
  document.writeln(`<p>${gender}</p>`);
}

register();
register("Muhammad", "Male");
register("Rizhal");
register("Ridwan", undefined);

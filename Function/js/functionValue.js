/*
Function sebagai Value :
- Function tidak hanya biSa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
- Artinya, function bisa disimpan di variable, bisa juga melalui parameter ke function lainnya
*/

// Kode : Function di Variabel ->
function sayHello(name) {
  document.writeln(`<p>Hello ${name}</p>`);
}

let say = sayHello; // memasukkan/menyimpan function sayHello ke variable say

sayHello("Izhal");
say("Rizhal");

// Kode : Function di Prameter ->
function giveMeName(callback) {
  callback("Ridwan");// sayHello("Ridwan")
}

giveMeName(sayHello);
giveMeName(say);

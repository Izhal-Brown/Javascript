/* 
 * Arrow Function :
 - Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
 - Namun terdapat limitasi dan juga tidak bisa digunakan disemua situasi
 - Dinamakan arrow function karena menggunakan tanda => (seperti panah)
    - tidak memiliki fitur arguments object
    - tidak bisa menggunakan function generator
    - tidak bisa mengakses this (yang nantinya akan dibahas di function  di object)
    - tidak bisa mengakses super (yang nantinya akan dibahas di javascript Object Oriented Programming)
*/

// ? Kode : Membuat Arrow Function ->
const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.info(say);
};

sayHello("Rizhal");

/* 
 * Arrow Function tanpa block :
 - Jika sebuah arrow function isinya sederhana, misal hanya satu baris
 - Kita bisa membuat arrow function tanpa harus menggunakan block
*/

// ? Kode : Arrow Function Tanpa Block ->
const sayHelloTB = (name) => console.info(`Hello ${name}`);

sayHelloTB("Ridwan");

/* 
 * Arrow Function return Value :
 - Arrow function bisa mengembalikan value, sama seperti function biasanya
 - Jika menggunakan block, maka kita perlu menggunakan kata kunci return
 - Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
*/

// ? Kode : Arrow Function Return Value ->
const sumBlock = (first, second) => {
  return first + second;
};

console.info(sumBlock(10, 10));

const sum = (first, second) => first + second;

console.info(sum(10, 10));

/* 
 * Arrow Function Tanpa Kurung Parameter :
 - Jika parameter di arrow function hanya satu, kita bisa tidak menggunakna kurung pada parameter
*/

// ? Kode : Arrow Function Tanpa Kurung Parameter ->
const sayHelloTKP = (name) => console.info(`Hello ${name} `);
sayHelloTKP("Raya");

/* 
 * Arrow Function Sebagai Parameter :
 - Karena arrow function sam aseperti anonymous function
 - Jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain
*/

// ? Kode : Arrow Function sebagai Parameter ->
function giveMeName(callback) {
  callback("Rezha");
}

// anonymous function
giveMeName(function (name) {
  console.info(`Hello ${name}`);
});

// Arrow Function
giveMeName(name => console.info(`Hello ${name}`));

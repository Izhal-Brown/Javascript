/* 
* Function dalam function :
- Tidak ada batasan dimana kita bisa membuat function
- Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
- Function yang terdapat di dalam, kita sebit inner function
- Inner function hanya bisa diakses di tempat kita membuat function-nya, tidak bisa diakses dari luar function-nya
*/

// ? Kode: Function dalam Function ->
function outer() {
  function inner() {
    document.writeln("inner");
  }

  inner();
  inner();
}

outer();
inner(); // ! Error tidak terdefinisikan, dikarena tidak bisa diakses

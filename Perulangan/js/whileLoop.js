/*
While Loop
- While Loop adalah versi perulangan yang lebih sederhana dibanding for loop
di While loop, hanya terdapat kondisi perulangan, tanpa ada init statement dan post statement

Sintak Perulangan while
init statement;
while(kondisi){
  --block perulangan
  post statement;
}
*/

// Kode : While Loop
let counter = 1
while(counter <= 10){
  document.writeln(`<p>WhileLoop ke ${counter}</p>`)
  counter++
}
/*
Null
- null merupakan representasi data kosong
- null berbeda dengan undefined, null berarti variabel sudah ditambahkan value-nya, hanya value-nya null
- sedangkan undefined adalah variabel belum ditambahkan value apapun
*/

// Kode : Null dan Undefined
// let firstName
// let firstName = null
let firstName = "Izhal"

if(firstName === undefined){
  console.log("Data Undefined");
} else  if(firstName === null){
  console.log("Data Null");
} else {
  console.log(firstName)
}
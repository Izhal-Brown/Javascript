/*
Optional Chaining :
- Optional Chaining Operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish
- Jika kita mencoba mengakses property dariu sebuah object dari data nullish tanpa menggunakna optional chaining operator, maka akan terjadi error
*/


// Contoh Kasus :
// const person = {}

// const country = person.address.country

// document.writeln(`SUKSES`) 

// document.writeln(`<p>${country}</p>`)

// document.writeln(`SUKSES`) 



// Kode : Pengecekan Menggunakan if
let personIF = {}

let countryIF

if(personIF.address !== undefined && personIF.address !== null){
  countryIF = personIF.address.countryIF
}

document.writeln(`SUKSES`)

document.writeln(`<p>${countryIF}</p>`)

document.writeln(`SUKSES`)


// Kode : menggunakan Optional Chaining
let personOC = {
  address:{
    countryOC: "indonesia"
  }
}
document.writeln(personOC?.address?.countryOC)

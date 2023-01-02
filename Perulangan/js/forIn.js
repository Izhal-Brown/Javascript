/*
For In
- For IN merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
- Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanyan kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of
*/

// Kode : For In di Object
const person = {
  firstName: "Rizhal",
  middleName: "Rezha",
  lastName: "Ridwan"
}

for (const property in person){// SIMPAN DI VAREABEL PROPERTY AMBIL DARI OBJECT PERSON
  document.writeln(`<p>Property ${property} : ${person[property]}</p>`)// ngambil valuenya --> ${nama_Object[nama_variabel]}
}

// Kode : For In di Array
const names = ["Muhammad", "Rizhal", "Ridwan"]

for (const index in names){
  document.writeln(`<p>Index ${index} : ${names[index]}</p>`)
}
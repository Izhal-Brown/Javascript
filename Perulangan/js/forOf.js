/*
For Of
- Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of, ini digunakan untuk melakukan iterasi terhadap isi value dari iterable Object, seperti Array, string dan lain-lain
- For Of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable

*/

// Kode : For Of di Array
const names = ["Muhammad", "Rizhal", "Ridwan"]

for (const name of names){
  document.writeln(`<p> ${name} </p>`)
}

const items = ["a", "b", "c", "d", "e", "f"];
for (const [index, item] of items.entries()){
  document.writeln(`${index} : ${item}`)
}


// Kode : For Of di String
const fullName = "Muhammad Rizhal Ridwan"
for (const character of fullName){
  document.writeln(`<p>${character}</p>`)
} 


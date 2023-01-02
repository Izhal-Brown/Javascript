/* 
Undefined :
- Undefined adalah sebuah kata kunci di javascript
- Undefined adalah sebuah tipe data
- Sebuah variabel yang belum ditambahkan nilai, maka artinya variabel tersebut merupakan tipe undefined
- Kadang untuk programmer Javascript pemula undefined ini memang agak sedikit membingungkan
- Undefined itu berbeda dengan null di bahasa pemrograman lain
*/

// Kode : Undefined Variabel
let name
// let name = "rizhal"
if (name === undefined) {
  console.info(`UNDEFINED`)
} else {
  console.info(`DEFINED`)
}


// Kode : Undefined Array Value
const names = ["Rizhal", "Rezha"]
// delete name[0] <----> names[0]= undefined

if (names[2] === undefined) {
  console.info("ARRAY UNDEFINED")
} else {
  console.info(`ARRAY DEFINED`)
}


// Kode : undefined Object Property
let person = {
  // name: "rizhal"
}
if (person.name === undefined){
  console.info("OBJECT UNDEFINED")
} else {
  console.info(`OBJECT DEFINED`)
}
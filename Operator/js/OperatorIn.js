/*
In Operator :
- In Operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak
- Jika property tersebut ada diobject, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
- tidak hanya object, In juga bisa digunakan untuk mengecek index di Array

Peringatan :
- In Operator hanya akan mengecek apakah sebuah property atau index ada atau tidak tetapi tidak mengecek nilai/value-nya
- Jadi walaupun nilai property atau index nya undefined atau null, maka tetap akan dianggap ada
*/

// Kode : In Operator
let person = {
  fullName:"Muh. Rizhal Ridwan",
  // firstName: "Rizhal",
  lastName: "Ridwan" 
}

//apakah ada property dengan firstname dalam object person ?
if ("firstName" in person){
  document.writeln(`Hello ${person.firstName}`)
} else {
  document.writeln("Hello")
}

let student = {
  fullName: "Muh. Rizhal Ridwan",
  firstName: undefined,
  lastName: "Ridwan"
}

//apakah ada property dengan firstname dalam object student ?
if ("firstName" in student) { // true
  document.writeln(`Hello ${student.firstName}`)
} else {
  document.writeln("Hello Student")
}


let names = [null, "rizhal", null]
const result = 0 in names // apakah ada isi array di index ke 0 ?
document.writeln(`<p>${result}</p>`)
/*
Nullish Coalescing Operator
- Nullist value adalah null dan undefined
- Nullist coalescing operator (??) adalah operator mirip dengan ternary operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefine, baru value defaultnya diambil

*/

// kode : Tanpa Nullish Coalescing Operator
let parameter
let data = parameter
if (data === undefined || data == null){
  data = "Nilai Default"
}

document.writeln(`<p>${data}</p>`)

// Kode : Nullish Coalescing Operator
let parameterNC
let dataNC = parameter ?? "Nilai Default"

document.writeln(`<p>${dataNC}</p>`)
/*
if Expression :
- Dalam Javascript, if adalah salah satu kata kunci yang digunakan untuk percabangan
- Percabangan artinya kita bisa mengeksekusi koda program tertentu ketika suatu kondisi terpenuhi
- Hampir di semua bahasa pemrograman mendukung if expression
*/

//Kode : If Expression
const examValue = 61;

if (examValue >= 80) {// jika lebih dari 80
  document.writeln("<p>Good Job : A</p>")
}

/* 
Else if Expression
- Kadang dalam if, kita butuh membuat beberapa kondisi
- Kasus seperti ini, di javascript kita bisa menggunakan Else if expression
*/

else if (examValue >= 70) { // jika diatas 70
  document.writeln("<p>Not Bad : B</p>")
}

else if (examValue >= 60) { // jika diatas 60
  document.writeln("<p>Bad : C</p>")
}

/* 
Else Expression :
- Blok if akan dieksekusi ketika kondisi if bernilai true
- Kadang kita ingin melakukan eksekusi program tertentu jika kondisi if bernilai false
- Hal ini bisa dilakukan menggunakan else expression
*/

else { // jika < 60
  document.writeln("<p>Try Again Next Year</p>")
}

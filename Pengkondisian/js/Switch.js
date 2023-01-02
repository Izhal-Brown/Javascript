/*
Switch Statement
- Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, speerti hanya menggunakan perbandingan ==
- Switch adalah statement percabanagn yang sama dengan if, namun lebih sederhana cara pembuatannya
- Kondisi di switch statement hanya untuk perbandingan ==
*/

// Kode : Switch Statement
let nilai = "B"
switch (nilai) {
  case "A":
    document.writeln('<p>Wow anda lulus dengan baik</p>')
    break
  case "B":
  case "C":
    document.writeln('<p>Anda Lulus</p>')
    break
  case "D":
    document.writeln('<p>Anda Tidak Lulus</p>')
    break
  default:
    document.writeln('<p>Mungkin anda salah jurusan</p>')
}


// jika Kode : IF ELSE Statement
if (nilai === "A") {
  document.writeln(`<p>Wow anda Lulus dengan baik</p>`)
} else if (nilai === "B" || nilai === "C") {
  document.writeln(`<p>Anda Lulus</p>`)
} else if (nilai === "D") {
  document.writeln(`<p>Anda Tidak Lulus</p>`)
} else {
  document.writeln(`<p>Mungkin anda salah jurusan</p>`)
}
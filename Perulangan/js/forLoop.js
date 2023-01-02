/*
For Loop:
- For adalah salah satu kata kunci yag bisa digunakan untuk melakukan perulangan
- Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi

Sintak Perulangan For
for(init statement; kondisi; post statement){
  --block perulangan
}

- init statement akan dieksekusi hanya sekali di awal sebelum perulangan
- Kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true perulanagan akan dilakukan, jika flase perulangan akan berhenti
- Post statement akan dieksekusi setiap kali diakhor perulangan
- Init statement, Kondisi dan Post Statement tidak wajib diisi, jika Kondisi tidak diisi, berarti kondisi selalu bernilau true


*/

// Kode : Perulanagn Tanpa Henti
  // for (; ;) {
  //   alert("For Loop")
  // }

// Kode: Perulangan Dengan Kondisi
  // let counter = 1;
  // for (; counter <= 10; ){
  //   document.writeln(`<p>Perulangan ke ${counter}</p>`)
  //   counter++
  // }

for (let counter = 1; counter <= 10; counter++){
  document.writeln(`<p>ForLoop ke ${counter}</p>`) 
}



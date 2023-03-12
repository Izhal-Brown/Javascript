/*
* Function Generator :
- Function generator adalah function yang digunakan untuk membuat data generator
- Generator adalah data yang bisa di interasi seperti Array
- Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
- Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya
*/

// ?  kode : Function Generator Sederhana ->
function* createNames() {
  yield "Muhammad";
  yield "Rizhal";
  yield "Ridwan";
}

console.info(createNames());

// console.info(names[0]); // hasilnya undefined bisa diiterasi tapi dia bukan array tidak bisa diakses menggunakan index apa lagi untuk mengubah datanya

const names = createNames();
for (const name of names) {
  console.info(name);
}

// ? Kode : Function Generator Kompleks ->
function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      // Angka Ganjil
      yield i;
    }
  }
}

const angkaGanjil = buatGanjil(100);
for (const angka of angkaGanjil) {
  console.info(angka);
}

/* 
* Lazy Evaluation :
- Generator itu sifatnya lazy
- Jadi artinya jika kita tidak data belum kita ambil dari generator, maka yield selanjutnya tidak akan di eksekusi
*/

// ? Kode : Function Generator Kompleks ->
// Lazy
function* buatGanjilLazy(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {// Angka Ganjil
      console.info(`Yield ${i}`);
      yield i;
    }
  }
}

const angkaGanjilLazy = buatGanjilLazy(100);
for (const angkaLazy of angkaGanjilLazy) {
  console.info(angkaLazy);
}

// Eager
function* buatGanjilEager(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {// Angka Ganjil
      console.info(`Yield ${i}`);
      result.push(i);
    }
  }
  return result;
}

const angkaGanjilEager = buatGanjilEager(100);
for (const angkaEager of angkaGanjilEager) {
  console.info(angkaEager);
}

// ? Kode : Lazy Generator ->
function* buatGanjilLG(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Perulangan ke ${i}`);
      yield i;
    }
  }
}

const angkaGanjilLG = buatGanjilLG(100);
console.info(angkaGanjilLG.next().value)
console.info(angkaGanjilLG.next().value)
console.info(angkaGanjilLG.next().value)

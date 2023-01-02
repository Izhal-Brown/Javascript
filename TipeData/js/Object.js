/*
Associative Array :
- di Bahasa pemrograman lain seperti PHP, kita bisa menggunakan index berubah tipe data lain selain number, misal string
- Fitur ini biasanya disebut associative array atau hash
- Di Javascript associative array tidak didukung
- Jika kita memaksa memasukkan data bukan number di index Array, maka Javascript akan merubah tipe data Array tersebut menjadi object, dan ini bisa berbahaya, karena beberapa operasi di array mungkin bisa berubah hasilnya

Type Data Object :
- Tipe data object adalah type data yang mirip dengan tipe data Array
- Yang membedakan adalah index pada tipe data object bisa menggunakan string
- Index di object biasanya disebit attributes atau properties, bukan index
*/

// kode : Membuat Object Kosong :
const orang = {}


// kode Mengubah Property di Object
  // Menambah atau Mengubah
  orang["nama"] = "Rizhal Ridwan"
  orang["alamat"] = "Jl. Camar 1"
  orang["umur"] = 29

  console.table(orang)

  // Menghapus
  delete orang["umur"]
  console.table(orang)


// Kode Membuat Object dengan Properties
  const person = {
    "nama lengkap" : "Muh. Rizhal Ridwan",
    nama : "Rizhal",
    alamat : "indonesia",
    umur : 29
  }

  console.table(person)


// Kode : Mengakses Property Object
  console.info(`Nama Lengkap : ${person["nama lengkap"]}`)
  console.info(`Nama : ${person.nama}`)
  console.info(`Alamat : ${person.alamat}`)
  console.info(`Umur : ${person.umur}`)
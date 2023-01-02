/*
Tipe Data Array :

- Array adalah tipe data yang berisikan kumpulan data
- Array di Javascript memiliki sifat dinamis, artinya datanya bisa bertambah dengan sendirinya saat kita memasukkan data ke dalam Array
*/

let arrayKosong = []
let arrayNama = ["rizhal", 29, true] 



/*
cara Kerja Array :

- Setiap data di Array akan disimpan dalam posisi berurutan, dimana urutan pertama dimulai dari nomor 0
- Setiap kita menambah data Array, otomatis data akan disimpan di urutan terakhir
 - Urutan di array, kita sebit dengan index
*/ 

// kode : Menambahkan Array
const names = []
names.push("Rizhal")
names.push("Muhammad", "Ridwan")
names.push("Rudi", 29, true)

console.table(names);


/*
Oeprasi di Array :

------ Operasi ------ | --------- Keterangan ---------
array.push(value)     | Menambahkan data ke Array
array.length          | Untuk mendapatkan panjang Array
array[index]          | Mendapatkan data di posisi index
array[index] = value  | Mengubah data di posisi index
delete array[index]   | Menghapus data di posisi index, namun index tidak bergeser dan index masih ada
*/ 


console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

names[0] = "Programmer"
names[1] = "Zaman"
names[2] = "Now"

delete names[3] // hapus data array dengan index ke 3
console.table(names);

names.push("Rezha") // menambah data array
console.table(names);

names[3] = "Diubah Lagi" // mengubah data array index ke 3
console.table(names);

// index tetap ada dan tetap masih bisa digunakan walaupun isinya telah dihapus

/*
Perlu diingat :
- Data di dalam Array tidak ada batasannya harus data apa
- Jadi kita bisa memasukkan data apapun ke dalam Array
- Bahkan kita juga bisa memasukkan Array ke dalam Array jika kita mau
*/

names.push(["rizhal", "ridwan", "rezha"])
console.table(names);
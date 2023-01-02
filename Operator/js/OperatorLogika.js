/*

Operator Logika :
- Operator Logika adalah operator untuk diua buah data boolean
- Hasil dari operator logika adalah boolean

&& --> Dan
Nilai 1 | Operator | Nilai 2 | Hasil
true    |    &&    |  true   |  true
true    |    &&    |  false  |  false
false   |    &&    |  true   |  false
false   |    &&    |  false  |  false


|| --> Atau
Nilai 1 | Operator | Nilai 2 | Hasil
true    |    ||    |  true   |  true
true    |    ||    |  false  |  true
false   |    ||    |  true   |  true
false   |    ||    |  false  |  false


!  --> Kebalikan
Operator | Nilai 2 | Hasil
   !     |  true   | false
   !     |  false  | true


Operator Logika di Non Boolean : 
- Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||) digunakan untuk dua data boolean
- Namun berbeda di Javascript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean


Operator OR (||) di Non Boolean
- Operator logika OR (||), membaca dari kiri ke kanan
- Operator ini akan mengambil nilai pertama yang truthy
- Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil


Operator AND (&&) di Non Boolean
- Operator logika AND (||), membaca dari kiri ke kanan
- Operator ini akan mengambil nilai pertama yang falsy
- Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil
*/

const nilaiUjian = 90
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian > 75
document.writeln("Nilai Ujian : " + lulusUjian)
const lulusAbsensi = nilaiAbsensi > 75
document.writeln("Nilai Absensi : " + lulusAbsensi)

const lulus = lulusUjian && lulusAbsensi
document.writeln("Maka = " + lulus)


// Kode : Operator OR (||)
console.info("hello" || '') // hello
console.info("" || []) //[]
console.info("0" || "NOL") // "0"
console.info(0 || "NOL") // NOL
console.info(null || "NULL") // NULL
console.info(undefined || "UNDEFINED") // UNDEFINED
console.info(0 || false) // false

// contoh kasus :
const person = {
   firstName: "",
   lastName: "Ridwan"
}

const name0 = person.firstName || person.lastName
console.info(name0) // Ridwan

const name1 = person.firstName ?? person.lastName
console.info(name1) // kosong

// Kode : Operator AND (&&)
console.info("hello" && '') // Kosong
console.info("" && []) // Kosong
console.info("0" && "NOL") // NOL
console.info(0 && "NOL") // 0
console.info(null && "NULL") // NULL
console.info(undefined && "UNDEFINED") // UNDEFINED
console.info("UNDEFINED" && "NULL") // NULL

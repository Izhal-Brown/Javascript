/*
Function Return Value
- Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
- Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam functionnya
- Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan
- Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kta bisa menggunakan Array sebagai return valuenya
*/

// Kode : Function Return Value
// Membuat function dengan parameter dan return value

function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
}

// memanggil function dan menangkap return valuenya
const result = sayHello("Rizhal", "Ridwan");
document.writeln(`<p>${result}</p>`);

// Kode function Return Value lebih dari satu
function getFinalScore(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}

const nilai = getFinalScore(76);
document.writeln(`<p>${nilai}</p>`);

/*
Menghentikan Eksekusi dengan return
- Saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan dieksekusi
- Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
*/

// Kode Menghentikan Eksekusi dengan Return
function isContains(array, searchValue) {
  for (const element of array) {
    console.info(`Iterasi Element ${element}`);
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

document.writeln(isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// contoh lain

const array = [1, 32, 4324, 3, 43, 53, 53, 43, 43, 535, 35, 5];
const search = 10;
const found = isContains(array, search);
document.writeln(`<p>${found}</p>`);

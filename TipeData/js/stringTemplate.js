document.writeln(`
  <h3>String Template</h3>
  <ul>
    <li>
      Kita sudah tahu bahwa untuk menambahkan string denga data lain, ikita bisa menggunakan operator + (plus)      
    </li>
    <li>
      Namun pada kasus tertentu, penggunaan operator + (plus) sangat menyulitkan, apalagi jika dalam jumlah banyak
    </li>
    <li>
      Javascript memiliki fitur yang bernama String Template, dimana kita bisa mensubtitusi data dari luar String ke dalam String, seperti mengambil data variabel, atau bahan melakukan operasi matematika
    </li>
    <li>
      Untuk menggunakan String Template, cara pembuatan String-nya harus menggunakan \`(backtick), bukan \'(petik satu atau) \"(petik dua)
    </li >
  </ul >

  <h3>Multiline String</h3>
  <ul>
    <li>
      String template juga bisa digunakan untuk membuat string multi line      
    </li>
    <li>
      Kita cukup tambahkan enter di text nya
    </li>
  </ul>`)

const middleName = 'Rizhal'
const lastName = 'Ridwan'
const plus = "Nama : " + firtsName + " " + middleName + " " + lastName 
const stringTemplate = `Name : ${firtsName} ${middleName} ${lastName}`

console.info(plus)
console.info(stringTemplate)


const name = "Muh. Rizhal Ridwan"
const value = 80
const template = `Name : ${name}, Lulus : ${value > 75}`

console.info(template)
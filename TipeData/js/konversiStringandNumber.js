document.writeln(`
  <h3>Konversi String dan Number</h3>
  <ul>
  <li>
    Saat membuat aplikasi, kadang kita inpput dari pengguna selalu dalam bentuk string
  </li>
  <li>
    Sedangkan kita ingin mengelola datanya dalam bentuk Number
  </li>
  <li>
    Maka sangat disarankan untuk melakukan konversi tipe data
  </li>
  </ul>

  <table border="1">
    <thead>Melakukan Konversi String dan Number</thead>
    <tr>
      <th>Function</th>
      <th>Keterangan</th>
    </tr>
    <tr>
      <td>parseInt(string)</td>
      <td>Mengkonversi dari string ke number (bilangan bulat)</td>
    </tr>
    <tr>
      <td>parseFloat(string)</td>
      <td>Mengkonversi dari string ke number (bilangan pecahan)</td>
    </tr>
    <tr>
      <td>Number(string)</td>
      <td>Mengkonversi dari string ke number (bilangan bulat atau pecahan)</td>
    </tr>
    <tr>
      <td>number.toString()</td>
      <td>Mengkonversi dari number ke string</td>
    </tr>
  </table>
`)


const value1 = "1" // string
const value2 = 1 // number

const sum = value1 + value2

document.writeln(`<p>${sum}</p>`)

document.writeln(`<p>${parseInt("20")}</p>`)
document.writeln(`<p>${parseInt("55.9")}</p>`)
document.writeln(`<p>${parseFloat("1.9")}</p>`)
document.writeln(`<p>${Number("56")}</p>`)
document.writeln(`<p>${Number("1.1")}</p>`)


const a = 1
const b = 2
const total = a.toString() + b.toString()
document.writeln(`<p>${total}</p>`)


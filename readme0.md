# Falsy
- Falsy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
- Ini adalah salah satu fitur unik dari Javascript, yang berguna, namun kadang juga sering membingungkan
- Jadi di javascript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy, atau dianggap false

  ## Data Falsy
  | **Data dianggap Falsy** | **Keterangan**                     |
  | ----------------------- | ---------------------------------- |
  | false                   | Boolean false                      |
  | 0, -0                   | Number 0 danb -0 dianggap false    |
  | "".'',``                | Semua string kosong dianggap false |
  | null                    | null dianggap false                |
  | undefined               | undefined dianggap false           |
  | NaN                     | Not a Number dainggap false        |


# Truthy
- Truthy adalah kebalikan dari falsy, dimana datanya dianggap bernilai true
- Sederhana sekali sebenarnya untuk mengetahui sebuah data itu dalah truthy, yaitu data yang bukan bernilai falsy


    ### Kode : Falsy dan Truthy

    ```Javascript
      let data = ""
      if (data){
        alert("TRUE")
      } else {
        alert("FALSE")
      }
    ```



# With Statement
- With statement merupakan fitur yang digunakan untuk menurunkan sebuag scope data
- Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

    ### Kode : Tanpa with statement

    ```Javascript
      const person = {
        firstName: "Muhammad",
        middleName: "Rizhal",
        lastName: "Ridwan"
      }

      console.log(person.firstName)
      console.log(person.middleName)
      console.log(person.lastName)
    ```

    ### Kode : With statement

    ```Javascript
      const person = {
        firstName: "Muhammad",
        middleName: "Rizhal",
        lastName: "Ridwan"
      }

      with (person){
        console.log(firstName)
        console.log(middleName)
        console.log(lastName)
      }
    ```
  ## With Statement Tidak Direkomendasikan
  - Walaupun fitur with statement ini sangat menarik
  - Namun kebanyakan orang tidak merekomendasikan penggunaan with statement
  - Hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu

    ### Kode : Ambigu di With Statement

    ```Javascript
    const person = {
      firstName: "Muhammad",
      middleName: "Rizhal",
      lastName: "Ridwan"
    }

    const firstName = "Budi"
    const lastName = "Nugraha"

    with (person){
      console.log(firstName) // niatnya ingin Budi
      console.log(middleName)
      console.log(lastName) // Niatnya Ingin Nugraha 
    }
    ```




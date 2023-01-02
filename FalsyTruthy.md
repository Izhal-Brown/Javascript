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


??test
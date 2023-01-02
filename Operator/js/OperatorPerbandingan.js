/*
Operator Perbandingan :
- Operasi perbandingan adalah oeprasi untuk membandingkan dua buah data
- Operasi perbandingan adalah operasi yang menghasilkan nilai boolean(benar atau salah)
- jika hasil operasi adalah benar, maka nilainya adalah true
- jika hasil operasi adalah salah, maka nilainya adlah false

  >   --> Lebih Dari
  <   --> Kurang Dari
  >=  --> Lebih Dari Sama Dengan
  <=  --> Kurang Dari Sama Dengan
  ==  --> Sama Dengan
  === --> Sama Dengan dan Sama Tipe
  !=  --> Tidak Sama Dengan
  !== --> Tidak Sama Dengan dan Tidak Sama Tipe
*/


let resultP = 5 == "5"
document.writeln("<p>" + resultP + "</p>")

resultP = 5 == 5
document.writeln("<p>" + resultP + "</p>")

resultP = 5 === "5"
document.writeln("<p>" + resultP + "</p>")

resultP = "5" === "5"
document.writeln("<p>" + resultP + "</p>")

resultP = 5 > 10
document.writeln("<p>" + resultP + "</p>")

resultP = 5 < 10
document.writeln("<p>" + resultP + "</p>")
document.writeln('<h5>Tipe Data String :</h5>')

document.writeln("Muh. Rizhal Ridwan")
document.writeln("<br>")
document.writeln('Programer Zaman Now')

// Mengabungkan string menggunakan plus (+)
document.writeln("Nama : " + "Rizhal " + "Ridwan")
document.writeln('<br>')
document.writeln("Channel : " + "Programmer Zaman Now")

/*
Escape Sequence (Karakter Khusus) :
  \n --> ENTER
  \t --> TAB
  \' --> '
  \" --> "
  \\ --> \
*/

document.writeln("<textarea cols='100' rows='10'>")
document.write("Rizhal \nRidwan \n") 
document.write("\\My \\Home \n")
document.write("\"Programer Zaman Now\"\n")
document.write("\'Belajar Javascript\'\n")
document.writeln("</textarea>")
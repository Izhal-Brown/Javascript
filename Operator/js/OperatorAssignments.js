/*
B. Operator Augmented Assignments:
  result = result + 10  -- -> result += 10
  result = result - 10  -- -> result -= 10
  result = result * 10  -- -> result *= 10
  result = result ** 10 -- -> result **= 10
  result = result / 10  -- -> result /= 10
  result = result % 10  -- -> result %= 10
*/

let resultA = 1 + 2;
document.writeln("<p>1 + 2 = " + resultA + "</p>")
let originalResultA = resultA

resultA -= 1
document.writeln("<p>" + originalResultA + " - 1 = " + resultA + "</p>")
originalResultA = resultA

resultA *= 2
document.writeln("<p>" + originalResultA + " * 2 = " + resultA + "</p>")
originalResultA = resultA
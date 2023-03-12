/*
 * Recursive function :
 - Recursive function adalah kemampuan function memanggil function dirinya sendiri
 - Kadang memang ada banyak problem, yang lebih mudah diselesaiakn menggunakan recursive function, seperti contohnya kasus factorial
 */

// ? Kode Factorial Loop ->
function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

console.info(factorial(5));
console.info(1 * 2 * 3 * 4 * 5);

//  ? Kode Factorial Recursive ->
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}


console.info(factorialRecursive(5));
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 * factorialRecursive(2)
// 5 * 4 * 3 * 2 * factorialRecursive(1)
// 5 * 4 * 3 * 2 * 1

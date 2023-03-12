/*
* Scope :
- Scope merupakan area akses sebuah data
- Ada dua jenis scope, global scope dan local scope
- Setiap kita membuat function maka kita akan membuat local scope untuk function tersebut
- Data di global scope bisa diakses dari local scope, namun data local scope hanya bisa diakses di local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
*/

// ? Kode : Global scope ->

let counter = 0; // Global scope

// Global scope
function hitme() {
  // local scope function hitme
  counter++; // we can access
}

// Global scope
function other() {
  // local scope function other
  hitme();
  counter--;
}

hitme();
hitme();
hitme();
other();
other();

console.info(counter);

// ? Kode : Local Scope ->
function first() {
  let firstVariable = "First";
  console.info(firstVariable); // @ Can access local scope
}

function second() {
  let secondVariable = "Second";
  console.info(firstVariable); // ! Can not access local scope
}

first();
second();

console.info(firstVariable); // ! Can not access local scope
console.info(secondVariable); // ! Can not access local scope

// ? Kode : Nested Function Scope ->
function firstNested() {
  let firstVariable = "FirstNested";

  function secondNested() {
    console.info(firstVariable); // @ Can access local scope
    let firstNestedVariable = "nested first variable";
  }

  secondNested();
  console.info(firstNestedVariable); // ! Can not access local scope
}

firstNested();

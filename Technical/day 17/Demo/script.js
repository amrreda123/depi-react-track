//  var x = 10

// x = '20'

// var x = true

//*              var, let, const

//! 1- initialization :
// var x;

// let y;

// const z;         //error

//! 2- reassign

// var x = 10
// x = "word"

// let y = 10
// y = 20

// const z = 10          //error
// z = 20
// console.log(z);

//! 3- redeclaration

// var x = 10;
// var x = "20";

// let y = 10       //error
// let y = 20

// const z = 10     //error
// const z = 20

//! 4- hoisting (var , declaration function)

// console.log(x);

// var x = 10

// console.log(x);


// test()

// function test(){
//   console.log("test");
  
// }

// console.log(x);

// let x = 10

//! 5- scope (lexical scope) => global, local, block
//       1- where ?
//       2- with what ?

//? global => var, let, const

// var x = 10


// function display() {
//   console.log(y);
  
// }

// display()
// let y = 20

//? local (functional)
var x = 10

function test() {
  var x = 20
  console.log(x);
}

test()

//? block scope : 



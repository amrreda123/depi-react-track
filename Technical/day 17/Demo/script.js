// var x = 10

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
//   // console.log(x);
//   let x = 20
//   console.log(x);
//   console.log(y);
// }

// display()
// var y = 20
// console.log(x);
// // let y = 20

// //? local (functional)
// var x = 10

// function test() {
//   var x = 20
//   console.log(x);
// }

// test()

//? block scope :

// var z = 50;

// {
//   console.log(z);

//   var z = 100;

//   console.log(z);
// }

// console.log(z);

// let w = 50;

// {
//   // console.log(w);

//   let w = 100;
//   console.log(w);
// }

// console.log(w);

console.log(sayHello());

function sayHello() {
  console.log("Hello");
}


// 1. مرحلة الإنشاء (الرفع - Hoisting):
var sayBye = undefined;
// المحرك قام برفع اسم المتغير فقط وأعطاه القيمة الافتراضية undefined

// 2. مرحلة التنفيذ (تنفيذ الكود سطراً بسطر):
sayBye();
// أنت هنا تطلب منه تنفيذ المتغير كأنه دالة، أي كأنك تكتب: undefined()

// 3. التعيين الفعلي للقيمة:
sayBye = function() { // لم يصل الكود إلى هنا أبداً بسبب الخطأ بالأعلى
  console.log("Bye!");
};

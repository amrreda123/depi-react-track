// var empName = "Muhammad"
// var age = 30;
// var salary = 2000;

// function test() {
//   console.log("test");
// }
//*                 costum object
//@ literal creation :
// key: value,
var obj = {
  empName: "Muhammad",
  age: 30,
  salary: 2000,
  test: function test() {
    console.log("test");
  },
  sum: function sum(x, y) {
    return x + y;
  },
  info: {
    id: 1,
    address: "BNS",
  },
  10: 5,
};
//! access (dot notation - bracket notation)
//? bracket notation ['']

// var x = "empName"
// console.log(obj[x]);

// console.log(obj.10); //wrong
// console.log(obj["10"]);

// console.log(obj['emp name']);

// console.log(obj['x']); //wrong
// console.log(obj.x); //wrong

// var x = obj['sum'](2,3)
// var x = obj['sum']
// x(2,3)

// console.log(obj['info']['address']);

// console.log(obj['empName']);
// console.log(obj['age']);

// obj['test']()

// console.log(obj["sum"](5,2));

//? dot notation .
// console.log(obj.info.id);

// console.log(obj.sum(2, 3));
// var x = obj.sum(2, 3);

// console.log(obj.empName);
// console.log(obj.age);

// console.log(obj.test());
// obj.test()

//! loop in object

// for (const key in obj) {
//   console.log(key);
//   // console.log(obj[key]);
// }

// for (const i = 0; i < 5; i++) {
//   console.log(i);
// }

// const x = 10
// x = 20

// const obj2 = {
//   id: 1,
// };
// // obj2 = {
// //   id: 2,
// // };

// obj2.id = 2

// console.log(obj2);

//! edit :

// obj.empName = "Ali"
// obj['empName'] = "Ali"


//! add
// obj.x = 10
// obj['x'] = 20

// console.log(obj);

//@ constructor creation :

// var obj2 = new Object({id :1})

// function BMW16() {
  
// }

// var car = new BMW16()

// console.log(car);


// var str = ""

// var str = new String('')
// var arr = new Array([])


//*                  Built-in objects

//* String

//! literal creation
var str = "Hello World!"

//! constructor creation
var str2 = new String("")
// console.log(typeof str, typeof str2);

// str.x = 10
// str2.x = 10

//? prop.
// console.log(str.length);
//? methods



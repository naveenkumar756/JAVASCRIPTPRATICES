"use strict"
// const firstname= "suresh";
// const lastname="suresh";
// console.log(firstname === lastname);

// const sym1 = Symbol("naveen");
// console.log(sym1)
// const sym2 = Symbol("naveen");
// console.log(sym1)
// console.log(sym1 === sym2)

const obj={
   fullname: name1,
   [sym1]:"value1",
   [sym2]:"value2",
 };
 console.log(obj)
 console.log(Object.keys(obj));
 console.log(Object.getOwnPropertyDescriptor(obj,sym1));
 console.log(Object.getOwnPropertyDescriptor(obj))
 console.log(Reflect.ownKeys(obj));
  
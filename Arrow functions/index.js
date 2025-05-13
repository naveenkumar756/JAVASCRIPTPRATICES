"use strict"
//  function decalaration
//  function add(a,b){
//     return a+b;
//  }
//  function expression

// const a=function(a,c){
//     return a-b;

// }
// arrow function




// const arrowfunction=(a,c)=>
// {
// console.log(a-c);
//     return a-c;

// }

// const arrowfunction=(a,c)=>a-c;
// console.log(arrowfunction(2,8));


// function greet(name){
//     return `hello,${name}`
// }
// console.log(greet("Naveen"));


// const greet=name=>`hello,${name}`;
// console.log(greet("suresh"))
var value=123
const myobj={
    value:90,
    regularfunction:function(){
 
  console.log("Regularfunction",this.value)
    },
arrowfunction:()=>console.log("Regularfunction",this.value)

}
myobj.regularfunction()
myobj.arrowfunction()
// function greet(name){
//     console.log(`Name is ${name}`)

// }
// greet("suresh"); 

// function add(a,b){
// console.log(a,b)
// }
// add(10,20);

// function add(a,b,c){
// return a+b+c;
// using arguments
//     // console.log(arguments)
//     }
//    const c= add(10,20,30);
//    console.log(c)

// function add(num1,num2,num3, ...restOftheparameters )
// {
//     console.log(restOftheparameters)
//     return num1+num2+num3+restOftheparameters;

// }
// const b=add(10,20,40,89,90,46,33)
// console.log(b)


// let username="sureshmanyala";
// let marks=100;


// using assigned  variable function

// let multiplication=function(num1,num2)
// {
// return num1*num2;
// }

// const n=multiplication(10,20);
// console.log(n)


// var sub=function(num1,num2){
//     return num1-num2;
// }
// var p=sub(20,30)
// console.log(p)

// function can send arguments
// let addition=function(num1,num2,greetfun){
//   greetfun(`iam multiplying these two numbers${num1},${num2}`)
//   return num1*num2;
// }

// let d=addition(10,20,function(msd){
//     console.log(d)
// console.log(msd)
// });

// function mydetails(){
//  return "naveen"

// }
// const f=mydetails();
// console.log(f)


// function should return another function
function mydetails(){
    function myfunction(){
        console.log("myfunction")
        return 100;
    }
    return myfunction;
}

const g=mydetails();
console.log(g())
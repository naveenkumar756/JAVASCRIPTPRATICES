"use strict"
const numbers=[10,20,30,40,50];

// for(let i=0; i<numbers.length;i++)
// {
// console.log(numbers[i])
// if(numbers[i]>25){
//     console.log(numbers[i])
//     break;
// }
// }

// find
// const firsthightestnumber=numbers.find(function(value){
// return value>=10

// })
// console.log(firsthightestnumber)

// findindex

const firsthightestnumberposition=numbers.findIndex(function(value){
    return value>20;
})
console.log(firsthightestnumberposition)


// some function
const marks=[90,79,45,40,80]

const atleastonestudentpassed=marks.some(function(value){
    return value>35
})
console.log(atleastonestudentpassed)

// every function
const allstudentspassed=marks.every(function(value){
     return value>35;
})
console.log(allstudentspassed)
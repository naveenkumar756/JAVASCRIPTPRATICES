"use strict"
const marks=[80,55,70,65,95,60];
//  marks.filter()
const firstclassmarks=marks.filter(function(value){
 return value>60;
})
console.log(firstclassmarks)
console.log(marks)

const numbers=[1,2,4,6,7,8,9]
const evennumber=numbers.filter(function(value){
  return value%2===0;
})
console.log(evennumber)

const words=["Apple","orange","pineapple","bat","cat"]

const wordsgreaterthan3words=words.filter((word)=>word.length>3)
console.log(wordsgreaterthan3words)

const users=[
    {name:"Naveen",age:30},
    {name:"Suresh",age:15},
    {name:"Rohit",age:35}
]  ;

const usersgreaterthan18=users.filter((user)=> user.age>18)
console.log(usersgreaterthan18)
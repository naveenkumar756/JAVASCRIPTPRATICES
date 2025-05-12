"use strict"
// object
const person={name:"naveen",age:19,city:"vizag",marks:100};





 const{name,age,city:mycity,marks=100,gender}=person;
//  console.log(gender)
console.log(mycity)




// console.log(person.name);
// console.log(person.age)

// const{name,age,city,marks=100}=person;
// console.log(name)
// console.log(age)
// console.log(marks)

// const{name,...rest}=person;
// console.log(name)
// console.log(rest)

// already their in object it consider only object value
// const{name,age,city,marks=200}=person;
// console.log(marks)

// array

const numbers=[1,2,3]

// console.log(student[0])
// console.log(student[1])

// const[first, ,third]=numbers;
// console.log(first,third)
// console.log(b)
// console.log(c)

// const[second,first,third]=numbers;
// console.log(second,first,third)

const[first,...restofnaveen]=numbers;
console.log(first,restofnaveen)
"use strict"

let student={
    name:"suresh",
    age:90,
    address:"vizag", 
    marks:undefined
}
console.log(student)
console.log(student.marks)
if(student.marks===undefined){
    console.log("marks doesn't exist")
}
else{
    console.log("marks exist")
}

const student1=Object.create(student);
console.log(student1)

// to verify property is there or not
console.log(student1.hasOwnProperty("marks"));
console.log("marks" in student1)
 

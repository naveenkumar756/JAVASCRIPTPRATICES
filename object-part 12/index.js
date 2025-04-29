
// let student={
//     name:"suresh",
//     age:90,
//     address:"vizag", 
// };
// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(student)






// let student1=Object.create(student)
// student1.marks=100;
// console.log(student1)  


// for in loop one iteration give one key
// for(let key in student){
//     if(student1.hasOwnProperty(key)){
//     console.log(key)
//     console.log(student1[key])
// }
// }

//  let student1=Object.create(student)
//  student1.marks=100;
//  console.log(student1)  


const personobj={
    name:"naveen kumar",
    "channel name":"suresh techs",
    1:"ram",
    3:"suresh",
    4:90,
    7:910,
};

for(let key in personobj){
    // console.log(Object.keys(personobj))
    // console.log(Object.values(personobj))
    // console.log(personobj[key])
    console.log(key,personobj[key])
}

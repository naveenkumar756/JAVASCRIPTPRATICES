// let name="naveen";
// let phonenum="123456"
// let address="vizag"

// console.log(name)
// console.log(phonenum)
// console.log(address)

// console.log(typeof name)
// console.log(typeof phonenum)
// console.log(typeof address)
// phonenum="67890";
// console.log(phonenum)


// console.log(`${name} is from ${address}`)



// class book{
//     static college_name="sureshtechs"
//     constructor(name,age,address)
//     {
//         this.name=name;
//         this.age=age;
//         this.address=address;
    
//     }

// }


// let book1=new book("naveen",40,"vizag")
// console.log(book1)
// let book2=new book("suresh",20,"vizag")
// console.log(book2)


// class student{
//     constructor(name,age,gender){
//   this.name=name;
//   this.age=age;
//   this.gender=gender;
//     }
// }

// let student1=new student("naveen",30,"male")
// console.log(student1)
// console.log(student1 instanceof student)

// newyoutube();
// let obj=new object();
// console.log(obj)




// this is one  way to create empty object
let person={

}
console.log(person)
// this another way to create empty object
let emptyobj={

}
console.log(emptyobj)



let student={
    name:"mohan",
    phone:756123,
    address:"vizag",
    city:"rajmundry"
}
// using .notation 

console.log(`${student.name} is from ${student.address}`)
// let stu=student.name
console.log(student)
// console.log(student.city)

if(student.city===undefined){
    console.log("city key is not available in student object")
}
else{
    console.log(student.city)
}
// add new value
student.phone=13434;
console.log(student.phone)
// how to add property in object in this way create object by using . notation
student.gender="male";
console.log(student)

delete student.gender;
console.log(student)

let fullname="suresh"
console.log(fullname.toUpperCase())


















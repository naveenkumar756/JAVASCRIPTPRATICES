let student={
  name:"naveen",
  age:78,
address:{
city:"vizag",
mandal:"bheemili"
},
wish:function(){
console.log("happy birthday")
console.log("happy soul day")
}
};

let student1=structuredClone(student)
// let student1={... student}
student1.name="suresh"
console.log(student1)
console.log(student1.name)
console.log(student.name)

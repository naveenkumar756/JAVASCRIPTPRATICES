// objectassign
let student={
    name:"ram",
    age:30,
    address:"vizag"
  }
  console.log(student)
  // let student2=Object.assign({},student);
  let student2={...student};
  console.log(student2)
  student2.name="rohit"
  console.log(student2.name)
  console.log(student.name)


  const obj ={a:1,b:2};
  const copy=Object.assign({},obj)
  console.log(copy)
// merge object
  const obj1={a:1,b:2};
  const obj2={b:3,c:4}
  const obj3=Object.assign({},obj1,obj2)
  console.log(obj3)

const target={a:1}
Object.assign({},{b:2},{c:3});
console.log(target)


"use strict"
const animal={
  eat:true,
  walk (){
console.log("Animal walks")
  },
};
const dog={
  bark:true,
}
console.log(dog.eat)
Object.setPrototypeOf(dog,animal);

// get prototype we can find prototype of dog
console.log(Object.getPrototypeOf(dog))
console.log(dog.__proto__)
// set prototype we can set object to dog 
console.log(Object.setPrototypeOf(dog,animal))
// dog.__proto__=animal;
 
// create prototype

const animaldetails= Object.create(animal);
console.log(animaldetails);



// const emptybject=Object.create(null)
// console.log(emptybject)

 
const a= new String("suresh");
console.log(a);
console.log(a.touppercase())
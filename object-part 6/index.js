// // task 1
// const dhoni={
//     name:"Mahendra singh dhoni",
//     age:35,
//     iscaptioncool:true,
//     team:["inida","csk"],
// stats:{
//  macthes:538,
//  runs:17389,
//  centuries:90,
// },
// retire:function(){
//     return `${this.name} is retire from international cricket in 2020`;

// },
// };
// console.log(dhoni.retire());

// console.log(dhoni.iscaptioncool)
// console.log(dhoni)
// console.log(dhoni.stats.macthes)


// pratice
// const bits={
//     name:"babacollege",
//     class:"b",
//     isgoodcollege:false,
//     staff:["joshua","rangarao"],
//  bus:{
//   nofvehicles:3,
//   colour:"yellow",
//   road:"black"

//  },

//  retire:function(){
//    return `${this.name} is one of the wrost college`;
//  },
  
// };
// console.log(bits.retire())

const depo={
  name:"APSRTc",
  location:"vizag",
  isgoodforpeople:true,
bus:{
  driver:"ram",
  stations:3,
  colour:"red",
},
retire:function(){
  return`${this.name} is one the best services from Ap govt`;
}
};
console.log(depo.retire())

// task2
// const calculator={
//     add:function(a,b){

//       return a+b;
//     },
//     subtract:function(a,b){
// return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//             }
// };

// console.log(calculator.add(5,3))
// console.log(calculator.subtract(5,3))
// console.log(calculator.mul(5,3))

// pratice

const  marks={
  telugu:function(a,b){
     return a+b;
  },
  hindi:function(c,d){
    return c-d;
  },
  english:function(e,f){
      return e*f;
  },
};
console.log(marks.telugu(2,9))
console.log(marks.hindi(4,7))
console.log(marks.english(5,8))


// task3
// const library={
//     name:"sureshlibarary",
//     books:[],
//     totalbooks:0,
//     addbook:function(title){
//   this.books.push(title)
//   this.totalbooks--;
//     },
// };
// library.addbook("python 11 hours")
// library.addbook("c programming 18 hours")
// library.addbook("javascript 25 hours")

// console.log(library.books)
// console.log(library.totalbooks)

const house={
  name:"vizag",
  books:[],
  totalbooks:0,
  addbook:function(title){
  this.books.push(title)
  this.totalbooks++;
  },

};
house.addbook("java 12 hours")
house.addbook("python 11 hours")
house.addbook("pega is 30 hours")
console.log(house.books)
console.log(house.totalbooks)

// foreach  dooesn't return any value


// const gifts=[" ₹ 100 cash","toy car","blueetooth speaker","perfume","board game","fitness","digital clock","lamp","wirless Mouse"];

// console.log(gifts[0])
// gifts.forEach (function (value,i,arr){
//     console.log(value,i,arr)
// })
// arr[1]="Naveen";

// pratice
// const marks=[10,20,50,40,90];




// let sum=0;
// marks.forEach(function(a){
//   sum=sum+marks;
// })
// console.log(sum)

// const studentmarks=[10,20,40,50,90]
// let sum=0;
// studentmarks.forEach(function(marks){
//    sum=sum+marks;
// })
// console.log(sum)



// mappping
// a new array return conataining transform result

// const result=gifts.map(function(value){
// // value.toUpperCase()
// // return 10;
// })
// console.log(result)

// method 1 to uppercase

// const result=gifts.map(function(marks){
//     const transformvalue=marks.toUpperCase();
//     return transformvalue;
// })
// console.log(result)

// method 2 to uppercase


// const result=gifts.map(function(value){
//   return value.toUpperCase();
// });
// console.log(result)
// console.log(gifts)


// reduce
// return a single value
// single resut use reduce.


const studentmarks=[10,20,40,50,90];

const total=studentmarks.reduce(function(prev,curr,i,arr){
    console.log(prev,curr,i);
    return prev+curr;
},10)
console.log(total)







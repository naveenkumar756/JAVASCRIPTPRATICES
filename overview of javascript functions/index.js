
console.log("suresh")
console.log("naveen")
// console.log("After declaration",rameshage)
console.log("manikanta")





// let rameshage;
// console.log("After decalaration",rameshage)
// rameshage=30;
// console.log("After intiliazation",rameshage)


// let sureshage,naveenage,manikantage;
// // function expression
// let thankyoumessage=function(){
//     console.log("thankyou for answering")
//      console.log("please subscribe my channel")
    
// }

// console.log(thankyoumessage)
// sureshage=prompt("suresh,what is your age")
// console.log(`suresh age is:${sureshage}`)
// thankyoumessage();
// // console.log("thankyou for answering")
// // console.log("please subscribe my channel")

// naveenage=prompt("naveen,what is your age")
// console.log(`naveenage is:${naveenage}`)
// thankyoumessage();
// // console.log("thankyou for answering")
// // console.log("please subscribe my channel")

// manikantage=prompt("manikanta,what is your age")
// console.log(`manikanta age is:${manikantage}`)
// thankyoumessage();
// console.log("thankyou for answering")
// console.log("please subscribe my channel")


// function decalaration
// function thankyoumessage(){
//     console.log("thankyou for answering")
// console.log("please subscribe my channel")

// }


// // function expression
// let thankyoumessage=function(){
//     console.log("thankyou for answering")
//      console.log("please subscribe my channel")
    
// }
// thankyoumessage();

let currentTotalage=0;
sureshage=Number(prompt("suresh,what is your age"));
// console.log(`suresh age is:${sureshage}`)
thankyoumessage("suresh",sureshage);


naveenage=Number(prompt("naveen,what is your age"));
// console.log(`naveenage is:${naveenage}`)
thankyoumessage("naveen",naveenage);


manikantage=Number(prompt("manikanta,what is your age"));
// console.log(`manikanta age is:${manikantage}`)
thankyoumessage("manikanta",manikantage);

function thankyoumessage(name,age){
 console.log(`${name} age is:${age ||"Not entered"}`)
currentTotalage=currentTotalage + age;




let eligibleforDl=age>18;

if(eligibleforDl){
    console.log(`${name},you will get driving lincense`)
}else{
    console.log(`${name}  ,${18-age} years you need to wait to get driving lincense `)
}
console.log(`current total age is:${currentTotalage}`)
  console.log("thankyou for answering")
  if(eligibleforDl){
    console.log("please subscribe channel")
  }
console.log("please subscribe my channel")
}
console.log("Totalage is",currentTotalage)





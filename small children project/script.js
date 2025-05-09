const incrementbtn =document.getElementById("incrementbtn");
const decrementbtn =document.getElementById("decrementbtn");
const incrementby5btn =document.getElementById("incrementby5btn");
const decrementby5btn =document.getElementById("decrementby5btn");
const incrementmultiplyby5btn =document.getElementById("incrementmultiplyby5btn");
const resetbtn =document.getElementById("resetbtn");
const resultelement=document.getElementById("result");
console.log(incrementbtn)
let counter=0;
incrementbtn.addEventListener("click",function(){

    console.log("clicking")
    // const resultelement=document.getElementById("result");
    counter=counter+1;
    resultelement.textContent=counter;
})
decrementbtn.addEventListener("click",function(event){
    console.log(event)
    if(counter>0){
counter=counter-1;
    }
resultelement.textContent=counter;

})

incrementby5btn.addEventListener("click",function(){
   counter=counter+5;
   resultelement.textContent=counter;
})
decrementby5btn.addEventListener("click",function(){
    if(counter >4)
    counter=counter-5;
    resultelement.textContent=counter;
});
incrementmultiplyby5btn.addEventListener("click",function(){

    counter=counter*5;
    resultelement.textContent=counter;

})
// decrementmultiplyby5btn.addEventListener("click",function(){
//     counter=counter-5;
//     resultelement.textContent=counter;

// });
// use double click
// resetbtn.addEventListener("dblclick",function(){

//     counter=0;
//     resultelement.textContent=counter;

// })
// use mouse over
// resetbtn.addEventListener("mouseover",function(){

//     counter=0;
//     resultelement.textContent=counter;

// })
// use mouse leave
resetbtn.addEventListener("mouseleave",function(){

    counter=0;
    resultelement.textContent=counter;

})
console.log("we will do other works")
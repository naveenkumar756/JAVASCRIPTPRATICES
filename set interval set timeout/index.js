const cancelbtn=document.getElementById("cancel")
console.log("start")
console.log("end")


// set timeout 
const timerid=setTimeout(function(){
    console.log("2 second completed")
    clearInterval(intervalid)
},2000)

cancelbtn.addEventListener("click",function(){
    console.log("clicked")
    clearTimeout(timerid)
})

// set interval

let counter=1;

const intervalid=setInterval(function(){
   
console.log("1 second completed",counter)
counter++;
},1000)



















// set interval
// let counter=1;
// const intervalid=setInterval(function(){
//     console.log("1 second completed",counter)
//     counter++;
// },1000)
// console.log(intervalid)
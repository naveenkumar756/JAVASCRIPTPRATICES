// const marriage={
//     date:'13-04-2025',
//     address:{
//         city:"vizag",
//         district:"visakahpatnam",
//     },


// waitingforgiftpackingstatus:function(flowers,fn)
// {
//    console.log(`preparing boque with ${flowers}`);
//     fn("completed ra");
// }
// };

// const result=marriage.waitingforgiftpackingstatus("redroses",
//     function(msg){
//         console.log(msg);
//         console.log("you go to my home will both go")
//     }
// );

function greet(name,callback){
    console.log("hello, "+ name)
    callback();
}
function saygoodbye(){
    console.log("goodbye!")
}
greet("suresh",saygoodbye)




// let username="naveen"
// let password="12345"




// {
//     let a=10;
//     let b=10;
//     console.log(a+b);
// console.log(username)
// }

// isvalid();

// function isvalid(){
//     if(username=="naveen"&&password=="12345"){
//         console.log("validuser")
//     }else{
//         console.log("invalid ceredentials")
//     }
// }




let username="naveen"
let password="12345"



// local scope
// by using let ,const keyword  use of within the use local scope
// {
//     let a=10;
//     let b=10;
//     console.log(a,b);
// console.log(password)
// }
// bu using var it is function scoped we can access outside the function
{
    var a=10;
    var b=20;
    console.log(a,b);
    console.log(password)
}
console.log(a+b);

isvalid();

function isvalid(){

    console.log("inside fnction,a,b");
    var isadmin= false;
    if(username=="naveen"&&password=="12345"){
        console.log("validuser")
    }else{
        console.log("invalid ceredentials")
    }
}





















let globalvar="Iam in the global var"

function outerfunction(){
    let outervar="Iam in the outervar"

function innerFunction(){
    let innervar="Iam in the innervar"
    console.log(innervar)
    console.log(outervar)
    console.log(globalvar)
}

innerFunction();
}
outerfunction();
























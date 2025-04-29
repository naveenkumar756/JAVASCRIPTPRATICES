// output by using var undefined
console.log(x)
var x=5;
console.log(x)
// by using function get output
greet();

function greet(){
    console.log("Hello,world")
}


// by using let keyword output access to the refernce variable
console.log(y)
let y=10;


// using variable function
add();
var add= function(){
    console.log("Addition !")
}


 function test(){
    console.log(a);
    var a=20;
    console.log(a);

}

test();

console.log(myfunc)
console.log(myvar)

function myfunc(){
    console.log("This is my fnction!")
}
var myvar=10;



console.log(username)
var username="suresh"
let a=10;
const b=30;
welcome();

const add=function(){
    console.log("Hi!")
}
function welcome(){
    console.log("welcome to my world")
}
add();
console.log(window)
console.log(this)
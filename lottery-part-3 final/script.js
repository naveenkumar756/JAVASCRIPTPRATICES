const pickbutton=document.getElementById("picknumberbtn")
const resultbtn=document.getElementById("result")
const LotterySheetContainer=document.getElementById("LotterySheetContainer")
const tick=new Audio('tab.wav');
const completedsound=gamecompleted=new Audio("gamecompleted.wav");

const gifts=[" ₹ 100 cash","toy car","blueetooth speaker","perfume","board game","fitness","digital clock","lamp","wirless Mouse","Lorry"];

pickbutton.addEventListener("click",function(){

   for(let i=1;i<10;i++){
      document.getElementById(i).classList.remove("winningbox")
   }
   resultbtn.textContent="please wait..."

setTimeout(function(){
//    let randomnumber= Math.random()*10;
//    let drawnnumber=Math.floor(randomnumber)+1
// console.log(gifts[drawnnumber-1]);
// const gift = gifts[drawnnumber-1];

// resultbtn.textContent=`you have got ${drawnnumber},and you won${gift}`;
// document.getElementById(drawnnumber).classList.add('winningbox')
},5000);
let counterseconds=0;
const intervalid=setInterval(function(){
   tick.pause();
   tick.currenttime=0;
   tick.play();
   

   counterseconds=counterseconds+1;
const randombox=Math.floor(Math.random()*10)+1
console.log(randombox);
for(let i=1;i<=10;i++){
   if(i===randombox){
      document.getElementById(i).classList.add("highlightedbox")
   }else{
      document.getElementById(randombox).classList.remove("highlightedbox");

   }
   document.getElementById(i).classList.add("highlightedbox")
}


if(counterseconds===5){
   let randomnumber= Math.random()*10;
   let drawnnumber=Math.floor(randomnumber)+1
console.log(gifts[drawnnumber-1]);
const gift = gifts[drawnnumber-1];

resultbtn.textContent=`you have got ${drawnnumber},and you won${gift}`;

document.getElementById(randombox).classList.remove("highlightedbox");

document.getElementById(drawnnumber).classList.add('winningbox')
completedsound.pause();
completedsound.play();
completedsound.currentTime=0;
clearInterval(intervalid);
}
},1000)
});

gifts.forEach(function(value,i){
   const boxElement=`<div class="box" id=${i+1}>${i+1}.${value}</div>`;
console.log(boxElement)

LotterySheetContainer.insertAdjacentHTML("beforeend",boxElement);
});
const pickbutton=document.getElementById("picknumberbtn")
const resultbtn=document.getElementById("result")
const gifts=[" ₹ 100 cash","toy car","blueetooth speaker","perfume","board game","fitness","digital clock","lamp","wirless Mouse"];
const lottery=document.getElementById("LotterySheetContainer")

pickbutton.addEventListener("click",function(){
   let randomnumber= Math.random()*50;
   let drawnnumber=Math.floor(randomnumber)+1
console.log(gifts[drawnnumber-1]);
const gift = gifts[drawnnumber-1];

resultbtn.textContent=`you have got ${drawnnumber},and you won${gift}`;
});


gifts.forEach(function(value){
   const boxElement=`<div class="box">`

})
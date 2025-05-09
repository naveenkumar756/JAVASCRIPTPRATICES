const pickbutton=document.getElementById("picknumberbtn")
const resultbtn=document.getElementById("result")
const LotterySheetContainer=document.getElementById("LotterySheetContainer")

const gifts=[" ₹ 100 cash","toy car","blueetooth speaker","perfume","board game","fitness","digital clock","lamp","wirless Mouse","Lorry"];

pickbutton.addEventListener("click",function(){
   let randomnumber= Math.random()*50;
   let drawnnumber=Math.floor(randomnumber)+1
console.log(gifts[drawnnumber-1]);
const gift = gifts[drawnnumber-1];

resultbtn.textContent=`you have got ${drawnnumber},and you won${gift}`;
});

gifts.forEach(function(value,i){
   const boxElement=`<div class="box">${i+1}.${value}</div>`;
console.log(boxElement)
LotterySheetContainer.insertAdjacentHTML("beforeend",boxElement);
 });

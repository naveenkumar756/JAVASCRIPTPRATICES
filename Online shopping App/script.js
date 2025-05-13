// elements
const productcontainer=document.getElementById("productcontainer");
const feedback1=document.getElementById("feedback")
const products=[
{
    
  
    id:1,
   name:"laptop",
    price:50000
},
{
   
    id:2,
    name:"phone",
    price:15000
},
{
   
    id:3,
 name:"Tablet",
    price:30000
},
{
   
    id:4,
    name:"smartwatch",
    price:40000
},
{

    id:5,
    name:"headphones",
    price:30000
}
];

products.forEach(function(product){
// one way to execute


// const productRow=`
// <div class="product-row">
// <p>${product.name}- Rs.${product.price}</p>
// <button>Add to cart</button>
// </div>
// `;
// productcontainer.insertAdjacentHTML("beforeend",productRow);



// another way



const{id,name,price}=product;


const divelement=document.createElement('div')
divelement.className="product-row";
divelement.innerHTML=`
<p>${product.name}- Rs.${product.price}</p>
<button onclick="addtocart(${id})">
Add to cart</button>

`;
productcontainer.appendChild(divelement)
});

function addtocart(id){
    console.log("here the Naveen",id)
}






// text content
// feedback1.textContent="<b>kumar</b>";

// we have add html element using inner html
// feedback1.innerHTML="<b>kumar</b>"



// const test=document.getElementById("testing")
// test.addEventListener("click",function(){
//     console.log("clicked on testing")
// })



// function testingdetails(value){
// console.log("click here to use",value)    
// }


 



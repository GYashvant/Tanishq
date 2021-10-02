let total=0;
let count=0;
 function show_cart(){
  let cart_data= JSON.parse( localStorage.getItem("add-cart"));
  let items_of_cart =document.getElementById("items_cartdiv")

  cart_data.forEach(function(el, index){
    count++;
    let num_of_prod =document.getElementById("num_of_products")

    let div=document.createElement("div")
    div.setAttribute("id","foronebox");

     let forline=document.createElement("hr")

    let keycode=document.createElement("p")
    keycode.setAttribute("id","keycode")
    keycode.textContent="512318SAXABA182BA005239"

    let weight =document.createElement("p")
    weight.setAttribute("id","weight")
    weight.textContent="Weight (g): 5.500"
    
    let div2=document.createElement("div")
    div2.setAttribute("id","imagekidiv")

    let image =document.createElement("img")
    image.src=el.image;
    div2.appendChild(image)
    
    let div3=document.createElement("div")
    div3.setAttribute("id","pkidiv")

    let name=document.createElement("p")
    name.setAttribute("id","nameka")
    name.textContent=el.name;
    
    let price=document.createElement("p");
    price.setAttribute("id","priceka")
    price.textContent= "₹ " +el.newPrice +" ";

     let linethrough =document.createElement("span")
     linethrough.textContent=el.oldPrice;
     linethrough.setAttribute("id","linethrough")

      let forremove=document.createElement("button");
      
      forremove.setAttribute("id","forremove");
       forremove.textContent="REMOVE" 
      forremove.addEventListener("click",function(){
            removeItem(index)
      })

     price.append(linethrough)
      total = total + Number(el.newPrice)

   div3.append(name,keycode,price,weight)
    div.append(div2,div3,forremove)

    items_of_cart.append(div)
    num_of_prod.textContent= "CART ITEMS -" + count;
    
});
 }
let forremove=document.getElementById("forremove")

show_cart()
//to remove item!

function removeItem(index){
// let num_of_prod =document.getElementById("num_of_products");
let total_cost =document.getElementById("for_total")
let torem =document.getElementById("foronebox")
let youpaydiv=document.getElementById("youpaydiv")
let todeleteforlocal =JSON.parse(localStorage.getItem("add-cart"))
let totalvalue = document.getElementById("priceka")
/* let item_name = document.getElementById("nameka").value */
   toremove(index)
   window.location.reload();
    show_cart();
}

function toremove(index){
let items =JSON.parse(localStorage.getItem("add-cart"))
  items.splice(index, 1)
localStorage.setItem("add-cart", JSON.stringify(items))
items.forEach (function(newPrice){
    total = total + newPrice;
    
})
count--
total_cost.textContent=Number(total);
you_pay.textContent = "₹ " + Number(total);
document.getElementById("cart").innerHTML = count;
}

document.getElementById("cart").innerHTML = count;

let total_cost =document.getElementById("for_total")
total_cost.textContent="₹ "+ Number(total);

let showsuccess=document.getElementById("showsuccessofvoucher");

let youpaydiv=document.getElementById("youpaydiv")
let forappending=document.getElementById("")
let you_pay=document.getElementById("for_total1");

//for promo code ------------------.

function applyVoucher(e){
    let voucher_input=document.getElementById("voucher").value;
    console.log(voucher_input)
    if(voucher_input=="tanishq10"){
      showsuccess.textContent="APPLIED SUCCESSFULLY."
      showsuccess.style.color="green";
      you_pay.textContent = "₹ " + Number(total-(total*10/100))
    }

    else{
        showsuccess.textContent="NOT A VALID CODE";
        showsuccess.style.color ="red";
        you_pay.textContent="₹ "+ total
    }
    //  youpaydiv.append(you_pay)
}

you_pay.textContent="₹ "+total

//for promocode----------X-----------X

//-----functionality for procced to checkout button------//

let proceedBtn = document.getElementById("checkoutbot");

let items =JSON.parse(localStorage.getItem("add-cart"))

proceedBtn.onclick = function(){
  if(items.length==0){
    alert("please add the item")
  }else{
    window.location.href = "payment.html"
  }
}
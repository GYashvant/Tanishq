/* 
// const Cart = require('../../src/models/cart.model')

let sum= 0
// const cart_items = Cart

function voucher(cart_items){
console.log(cart_items)
let voucher_input=document.getElementById("voucher").value;
if(voucher_input === 'tanishq10'){
    showsuccess.textContent="APPLIED SUCCESSFULLY."
      showsuccess.style.color="green";
        cart_items.forEach(({ price }) => {
        sum = sum + price - (price*0.01)
    })
    you_pay.textContent = "₹ " +sum
}
else{
    showsuccess.textContent="NOT A VALID CODE";
    showsuccess.style.color ="red";
    you_pay.textContent="₹ "+ sum
}
} */
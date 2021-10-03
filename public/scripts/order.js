/* if(localStorage.getItem("add-cart") === null){ 
    localStorage.setItem("add-cart", JSON.stringify([]));
}  */

/* function addToCart(){
    // pushing the data into the local storage //
    let name = document.getElementById("item_name").innerHTML;
    let newPrice = document.getElementById("new_Price").innerHTML;
    let oldPrice = document.getElementById("old-price").innerHTML;
    let image = document.getElementById("picture").src;

    const data = {
        name: name,
        newPrice: newPrice,
        oldPrice: oldPrice,
        image: image,
    }
   let cart_data= JSON.parse(localStorage.getItem("add-cart"));
   cart_data.push(data);

    localStorage.setItem("add-cart", JSON.stringify(cart_data));

    document.getElementById("cart").innerHTML = Object.keys(cart_data).length;
} */

let data = localStorage.getItem("show_item");
let data_obj = JSON.parse(data);
document.getElementById("title").innerHTML = data_obj.name + " | Tanishq";
document.getElementById("item_name").innerHTML = data_obj.name;
document.getElementById("picture").src = data_obj.image;
document.getElementById("old-price").innerHTML = data_obj.oldPrice;
document.getElementById("new_Price").innerHTML = data_obj.newPrice;
document.getElementById("text2").innerHTML = data_obj.name;

function goToHome(){
    location.replace("index.html")
}
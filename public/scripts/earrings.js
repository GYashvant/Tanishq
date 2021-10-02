
let coll = document.getElementsByClassName("collapsible");

for ( let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
});
}

/*  creating function when we click on the products, which will redirect to order page */
/* function  showItem(product){
    localStorage.setItem("show_item", JSON.stringify(product));
    window.open("order.html");
}  */
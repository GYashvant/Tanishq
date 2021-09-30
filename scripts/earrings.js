const products = [
    {
        name:"Odessa Pearl Stud Earrings",
        newPrice:17188,
        oldPrice:17429,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/502217SEDABAPL_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Ageless Ruby Stud Earrings",
        newPrice:35023,
        oldPrice:35496,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512318SAXABA18_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Kalika Floral Stud Earrings",
        newPrice:34557,
        oldPrice:35078,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512217SCKABA40_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Alina Pearl Stud Earrings",
        newPrice:23075,
        oldPrice:23434,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/502217SEGABAPL_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Medha Ruby Stud Earrings",
        newPrice:18181,
        oldPrice:18466,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/503216SBHABA18_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Mrigakshi Traditional Earrings",
        newPrice:62200,
        oldPrice:63181,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/511183DQEABA40_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Laysa Geometric Stud Earrings",
        newPrice:25309,
        oldPrice:25434,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512217SABABA40_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Suhani Floral Stud Earrings",
        newPrice:32977,
        oldPrice:33500,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512318SBFABA18_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Admirable Ruby Drop Earrings",
        newPrice:62407,
        oldPrice:63400,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512318DBQABA18_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Seerat Ruby Stud Earrings",
        newPrice:30481,
        oldPrice:30975,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/501095SABABA12_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Janaya Ruby Drop Earrings",
        newPrice:46998,
        oldPrice:47764,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512814DQYABA18_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Kauvery Floral Drop Earrings",
        newPrice:50683,
        oldPrice:51524,
        image:"https://staticimg.titan.co.in/Tanishq/Catalog/512814DPFABA18_1.jpg?impolicy=pqmed&imwidth=640",
    },
]
function createData(){
   let data = document.getElementById("data");
  
   products.forEach(function(product){
       let div1 = document.createElement("button");
       div1.id = "hovereffect";
      
       let name = document.createElement("h3");
       name.innerText = product.name;
       name.id = "items_name";
          
       let rupee_sym = document.createElement("span")
       rupee_sym.innerText = "₹";
       rupee_sym.style.color = "#8c8c8c"

       let old_price = document.createElement("span");
       old_price.innerHTML = product.oldPrice;
       old_price.id = "price-style";

       let price = document.createElement("h3");
       price.innerHTML ="₹" + product.newPrice + " , ";
       price.append(rupee_sym, old_price);
       price.style.textAlign = "center";

       let image = document.createElement("img");
       image.src = product.image;
       image.style.width = "95%";

       let charge = document.createElement("p");
       charge.innerText = "10 % OFF ON MAKING CHARGES";
       charge.id = "charge";

       let text = document.createElement("p");
       text.innerText = "TRY ON AVAILABLE";
       text.id = "text";

       div1.onclick = function(){
            showItem(product);
       }

    div1.append(image, name, price, charge, text);
    data.append(div1);
   })
}
createData();

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
function  showItem(product){
    localStorage.setItem("show_item", JSON.stringify(product));
    window.open("order.html");
} 
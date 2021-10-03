
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

let data = JSON.parse(localStorage.getItem("projectuserdata"))
  
if(data)
setTimeout (() =>{
  document.getElementById("change_name").innerHTML = data[data.length-1].first_name
},1000) 
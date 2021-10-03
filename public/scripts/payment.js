let btnforpay =document.getElementById("paymnetdon")

let details = document.getElementById("paymntsdiv")






 function payclick(){

    let fullanme =document.getElementById("fullname").value;
    let mobnumber1 =document.getElementById("mobnumber1").value;
    let email =document.getElementById("email").value;
    let addlin1 =document.getElementById("addlin1").value;
    let addlin2 =document.getElementById("addlin2").value;
    let addlin3 =document.getElementById("addlin3").value;
    let addlin4 =document.getElementById("addlin4").value;
    let addlin5 =document.getElementById("addlin5").value;
    
    
    let fullnamenext=document.getElementById("fullname2").value;
    let mobnumber2 =document.getElementById("mobnumber")
    let expirymonth =document.getElementById("expirymonth").value;
    let expiryyear1 =document.getElementById("expiryyear1").value;
    
    let CVV =document.getElementById("cvv").value;




if(fullanme==='' || mobnumber1=="" || email=="" || addlin1=="" || addlin2=="" || addlin3=="" ||addlin4=="" || addlin5=="" || fullnamenext=="" || mobnumber2=="" || expirymonth=="" || expiryyear1=="" || CVV==""){
    alert("Please fill all the details.")
}
 else{
    setTimeout (() =>{
        window.location.href = "/pay"
    },2000) 
 }
   
     
    
 





   

 }
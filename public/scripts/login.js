
// for login page ---------------------------


function login(){
    let taking_email=document.getElementById("email123").value;
    let taking_pasw=document.getElementById("password1").value;
  
   let fromlocal =localStorage.getItem("projectuserdata") ;
   let forcheck=JSON.parse(fromlocal);
     
            // for checking data from local storage
   function check(){
   for(var i=0;i<forcheck.length;i++){
    if(forcheck[i].email===taking_email && forcheck[i].password===taking_pasw){
        alert("Login Successfull")
        window.location.href="/index"
        loginchange.textContent= "Hi " +forcheck[i].name
        return
    }
   }
   
   for(var i=0;i<forcheck.length;i++){
    if(forcheck[i].email!==taking_email || forcheck[i].password!==taking_pasw){
        let showerror =document.getElementById("showerror")
        showerror.textContent="Invalid Username or Password"
        return
    }
   }

   }
 check()
}

// for removing aunty banner.
 function onclickaunty(){
    let welcome_aunty=document.getElementById("welcome_aunty")
    welcome_aunty.remove()
}



//for login page ---------------X------------end------------X--------------X----------X



//for signup page -----------------------------


function regsiterClick(){
    let title =document.getElementById("title1").value;
   let f_name=document.getElementById("firstname").value;
   let l_name=document.getElementById("lastname").value;
   let mob_num=document.getElementById("mobnumber").value;
   let email=document.getElementById("email").value;
   let password=document.getElementById("password").value;
   let checkdon=document.getElementById("checkboxid").checked;
  //   console.log(title,f_name,l_name,mob_num,email,password)


  let userdata =new Array();

  userdata=JSON.parse(localStorage.getItem("projectuserdata"))?JSON.parse(localStorage.getItem("projectuserdata")):[];
  userdata.push( {
    title:title,
    first_name:f_name,
    last_name:l_name,
    mobile:mob_num,
    email:email,
    password:password,
    checkdon:checkdon,
}) 
    console.log(userdata)

       if(title.trim()=="" || f_name.trim()=="" || l_name.trim()=="" || mob_num.trim()=="" || email.trim()=="" || password.trim()=="" || checkdon==false){
           alert("Please fill all the detail fields and check on checkbox")
           let showerror =document.getElementById("showerror")
           showerror.textContent="Please fill all the detail fields and check on checkbox";
           showerror.style.color="red";
           
       }
       else{
          let showerror =document.getElementById("showerror")
            showerror.textContent="SignUp Successfull"
            showerror.style.color="green"
          alert("Signup successfull")
          window.location.href="/login";
          const userdata_projectjson=JSON.stringify(userdata);
          localStorage.setItem("projectuserdata" ,userdata_projectjson)
       }
}


 //for signup page -------X--------------X

 
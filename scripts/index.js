var i = 0;
var images = [];
var time = 4000;


images[0] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/e66759c1-82f0-4707-bf00-dbe26322bbc3/desktop/2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-e66759c1-82f0-4707-bf00-dbe26322bbc3-desktop-nGa5Jt1&impolicy=pqlow';
images[1] = 'https://staticimg.titan.co.in/MobileApp/Jewellery/Banners/2500x950_Nayantara.jpg';
images[2] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/03878f03-7ead-4b71-9a9a-2a429a34ef52/desktop/2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-03878f03-7ead-4b71-9a9a-2a429a34ef52-desktop-mXBpnuL&impolicy=pqlow';
images[3] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/acb0fe1f-1574-4283-b9a6-9d65650dd08c/desktop/2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-acb0fe1f-1574-4283-b9a6-9d65650dd08c-desktop-nEjA2ad&impolicy=pqlow';
images[4] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/824e4c2a-bbaa-4dbf-875a-af337a864b54/desktop/2500x950+%281%29.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-824e4c2a-bbaa-4dbf-875a-af337a864b54-desktop-nHRpKQ9&impolicy=pqlow';

function changeImg() {
    document.slide.src = images[i];


    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


  let data = JSON.parse(localStorage.getItem("projectuserdata"))
  
  if(data)
  setTimeout (() =>{
    document.getElementById("change_name").innerHTML = data[data.length-1].first_name
},1000) 
  

// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('number').value == "") {
        alert("Please Fill All Details its Mandatory !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }
}
//Function To Display Popup
function div_show() {
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('popupContact').style.display = "none";
}

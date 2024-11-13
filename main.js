// let menuList = socument.getElementById("menulist");

// menuList.style.display = "none";

// function togglemenue() {
  
//   if (menuList.style.display == "none") {
//     menuList.style.display = "block";
//   }
//   else {
//     menuList.style.display = "none";
//   }

// }

let toggleBtn = document.querySelector("togglebtn");
let menuList = document.getElementsByClassName("menulist")

 menuList.style.display = "none"; 


toggleBtn.onclick = function () {
  
  if (menuList.style.display == "none") {
    menuList.style.display = "block"
  }else {

    menuList.style.display = "none"

  }

}


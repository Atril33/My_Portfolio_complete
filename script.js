
let myItem = document.getElementById('menuitems');
let myMenu = document.getElementById('menuholder');
let myBars = document.querySelector('.three');

myMenu.addEventListener('click', mobileMenu);
function mobileMenu() {
    if(myItem.style.display == "none") {
        myItem.style.display = "block";
        myBars.style.background = "white";
        
    } else {
        myItem.style.display = "none";
        myBars.style.background = "#6070ff";
    }
}
  
    

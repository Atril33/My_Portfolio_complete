const myItem = document.getElementById('menuitems');
const myMenu = document.getElementById('menuholder');
const myMenuClose = document.getElementById('close_menu');

function mobileMenu() {
  if (myItem.style.display === 'none') {
    myItem.style.display = 'block';
  } else {
    myItem.style.display = 'none';
  }
}
myMenu.addEventListener('click', mobileMenu);

function menuClose() {
  if (myItem.style.display === 'block') {
    myItem.style.display = 'none';
  }
}
myMenuClose.addEventListener('click', menuClose);
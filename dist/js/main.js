//select dom items (html structure)
const menuBtn = document.querySelector(".menu-btn"); //selects menu botton
const menu = document.querySelector(".menu"); //selects whole menu
const menuNav = document.querySelector(".menu-nav"); //selects menu navagation links
const menuBranding = document.querySelector(".menu-branding"); //selects menu profile pic
const navItems = document.querySelectorAll(".nav-item"); //selects each individual nav item

//'let' allows you to change variables while 'const' will not
//set initial state of menu | we'll say 'false' = closed menu and 'true' = open menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //if menu is open | or if menu is set to 'true'
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //set menu state
    showMenu = true; //menu is open
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
  }
}

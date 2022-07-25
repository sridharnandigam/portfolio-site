//Select DOM items

const menuButton = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menu = document.querySelector('.menu');

const navItems = document.querySelectorAll('.nav-item');

//Set initial state
let showMenu = false;

//add event listener
menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        //add class of "close" when clicked on
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        //reset menu state
        showMenu = true;
    }
    else{
        //Remove class of "close" when clicked on again
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}


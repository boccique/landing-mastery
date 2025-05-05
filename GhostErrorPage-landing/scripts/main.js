// show menu script
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// menu is shown
// validation if constant exists
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

//menu is hidden
// validation if constant exists
if(navMenu){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

// removing menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
        // when click on each nav__link, show-menu will be removed
        navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
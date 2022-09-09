// toggle menu
const toggleMenu=document.querySelector('#toggle-menu');
const toggleMenuIcon=toggleMenu.querySelector('img');
const menu=document.querySelector('#menu');
toggleMenu.addEventListener('click',() =>
{
    menu.classList.toggle('translate-y-[-400%]')
    changeMenuIcon()
})
//closing the menu when clicked the menu list
const navLinks=document.querySelectorAll('.nav-link')// this returns all elements with the nav-link class
navLinks.forEach(navLinks =>{
    navLinks.addEventListener('click',()=>{
        menu.classList.add('translate-y-[-400%]')
        changeMenuIcon()
    })
})
function changeMenuIcon(){// this helps us to toggle the menu if the screen size is small by pressing the togglemenu
    const isContainTranslate=menu.classList.contains('translate-y-[-400%]')
    const icon= isContainTranslate? 'icon-menu':'icon-close'
    toggleMenuIcon.src=`./images/icons/${icon}.svg`
}

//toggle theme
const html=document.querySelector('html');
const toggleTheme=document.querySelector('#toggle-theme');
const toggleThemeIcon=toggleTheme.querySelector('img');
toggleTheme.addEventListener('click',()=>{
    html.classList.toggle('dark')
    const isDark=html.classList.contains('dark')
    const themeIcon=isDark?'light':'dark'
    toggleThemeIcon.src=`./images/icons/icon-${themeIcon}.svg`
})
// toggle menu
const toggleMenu=document.querySelector('#toggle-menu');
const toggleMenuIcon=toggleMenu.querySelector('img');
const menu=document.querySelector('#menu');
toggleMenu.addEventListener('click',() =>
{
    menu.classList.toggle('translate-y-[-400%]')
    const isMenuHidden=menu.classList.contains('translate-y-[-400%]')
    const icon=isMenuHidden?'menu':'close'
    toggleMenuIcon.src=`./images/icons/${icon}.svg`
})
//closing the menu when clicked the menu list
const navLinks=document.querySelectorAll('.nav-link')// this returns all elements with the nav-link class
navLinks.forEach(navLinks =>{
    navLinks.addEventListener('click',()=>{
        menu.classList.add('translate-y-[-400%]')
        const isMenuHidden=menu.classList.contains('translate-y-[-400%]')
        const icon=isMenuHidden?'menu':'close'
        toggleMenuIcon.src=`./images/icons/${icon}.svg`
    })
})

// Dark mode toggle
const html=document.querySelector('html');
const toggleTheme=document.querySelector('#toggle-theme');
const toggleThemeIcon=toggleTheme.querySelector('img');

// Check for saved theme preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    toggleThemeIcon.src='./images/icons/icon-light.svg';
} else {
    html.classList.remove('dark');
    toggleThemeIcon.src='./images/icons/icon-dark.svg';
}

toggleTheme.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    const themeIcon = isDark ? 'light' : 'dark';
    toggleThemeIcon.src = `./images/icons/icon-${themeIcon}.svg`;
    localStorage.theme = isDark ? 'dark' : 'light';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
    observer.observe(section);
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('overflow-hidden');
        }
    });
}
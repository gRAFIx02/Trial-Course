document.addEventListener('DOMContentLoaded', function ()
{
    // Toggle hamburger menu
    const menuToggle = document.querySelector('.mobile-menu > i');
    const hamburgerMenu = document.querySelector('.mobile-menu-items');
    menuToggle.addEventListener('click', function () 
    {
        menuToggle.classList.toggle('menu-rotate');
        hamburgerMenu.classList.toggle('active');
    });

    // Blur navbar on scroll
    window.addEventListener('scroll', function () 
    {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 0)
            navbar.classList.add('navbar-blur');
        else
            navbar.classList.remove('navbar-blur');
    });
});
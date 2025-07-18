document.addEventListener('DOMContentLoaded', function()
{
    // Toggle hamburger menu
    const toggleHamburgerMenu = document.querySelector('.mobile-menu > i');
    const hamburgerMenuItems = document.querySelector('.hamburger-menu-items');
    toggleHamburgerMenu.addEventListener('click', function ()
    {
        toggleHamburgerMenu.classList.toggle('hamburger-menu-rotation');
        hamburgerMenuItems.classList.toggle('active');
    });

    // Navbar blur on scroll
    window.addEventListener('scroll', function ()
    {
        const nav = document.querySelector('.navbar');
        if(window.scrollY > 0)
            nav.classList.add('navbar-blur');
        else
            nav.classList.remove('navbar-blur');
    });

    // Video modal
    const modal = document.querySelector('.modal-container');
    const playButton = document.querySelector('.preview-button');
    const modalCloseButton = document.querySelector('.modal-content > span');
    const videoPlayer = document.getElementById('video-player');

    playButton.addEventListener('click', function()
    {
        modal.style.display = 'block';
        videoPlayer.src = 'https://www.youtube.com/embed/5q5JfLTcLdQ?si=xlHtBQMA_T7NVsoN';
    });

    modalCloseButton.addEventListener('click', function()
    {
        modal.style.display = 'none';
        videoPlayer.src = '';
    });

    window.addEventListener('click', function(event)
    {
        if(event.target === modal)
        {
            modal.style.display = 'none';
            videoPlayer.src = '';
        }
    });

    window.addEventListener('keydown', function(event)
    {
        if(event.key === 'Escape')
        {
            modal.style.display = 'none';
            videoPlayer.src = '';
        }
    });
});
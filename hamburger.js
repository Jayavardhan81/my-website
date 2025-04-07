const hamburger = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links .nav-item');

    // Toggle 'active' class on hamburger icon click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('hide'); // Hide hamburger icon when menu is open
    });

    // Close the menu and show the hamburger icon when a nav item is clicked
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('hide'); // Show hamburger icon again
        });
    });
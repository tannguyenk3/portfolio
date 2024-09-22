// Get all the tab links and tab content elements
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

// Function to remove 'active' class from all tabs and hide all content
function deactivateAllTabs() {
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
}

// Add click event listener to each tab link
tabLinks.forEach(link => {
    link.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Deactivate all tabs and hide all content
        deactivateAllTabs();
        
        // Activate clicked tab
        this.classList.add('active');
        
        // Show the content corresponding to the clicked tab
        document.getElementById(tabId).classList.add('active-tab');
    });
});

// ----------(Nav bar menu)--------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ----------(Scroll Reveal)--------

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom' 
});

ScrollReveal().reveal('.home-content, h1, .footer', { origin: 'top' });
ScrollReveal().reveal('.home-img, .challenges-container, .contact-right', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .icon-skills', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact-left', { origin: 'right' });

// ----------(Typed JS)--------

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Development Learner', 'UI/UX Design Learner', 'Study/Intern'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
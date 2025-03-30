document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const topBtn = document.getElementById("backToTop");

// Show the button when user scrolls down 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll smoothly to the top when clicked
topBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".fade-in");

    function checkScroll() {
        let scrollPosition = window.innerHeight; // Get viewport height

        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top; 
            if (sectionTop < scrollPosition - 50) { 
                section.classList.add("visible"); // Add 'visible' class when in view
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on page load
});
document.addEventListener("DOMContentLoaded", function() {
    let heroSection = document.querySelector(".hero");

    // Add the 'visible' class after a short delay
    setTimeout(() => {
        heroSection.classList.add("visible");
    }, 50); // 50ms delay for smooth effect
});
function refreshPage() {
    location.reload(); // Reloads the current page
}

// Declare fade variable
const fades = document.querySelectorAll('.fade-in');

// Declare how far you can scroll before elements fade in
const appearOptions = {
    threshold: 1
};

// Functionality for fade in
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

fades.forEach(fades => {
    appearOnScroll.observe(fades);
});
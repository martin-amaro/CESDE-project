document.addEventListener("DOMContentLoaded", function () {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
});

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const menuMobile = document.getElementById('menuMobile');

menuToggle.addEventListener('click', (event) => {
    let isActive = menuMobile.classList.contains('active');

    // Sincronizar ambos elementos
    menuToggle.classList.toggle('active', !isActive);
    menuMobile.classList.toggle('active', !isActive);

});

// Partners
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.partner-gallery__content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Parallax	Effect
const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    const parallaxImage = document.querySelector('.parallax2');

    if (parallaxImage) {
        const offset = scrollTop * 0.4; // Ajusta la velocidad con el factor
        parallaxImage.style.transform = `translateY(${offset}px)`; // Aplicar la transformación
    }
};

document.addEventListener('scroll', handleScroll);

// FAQ
document.querySelectorAll(".faq-title").forEach(title => {
    title.addEventListener("click", function() {
        const content = this.nextElementSibling;
        const isActive = content.classList.contains("active");

        document.querySelectorAll(".faq-content").forEach(c => c.classList.remove("active"));
        document.querySelectorAll(".faq-title").forEach(t => t.classList.remove("active"));

        if (!isActive) {
            content.classList.add("active");
            this.classList.add("active");
        }
    });
});

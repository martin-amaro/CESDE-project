const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    const parallaxImage = document.querySelector('.parallax2');

    if (parallaxImage) {
        const offset = scrollTop * 0.4; // Ajusta la velocidad con el factor
        parallaxImage.style.transform = `translateY(${offset}px)`; // Aplicar la transformación
    }
};

document.addEventListener('scroll', handleScroll);

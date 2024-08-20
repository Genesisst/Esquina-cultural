document.addEventListener('DOMContentLoaded', () => {
    // Desplazamiento suave para enlaces de navegación
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botón de "Volver al Inicio"
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Volver al Inicio';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        document.getElementById('inicio').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Mostrar/ocultar botón de "Volver al Inicio" al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});

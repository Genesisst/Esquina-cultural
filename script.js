<!-- Añadir justo antes del cierre de la etiqueta </body> -->
<script>
    // Desplazamiento suave para enlaces de navegación
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    // Funcionalidad opcional para cambiar el fondo de las secciones
    const backgrounds = [
        'https://example.com/nueva-imagen-1.jpg',
        'https://example.com/nueva-imagen-2.jpg',
        'https://example.com/nueva-imagen-3.jpg'
    ];

    function changeBackground(index) {
        const sections = document.querySelectorAll('.imagen-fondo-comun');
        sections.forEach(section => {
            section.style.backgroundImage = `url(${backgrounds[index]})`;
        });
    }

    // Ejemplo: Cambia el fondo cada 10 segundos
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        changeBackground(currentIndex);
    }, 10000); // Cambia cada 10 segundos
</script>

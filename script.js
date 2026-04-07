// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de scroll en la navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Manejo del formulario de contacto
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const nombre = this.querySelector('input[name="nombre"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const mensaje = this.querySelector('textarea[name="mensaje"]').value;
        
        // Inicializar EmailJS (reemplaza con tu clave pública)
        emailjs.init("H6b1S3qTcna1FHmon");
        
        // Enviar email
        emailjs.send("service_t67bhht", "template_lvlczjj", {
            from_name: nombre,
            from_email: email,
            message: mensaje,
            to_email: "artesklapublicidad@gmail.com"
        }).then(function(response) {
            console.log('Email enviado:', response);
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        }, function(error) {
            console.log('Error al enviar email:', error);
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        });
    });
}

// Animación de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar observador a tarjetas
document.querySelectorAll('.servicio-card, .proyecto-card, .cliente-logo, .catalogo-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Contador de estadísticas (opcional)
function countUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio web cargado correctamente');
});

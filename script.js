// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    /* ======== 1. EFECTO MÁQUINA DE ESCRIBIR (TYPING) ======== */
    // (Este código se mantiene igual, ya que funciona perfectamente)

    const typingElement = document.getElementById('typing-effect');
    const textsToType = [
        "Ingeniero Informático.",
        "Desarrollador Full Stack.",
        "Entusiasta de la IA.",
        "Creador de Soluciones."
    ];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textsToType[textIndex].length) {
            typingElement.textContent += textsToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % textsToType.length;
            setTimeout(type, 500);
        }
    }

    type(); // Inicia el efecto de escritura


    /* ======== 2. ANIMACIONES CON GSAP Y SCROLLTRIGGER ======== */

    // ¡Importante! Registra el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- Animación 1: Carga inicial (Header y Hero) ---
    // Anima la cabecera y la sección "hero" en cuanto carga la página.
    gsap.from("header .logo, header nav li, .hero h1, .hero .subtitulo, .hero .cta-button", {
        duration: 0.8,
        opacity: 0,
        y: -50,
        stagger: 0.1,
        ease: "power3.out"
    });

    // --- Animación 2: Sección "Sobre Mí" ---
    gsap.from("#sobre-mi h2, .about-text p", {
        scrollTrigger: {
            trigger: "#sobre-mi",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: "power2.out"
    });

    // --- Animación 3: Habilidades ---
    gsap.from(".skill-category", {
        scrollTrigger: {
            trigger: "#habilidades",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power2.out"
    });

    // --- Animación 4: Experiencia (Timeline) ---
    // Usamos #experiencia .timeline-item para ser específicos
    gsap.from("#experiencia .timeline-item", {
        scrollTrigger: {
            trigger: "#experiencia",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        x: (index, target) => {
            // Si el item es impar (izquierda), viene de -50. Si es par (derecha), viene de 50.
            return index % 2 === 0 ? -50 : 50;
        },
        stagger: 0.3,
        ease: "power3.out"
    });

    // --- Animación 5: Educación (Timeline) ---
    gsap.from("#educacion .timeline-item", {
        scrollTrigger: {
            trigger: "#educacion",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        x: (index, target) => { return index % 2 === 0 ? -50 : 50; },
        stagger: 0.3,
        ease: "power3.out"
    });

    // --- Animación 6: Logros (Achievements) ---
    gsap.from(".achievement-card", {
        scrollTrigger: {
            trigger: "#logros",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.5,
        opacity: 0,
        scale: 0.8, // Vienen escalando
        stagger: 0.15,
        ease: "back.out(1.4)"
    });

    // --- Animación 7: Proyectos ---
    // (Esta faltaba en tu código, la añado para completar)
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: "#proyectos",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        duration: 0.6,
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.2,
        ease: "back.out(1.4)"
    });

    // --- Animación 8: Contacto ---
    // (Esta también faltaba)
    gsap.from("#contacto h2, #contact-form input, #contact-form textarea, #contact-form button", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.7,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: "power2.out"
    });

});

// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    /* ======== 1. EFECTO MÁQUINA DE ESCRIBIR (TYPING) ======== */
    // ... (tu código de typing va aquí) ...
    // ... (asegúrate de que esté completo) ...
    type(); // No olvides llamar a la función


    /* ======== 2. FUNCIONALIDAD DEL MENÚ MÓVIL ======== */
    // (AÑADE ESTE BLOQUE)

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('#nav-links li a');

    // 1. Abrir/Cerrar el menú con el botón
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // 2. Cerrar el menú al hacer clic en un enlace (importante en móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });


    /* ======== 3. ANIMACIONES CON GSAP Y SCROLLTRIGGER ======== */
    // ... (todo tu código de GSAP va aquí) ...
    gsap.registerPlugin(ScrollTrigger);
    // ... (gsap.from("header .logo..."), etc.) ...

});

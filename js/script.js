    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Sora', 'sans-serif'],
          }
        }
      }
    }

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DEL MENÚ MÓVIL (Asumo IDs: btnMenu y mobileMenu) ---
    const btnMenu = document.getElementById("btnMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    if (btnMenu && mobileMenu) {
        btnMenu.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("animate-fade");
        });
    }

    // --- 2. ANIMACIÓN FLOTANTE (@keyframes float) ---
    // Inserción del keyframe 'float' en el <head>
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    // --- 3. EFECTO PARALLAX CON MOUSE ---
    // Usaremos el contenedor de la imagen del héroe que identificaste en tu HTML.
    const heroImageContainer = document.querySelector('.relative.flex.justify-center.md\\:justify-end.z-10');

    if (heroImageContainer) {
        document.addEventListener('mousemove', (e) => {
            // Cálculo: Centro (0.5) - Posición del mouse / Ancho total. Multiplicador ajusta la intensidad.
            const x = (e.clientX / window.innerWidth - 0.5) * 1; 
            const y = (e.clientY / window.innerHeight - 0.5) * 1;

            // Transforma con una rotación sutil (ajusta los multiplicadores si quieres más o menos efecto)
            heroImageContainer.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }
});
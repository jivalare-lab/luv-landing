# Cambios

## 2026-11-16, Codex, ampliación

Se amplió la landing pública a petición de Isaac. Se añadieron una franja tipográfica, tres puntos de entrada para estudiantes con idea, habilidad o curiosidad, ejemplos marcados expresamente como posibilidades y preguntas frecuentes sobre la lista de eventos. Se reforzó el motivo gráfico de la ruta del tranvía y se hizo más completo el pie de página. El estado de captación de correos no cambió. Verificación: `node verificar.js` pasó ocho comprobaciones y `git diff --check` no encontró errores. Playwright abrió la página en anchos de 1440, 390 y 320 píxeles: siete secciones, sin desbordamiento horizontal y con las preguntas desplegables operativas. Despliegue: pendiente al registrar este cambio. Reversión: revertir el commit de ampliación en GitHub.

## 2026-11-16, Codex

Se creó la landing de LUV a partir del brief y el mockup que envió Jey Miguez. La página reproduce la dirección cardinal y oro, el titular y las tres razones para participar con HTML y CSS adaptable a móvil. Se retiraron los enlaces a eventos y proyectos porque el paquete no incluía destinos reales. La captación de correos quedó sin activar porque faltan plataforma, responsable de datos, texto de consentimiento y prueba de baja. No se envió ningún correo. Verificación: `node verificar.js` pasó sus ocho comprobaciones de estructura, enlaces, diseño móvil, accesibilidad básica y ausencia de formulario falso. GitHub Pages informó `built`; la URL y su CSS respondieron HTTP 200. Despliegue: https://jivalare-lab.github.io/luv-landing/. Reversión: revertir el commit de publicación o desactivar GitHub Pages desde el repositorio.

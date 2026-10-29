# Cotizador ING Estructural

Aplicación web para cotizaciones de servicios de ingeniería: **rápida**, **formal** y **flexible**.

- Cuadro de ítems con HH de ingeniero y proyectista, tarifas UF/hora editables y tabla de entregables (planos A1, MDC/informe, EETT) desde el catálogo de ítems.
- Lee clientes y proyectos de POWER (Supabase, tabla `docs`, solo lectura) con la cuenta de POWER. El N° de cotización toma el código del proyecto.
- Exporta a Word (`docx.iife.js`) y PDF (`html2pdf.bundle.min.js`).
- Los borradores se guardan en el navegador.

Sitio estático sin compilación: `index.html` en la raíz. Cada cambio en `main` se publica en Netlify una vez conectado el repositorio.

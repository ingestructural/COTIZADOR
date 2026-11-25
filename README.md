# Cotizador ING Estructural

Aplicación web para cotizaciones de servicios de ingeniería: **rápida**, **formal** y **flexible**.

- Cuadro de ítems con HH de ingeniero y proyectista, tarifas UF/hora editables y tabla de entregables (planos A1, MDC/informe, EETT) desde el catálogo de ítems.
- Lee clientes y proyectos de POWER (Supabase, tabla `docs`, solo lectura) con la cuenta de POWER. El N° de cotización toma el código del proyecto.
- Tres pantallas: Inicio (nueva cotización: Express, Formal, Flexible, Contrato marco CMPC/Arauco), Cotizaciones por cliente (ver PDF, modificar, usar como base) y Editor.
- Salida en PDF (`html2pdf.bundle.min.js`): Guardar PDF guarda en la carpeta elegida y archiva una copia en POWER (`cotizaciones_pdf`).
- Los borradores se guardan en el navegador.

Sitio estático sin compilación: `index.html` en la raíz. Cada cambio en `main` se publica en Netlify una vez conectado el repositorio.

# Peque Travel — sitio web

Sitio estático (HTML/CSS/JS puro, sin build) para linkear desde Instagram/TikTok.

**En vivo:** https://pequetravelplanner.com

Publicado con GitHub Pages, dominio propio (`pequetravelplanner.com`) comprado en Cloudflare.

## Qué se edita y dónde

### En `data.js` (lo más común)

Se puede editar directamente desde GitHub (web o app), sin instalar nada:
abrí `data.js` → ícono de lápiz (Edit) → hacés el cambio → "Commit changes".
A los 1-2 minutos el cambio ya está online (GitHub Pages redeploya solo).

- **Sumar viajeros:** cambiá el número de `pasajeros`. Se actualiza solo en
  el contador y en el boarding pass de arriba. `fechaActualizacion` es un
  texto libre que se muestra debajo del contador ("Desde agosto de 2025").
- **Agregar una ciudad** a un país que ya está: sumala al array `ciudades`
  de ese país.
- **Agregar un país nuevo:** copiá un bloque `{ pais: ..., codigo: ...,
  continente: ..., ciudades: [...] }` completo y pegalo dentro del array
  `destinos`. `continente` tiene que ser `sudamerica`, `caribe`,
  `norteamerica` o `europa` (es lo que usan los filtros).
- **Elegir los destinos que se ven de entrada:** los países con
  `destacado: 1`, `destacado: 2`, … se muestran primero y en ese orden; el
  resto aparece al tocar "Ver los N destinos". Conviene que sean 6 (2 filas
  de 3 en compu). Para sacar uno de destacados, borrá su línea `destacado`.
- **WhatsApp:** el número (`whatsapp`) y el mensaje pre-cargado
  (`mensajeWhatsapp`) se usan en todos los botones de chat del sitio.

### En `index.html` (cambios menos frecuentes)

- **Presentación "Quién está detrás"** (texto de Valen): sección
  `id="sobre-mi"`.
- **Links a los formularios de cotización** (Google Forms): aparecen dos
  veces, en el hero y en el bloque final rosa. Si cambia un formulario, hay
  que actualizar ambos lugares (buscá `docs.google.com/forms`).
- **Link a la comunidad de WhatsApp** (canal): botón "Unirme a la comunidad
  PequeTravel" del bloque final.
- **Instagram y TikTok:** los links están escritos en `index.html` (hero y
  footer). Los campos `instagram` y `tiktok` de `data.js` hoy no se usan.

### Imágenes

- Las imágenes de `assets/` están optimizadas para web (WebP y tamaño
  reducido). **Los originales en alta resolución no están en el repo**:
  se guardan aparte, en la carpeta `peque-originales/` (fuera del repo,
  porque todo lo que está acá se publica).
- Para cambiar una imagen: guardá el original en `peque-originales/`,
  exportá una versión liviana (WebP, ~800-1000 px de ancho, idealmente
  menos de 150 KB) y reemplazá el archivo en `assets/` con el mismo nombre.
  Fotos de celular directas pesan 1-2 MB y hacen lenta la página.

### Ver los cambios antes de publicar

Abrí `index.html` en el navegador (doble click). Si se edita desde GitHub,
directamente se publica al hacer "Commit changes".

## Estructura de archivos

```
index.html         → estructura de la página
style.css           → estilos (colores, tipografía, layout, modo oscuro)
script.js           → contador animado, tarjetas de destino, filtros, links de WhatsApp
data.js             → EL ARCHIVO QUE VAN A EDITAR (contador, destinos, WhatsApp)
sitemap.xml         → para indexación en Google (Search Console)
robots.txt          → apunta al sitemap
assets/
  logo.webp             → logo de Global Dream Travel
  favicon-32.png        → ícono de la pestaña del navegador
  apple-touch-icon.png  → ícono al guardar el sitio en la pantalla de inicio (iPhone)
  valen.webp            → foto de la sección "Quién está detrás"
  cert-disney.webp      → certificado College of Disney Knowledge
  cert-universal.webp   → certificado Universal Especialista
  share.png             → imagen que aparece al compartir el link (WhatsApp, IG, etc.)
```

## Cosas a tener en cuenta

- **Fuente del logo ("Lazidog")**: es de pago, no está en uso en el resto del
  sitio. El resto del texto usa **Fredoka** (Google Fonts, gratis), con un
  espíritu redondeado similar. Si en algún momento compran la licencia web
  de Lazidog, se cambia en `style.css` (variable `--font-display`).
- **Badge de IATA**: es solo texto, no se subió el isotipo oficial. Se puede
  sumar como imagen en `assets/` si lo consiguen.
- **Imagen de preview al compartir (`share.png`)**: si cambian el logo o los
  colores de marca más adelante, esta imagen queda desactualizada y hay que
  regenerarla aparte — no se arma sola a partir del resto del sitio.
- **Modo oscuro**: el toggle vive en el header (`#theme-toggle`); los
  estilos de modo oscuro están en `style.css` bajo los selectores `body.dark`.
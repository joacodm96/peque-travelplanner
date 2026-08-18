# Peque Travel — sitio web

Sitio estático (HTML/CSS/JS puro, sin build) para linkear desde Instagram/TikTok.

**En vivo:** https://pequetravelplanner.com

Publicado con GitHub Pages, dominio propio (`pequetravelplanner.com`) comprado en Cloudflare.

## Actualizar el contador o los destinos

Todo el contenido variable vive en **`data.js`**. No hace falta tocar ningún
otro archivo:

- Para sumar viajeros: cambiá el número de `pasajeros` y el texto de
  `fechaActualizacion`.
- Para agregar una ciudad nueva a un país que ya está: sumala al array
  `ciudades` de ese país.
- Para agregar un país nuevo: copiá un bloque `{ pais: ..., codigo: ...,
  continente: ..., ciudades: [...] }` completo y pegalo dentro del array
  `destinos`.
- Para cambiar el número de WhatsApp, el usuario de Instagram/TikTok o el
  mensaje pre-cargado: son los últimos campos del archivo.

Se puede editar directamente desde GitHub (web o app), sin instalar nada:
abrí `data.js` → ícono de lápiz (Edit) → hacés el cambio → "Commit changes".
A los 1-2 minutos el cambio ya está online (GitHub Pages redeploya solo).

## Estructura de archivos

```
index.html         → estructura de la página
style.css           → estilos (colores, tipografía, layout, modo oscuro)
script.js           → contador animado, tarjetas de destino, filtros, links de WhatsApp
data.js             → EL ARCHIVO QUE VAN A EDITAR (contador, destinos, WhatsApp)
sitemap.xml         → para indexación en Google (Search Console)
robots.txt          → apunta al sitemap
assets/
  logo.png              → logo de Global Dream Travel
  cert-disney.png       → certificado College of Disney Knowledge
  cert-universal.png    → certificado Universal Especialista
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
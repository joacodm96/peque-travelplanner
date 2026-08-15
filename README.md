# Peque Travel — sitio web

Sitio estático (HTML/CSS/JS puro, sin build) para linkear desde Instagram/TikTok.

## Publicarlo en GitHub Pages (una sola vez)

1. Creá un repositorio nuevo en GitHub. Si lo llamás `pequetravel`, la URL final
   va a quedar como `usuario.github.io/pequetravel`. Si querés que quede como
   `usuario.github.io` (sin subcarpeta), el repo se tiene que llamar
   exactamente `usuario.github.io`.
2. Subí **todos** los archivos de esta carpeta al repositorio (`index.html`,
   `style.css`, `script.js`, `data.js`, `README.md` y la carpeta `assets/`
   completa) manteniendo la misma estructura.
3. En el repositorio: **Settings → Pages**.
4. En "Build and deployment" → Source: **Deploy from a branch**.
5. Branch: `main`, carpeta `/ (root)` → **Save**.
6. Esperá 1-2 minutos. GitHub te va a mostrar la URL pública arriba de esa
   misma pantalla.
7. Pegá esa URL en el link de la bio de Instagram/TikTok.

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

Se puede editar directamente desde GitHub (web o app), sin instalar nada:
abrí `data.js` → ícono de lápiz (Edit) → hacés el cambio → "Commit changes" →
"Commit directly to the main branch". A los 1-2 minutos el cambio ya está
online.

## Estructura de archivos

```
index.html      → estructura de la página
style.css       → estilos (colores, tipografía, layout)
script.js       → arma el contador, las tarjetas de destino y los links de WhatsApp
data.js         → EL ARCHIVO QUE VAN A EDITAR (contador, destinos, WhatsApp)
assets/
  logo.png          → logo de Global Dream Travel
  cert-disney.png   → certificado College of Disney Knowledge
  cert-universal.png→ certificado Universal Especialista
```

## Pendiente / a definir

- La tipografía del logo ("Lazidog") es una fuente de pago — el sitio usa
  **Fredoka** (Google Fonts, gratis) como reemplazo con el mismo espíritu
  redondeado. Si compran la licencia web de Lazidog, se puede reemplazar en
  `style.css` (variable `--font-display`) en un minuto.
- El badge de IATA es solo texto (no se subió el logo oficial de IATA). Si
  quieren el isotipo real, se puede agregar como imagen en `assets/`.
- Dominio: por ahora pensado para `usuario.github.io/repo`. Si más adelante
  compran un dominio propio (ej. pequetravel.com), es un cambio de 5 minutos.

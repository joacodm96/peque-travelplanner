/* ============================================================
   PEQUE TRAVEL — SCRIPT
   Lee todo de data.js. No hace falta tocar este archivo para
   actualizar contenido.
   ============================================================ */

(function () {
  "use strict";

  var d = window.SITE_DATA;

  /* ---------- Tema oscuro ---------- */
  var themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    var isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(isDark));
      var themeIcon = themeToggle.querySelector(".theme-icon");
      var themeLabel = themeToggle.querySelector(".theme-label");
      if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
      if (themeLabel) themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
    }
    try {
      localStorage.setItem("peque-theme", theme);
    } catch (err) {}
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem("peque-theme");
  } catch (err) {}

  if (savedTheme === "dark" || (savedTheme !== "light" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
    });
  }

  /* ---------- Links de WhatsApp ---------- */
  var wppUrl = "https://wa.me/" + d.whatsapp + "?text=" + encodeURIComponent(d.mensajeWhatsapp);
  ["wpp-top", "wpp-hero", "wpp-foot", "wpp-float"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", wppUrl);
  });

  /* ---------- Botón flotante: aparece al pasar el hero ---------- */
  var floatEl = document.getElementById("wpp-float");
  var heroEl = document.getElementById("top");
  if (floatEl && heroEl && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      floatEl.classList.toggle("is-hidden", entries[0].isIntersecting);
    }, { threshold: 0.25 }).observe(heroEl);
  } else if (floatEl) {
    floatEl.classList.remove("is-hidden");
  }

  /* ---------- Contador animado ---------- */
  var counterEl = document.getElementById("counter-num");
  var target = d.pasajeros || 0;
  var duration = 1400;
  var startTime = null;

  function animateCounter(ts) {
    if (!startTime) startTime = ts;
    var progress = Math.min((ts - startTime) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    counterEl.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(animateCounter);
    } else {
      counterEl.textContent = target;
    }
  }
  requestAnimationFrame(animateCounter);

  var ticketPax = document.getElementById("ticket-pasajeros");
  if (ticketPax && target) ticketPax.textContent = target;

  document.getElementById("counter-updated").textContent =
    d.fechaActualizacion || "";

  /* ---------- Filtros de destinos ---------- */
  var CONTINENTES = {
    todos: "Todos",
    sudamerica: "Sudamérica",
    caribe: "Caribe",
    norteamerica: "Norte y Centroamérica",
    europa: "Europa"
  };

  var filtersEl = document.getElementById("filters");
  var currentFilter = "todos";

  Object.keys(CONTINENTES).forEach(function (key) {
    var btn = document.createElement("button");
    btn.className = "filter-btn" + (key === "todos" ? " active" : "");
    btn.textContent = CONTINENTES[key];
    btn.type = "button";
    btn.setAttribute("data-filter", key);
    btn.setAttribute("aria-pressed", String(key === "todos"));
    btn.addEventListener("click", function () {
      currentFilter = key;
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      renderDestinos();
    });
    filtersEl.appendChild(btn);
  });

  /* ---------- Render de tarjetas de destino ---------- */
  var gridEl = document.getElementById("destinos-grid");
  var toggleEl = document.getElementById("destinos-toggle");
  var expanded = false;

  // Con "Todos" se muestran primero los destacados, y el resto solo al
  // tocar "Ver todos". Así las primeras tarjetas no cambian de lugar al desplegar.
  var destacados = d.destinos.filter(function (i) { return i.destacado; })
    .sort(function (a, b) { return Number(a.destacado) - Number(b.destacado); });
  var resto = d.destinos.filter(function (i) { return !i.destacado; });
  if (!destacados.length) {
    destacados = d.destinos.slice(0, 6);
    resto = d.destinos.slice(6);
  }

  function renderDestinos() {
    gridEl.innerHTML = "";
    var list;
    if (currentFilter === "todos") {
      list = expanded ? destacados.concat(resto) : destacados;
    } else {
      list = d.destinos.filter(function (item) { return item.continente === currentFilter; });
    }

    var showToggle = currentFilter === "todos" && resto.length > 0;
    toggleEl.hidden = !showToggle;
    toggleEl.setAttribute("aria-expanded", String(expanded));
    toggleEl.textContent = expanded ? "Ver menos" : "Ver los " + d.destinos.length + " destinos ✈";

    list.forEach(function (item) {
      var card = document.createElement("div");
      card.className = "pass-card reveal";
      card.innerHTML =
        '<div class="pass-row1">' +
          '<span class="eze">EZE</span>' +
          '<span class="arrow">✈</span>' +
          '<span class="code">' + item.codigo + '</span>' +
        '</div>' +
        '<div class="pass-country">' + item.pais + '</div>' +
        '<div class="pass-dashed"></div>' +
        '<div class="pass-cities">' + item.ciudades.join(" · ") + '</div>';
      gridEl.appendChild(card);
    });

    observeReveals();
  }

  toggleEl.addEventListener("click", function () {
    expanded = !expanded;
    renderDestinos();
    // Al colapsar, volver al inicio de la sección para no quedar perdidos más abajo
    if (!expanded) document.getElementById("destinos").scrollIntoView({ behavior: "smooth" });
  });

  renderDestinos();

  /* ---------- Código random en el ticket del hero ---------- */
  var codes = d.destinos.map(function (i) { return i.codigo; });
  var ticketCode = document.getElementById("hero-ticket-code");
  if (ticketCode && codes.length) {
    ticketCode.textContent = codes[Math.floor(Math.random() * codes.length)];
  }

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      io.observe(el);
    });
  }
  observeReveals();
})();

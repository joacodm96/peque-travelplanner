/* ============================================================
   PEQUE TRAVEL — DATOS DEL SITIO
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitan editar para actualizar
   la web. No hace falta tocar HTML ni CSS.

   Cómo editar en GitHub (desde el celu o la compu):
   1. Entrá al repositorio en github.com
   2. Abrí este archivo (data.js)
   3. Tocá el lápiz (Edit) arriba a la derecha
   4. Cambiá el número o agregá una línea nueva
   5. Abajo, "Commit changes" -> "Commit directly to the main branch"
   6. Esperá 1-2 minutos y el cambio ya está online
   ============================================================ */

window.SITE_DATA = {

  // --------------------------------------------------------
  // CONTADOR DE VIAJEROS
  // Actualizá este número a mano cada vez que suman un cliente.
  // --------------------------------------------------------
  pasajeros: 117,
  fechaActualizacion: "Desde agosto de 2025", // texto libre, para mostrar una historia de origen, no una fecha de actualización

  // --------------------------------------------------------
  // DESTINOS
  // Cada país tiene un código de aeropuerto de referencia (el
  // más usado) y una lista de ciudades a las que ya mandaron
  // gente. Para agregar una ciudad nueva, sumala al array
  // "ciudades" del país correspondiente. Para agregar un país
  // nuevo, copiá un bloque entero y completá los datos.
  //
  // continente: "sudamerica" | "caribe" | "norteamerica" | "europa"
  //   (se usa para los filtros de arriba de la sección Destinos)
  // --------------------------------------------------------
  destinos: [
    {
      pais: "Argentina",
      codigo: "AEP",
      continente: "sudamerica",
      ciudades: ["Buenos Aires", "Mendoza", "Córdoba", "Bariloche", "Calafate", "Esquel", "Trevelin", "Puerto Madryn", "San Salvador de Jujuy", "Tilcara", "Mar del Plata"]
    },
    {
      pais: "Brasil",
      codigo: "GIG",
      continente: "sudamerica",
      ciudades: ["Río de Janeiro", "Búzios", "Florianópolis", "Camboriú", "Cabo Frío", "Maragogi", "Maceió", "Porto de Galinhas", "Porto Seguro", "Arraial de Ajuda", "Arraial do Cabo", "Pipa"]
    },
    {
      pais: "Uruguay",
      codigo: "PDP",
      continente: "sudamerica",
      ciudades: ["Punta del Este"]
    },
    {
      pais: "Chile",
      codigo: "SCL",
      continente: "sudamerica",
      ciudades: ["Santiago de Chile"]
    },
    {
      pais: "Perú",
      codigo: "LIM",
      continente: "sudamerica",
      ciudades: ["Lima", "Cuzco", "Arequipa"]
    },
    {
      pais: "República Dominicana",
      codigo: "PUJ",
      continente: "caribe",
      ciudades: ["Punta Cana", "Samaná", "Santo Domingo", "Bayahibe"]
    },
    {
      pais: "Aruba",
      codigo: "AUA",
      continente: "caribe",
      ciudades: ["Aruba"]
    },
    {
      pais: "Curazao",
      codigo: "CUR",
      continente: "caribe",
      ciudades: ["Curazao"]
    },
    {
      pais: "Costa Rica",
      codigo: "SJO",
      continente: "norteamerica",
      ciudades: ["San José", "Costa Rica"]
    },
    {
      pais: "Panamá",
      codigo: "PTY",
      continente: "norteamerica",
      ciudades: ["Ciudad de Panamá", "Panamá"]
    },
    {
      pais: "México",
      codigo: "CUN",
      continente: "norteamerica",
      ciudades: ["Cancún", "Playa del Carmen"]
    },
    {
      pais: "Estados Unidos",
      codigo: "MCO",
      continente: "norteamerica",
      ciudades: ["Orlando", "Miami", "Naples", "New York"]
    },
    {
      pais: "España",
      codigo: "BCN",
      continente: "europa",
      ciudades: ["Barcelona", "Alicante"]
    },
    {
      pais: "Francia",
      codigo: "CDG",
      continente: "europa",
      ciudades: ["París"]
    },
    {
      pais: "Italia",
      codigo: "FCO",
      continente: "europa",
      ciudades: ["Roma", "Florencia", "Sorrento", "Nápoles", "Amalfi", "Salerno"]
    },
    {
      pais: "Grecia",
      codigo: "ATH",
      continente: "europa",
      ciudades: ["Atenas", "Santorini"]
    },
    {
      pais: "Holanda",
      codigo: "AMS",
      continente: "europa",
      ciudades: ["Ámsterdam"]
    },
    {
      pais: "Bélgica",
      codigo: "BRU",
      continente: "europa",
      ciudades: ["Bruselas", "Bélgica"]
    }
  ],

  // --------------------------------------------------------
  // CONTACTO
  // --------------------------------------------------------
  whatsapp: "5492235053966", // código de país + área + número, sin +, espacios ni guiones
  instagram: "peque.travelplanner",
  tiktok: "peque.travelplanner",

  // Mensaje que se pre-carga cuando tocan el botón de WhatsApp
  mensajeWhatsapp: "¡Hola Valen! Vi tu web y quiero asesorarme para armar un viaje ✈️"
};

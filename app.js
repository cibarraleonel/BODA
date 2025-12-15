// app.js actualizado usando messages.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("gifts-container");
  if (!container) return;

  window.gifts.forEach(gift => {
    const item = document.createElement("div");
    item.className = "gift-item";

    // Tarjeta con imagen clickeable y botones
    item.innerHTML = `
      <a href="${gift.link}" target="_blank">
        <img src="${gift.img}" alt="${gift.title}">
      </a>
      <h3>${gift.title}</h3>
      <p>$${gift.price.toLocaleString("es-AR")}</p>

      <div class="button-group">

        <a class="btn-whatsapp"
           href="https://wa.me/5491152616285?text=${encodeURIComponent(window.messages.reservar(gift.title))}"
           target="_blank">
          Reservar
        </a>

        <a class="btn-secondary"
           href="https://wa.me/5491152616285?text=${encodeURIComponent(window.messages.comprobante(gift.title))}"
           target="_blank">
          Enviar comprobante
        </a>

      </div>
    `;

    container.appendChild(item);
  });
});
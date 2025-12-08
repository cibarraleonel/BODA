async function loadGifts() {
    const response = await fetch("gifts.json");
    const gifts = await response.json();

    const container = document.getElementById("gift-list");

    gifts
        .filter(g => !g.reserved && !localStorage.getItem(`gift_${g.id}`))
        .forEach(gift => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${gift.image}" alt="${gift.title}">
                <div class="card-content">
                    <h3 class="card-title">${gift.title}</h3>
                    <p class="card-price">$${gift.price.toLocaleString()}</p>
                    ${gift.url ? `<p><a href="${gift.url}" target="_blank">Ver producto</a></p>` : ""}
                </div>
                <button class="btn" onclick="reserve(${gift.id})">Reservar</button>
            `;

            container.appendChild(card);
        });
}

function reserve(id) {
    localStorage.setItem(`gift_${id}`, "reserved");
    alert("¡Gracias! Podés realizar la transferencia al alias informado.");
    location.reload();
}

loadGifts();

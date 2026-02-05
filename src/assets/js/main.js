// src/assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("src/data/services.json")
    .then(response => response.json())
    .then(data => {
      const servicesContainer = document.getElementById("services");
      const phone = data.contact.whatsapp;

      data.services
        .filter(service => service.active)
        .forEach(service => {
          const card = document.createElement("div");
          card.className = "service-card";

          card.innerHTML = `
            <h3>${service.title}</h3>
            <p class="subtitle">${service.subtitle}</p>
            <p class="description">${service.description}</p>
            <button class="service-btn">Open Project</button>
          `;

          card.querySelector(".service-btn").addEventListener("click", () => {
            const message = encodeURIComponent(service.ctaMessage);
            const url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, "_blank");
          });

          servicesContainer.appendChild(card);
        });
    })
    .catch(error => {
      console.error("Failed to load services.json:", error);
    });
});
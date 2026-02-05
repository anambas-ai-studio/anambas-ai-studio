// src/assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("/src/data/services.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load services.json");
      }
      return response.json();
    })
    .then(data => {
      const servicesContainer = document.getElementById("services");
      if (!servicesContainer) return;

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

          // 👉 UBAH FLOW: ke halaman detail layanan
          card.querySelector(".service-btn").addEventListener("click", () => {
            window.location.href = `/services/${service.slug}.html`;
          });

          servicesContainer.appendChild(card);
        });
    })
    .catch(error => {
      console.error("Error loading services:", error);
    });
});
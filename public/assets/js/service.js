document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contact-wa");
  if (!btn) return;

  const phone = "6281268918360"; // nomor WA admin
  const message = encodeURIComponent(
    "Halo, saya tertarik dengan layanan AI Video Production di Anambas AI Studio."
  );

  btn.addEventListener("click", () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  });
});
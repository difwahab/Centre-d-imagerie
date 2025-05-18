document.addEventListener("DOMContentLoaded", function () {
  // Gestion du menu hamburger
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Affichage de la carte
  var map = L.map('map').setView([35.6971, -0.6308], 15); // Oran, Algérie
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Ajout d'un marqueur sur la carte
  L.marker([35.6971, -0.6308]).addTo(map)
    .bindPopup("<b>Centre d'Imagerie Benameur</b><br>32 Boulevard Hammou Boutlelis, Oran.")
    .openPopup();
});

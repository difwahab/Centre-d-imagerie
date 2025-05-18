document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message envoyé. Merci de nous avoir contactés !');
});

// Initialisation de la carte Leaflet OpenStreetMap
const map = L.map('map').setView([35.6971, -0.6308], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([35.6971, -0.6308]).addTo(map).bindPopup("Centre d'Imagerie Benameur");

// Switch de langue
const translations = {
  fr: {
    title: "Centre d'Imagerie Benameur",
    subtitle: "Radiologie et imagerie médicale à Oran",
    navServices: "Services",
    navTeam: "Équipe",
    navContact: "Contact",
    navLocation: "Localisation",
    servicesTitle: "Nos Services",
    teamTitle: "Notre Équipe",
    contactTitle: "Contact",
    locationTitle: "Localisation",
    labelName: "Nom",
    labelMessage: "Message",
    contactButton: "Envoyer",
    footerText: "© 2025 Centre d'Imagerie Benameur - Tous droits réservés",
    alertSent: "Message envoyé. Merci de nous avoir contactés !"
  },
  ar: {
    title: "مركز التصوير الطبي بن عمور",
    subtitle: "الأشعة الطبية والتصوير في وهران",
    navServices: "خدماتنا",
    navTeam: "فريقنا",
    navContact: "اتصل بنا",
    navLocation: "الموقع",
    servicesTitle: "خدماتنا",
    teamTitle: "فريقنا",
    contactTitle: "اتصل بنا",
    locationTitle: "الموقع",
    labelName: "الاسم",
    labelMessage: "الرسالة",
    contactButton: "إرسال",
    footerText: "© 2025 مركز التصوير الطبي بن عامر - جميع الحقوق محفوظة",
    alertSent: "تم إرسال الرسالة. شكرًا لتواصلكم معنا!"
  }
};

const switcher = document.getElementById('language-switcher');

switcher.addEventListener('change', function() {
  const lang = this.value;
  const t = translations[lang];

  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');

  document.getElementById('title').textContent = t.title;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('nav-services').textContent = t.navServices;
  document.getElementById('nav-team').textContent = t.navTeam;
  document.getElementById('nav-contact').textContent = t.navContact;
  document.getElementById('nav-location').textContent = t.navLocation;
  document.getElementById('services-title').textContent = t.servicesTitle;
  document.getElementById('team-title').textContent = t.teamTitle;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('location-title').textContent = t.locationTitle;
  document.getElementById('label-name').textContent = t.labelName;
  document.getElementById('label-message').textContent = t.labelMessage;
  document.getElementById('contact-button').textContent = t.contactButton;
  document.getElementById('footer-text').textContent = t.footerText;

  document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();
    alert(t.alertSent);
  };
});

// Initialisation en français
updateLanguage('fr');

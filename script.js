document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fr: {
      title: "Centre d'Imagerie Benameur",
      subtitle: "Radiologie et imagerie médicale à Oran",
      aboutTitle: "À propos du centre",
      aboutText:
        "Situé au cœur d’Oran, le Centre d’Imagerie Benameur offre des services d’imagerie de pointe dans un environnement moderne, sécurisé et confortable. Notre mission est de fournir des diagnostics rapides, précis et accessibles à tous.",
      servicesTitle: "Nos services",
      services: [
        "Radiologie générale (rayons X)",
        "Échographie",
        "Scanner (CT Scan)",
        "IRM (Imagerie par Résonance Magnétique)",
        "Mammographie",
        "Densitométrie osseuse"
      ],
      doctorTitle: "À propos du Dr. Cherif Benameur",
      doctorText:
        "Le Dr. Cherif Benameur est un radiologue expérimenté, passionné par la technologie médicale et engagé à fournir des diagnostics précis et un suivi personnalisé. Grâce à ses années d'expérience, il assure des soins de qualité et une écoute attentive à chaque patient.",
      contactTitle: "Contactez-nous",
      formLabels: {
        name: "Nom",
        email: "Email",
        message: "Message",
        button: "Envoyer"
      },
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      footer: "Centre d’Imagerie Benameur - Tous droits réservés"
    },
    ar: {
      title: "مركز بن عامر للتصوير الطبي",
      subtitle: "الأشعة والتصوير الطبي في وهران",
      aboutTitle: "حول المركز",
      aboutText:
        "يقع مركز بن عامر للتصوير الطبي في قلب وهران، ويوفر خدمات تصوير متقدمة في بيئة حديثة وآمنة ومريحة. مهمتنا هي تقديم تشخيصات دقيقة وسريعة ومتاحة للجميع.",
      servicesTitle: "خدماتنا",
      services: [
        "الأشعة العامة (الأشعة السينية)",
        "فحص بالموجات فوق الصوتية",
        "التصوير المقطعي (السكانير)",
        "التصوير بالرنين المغناطيسي",
        "تصوير الثدي",
        "قياس كثافة العظام"
      ],
      doctorTitle: "عن الدكتور شريف بن عامر",
      doctorText:
        "الدكتور شريف بن عامر هو طبيب أشعة ذو خبرة، شغوف بالتقنيات الطبية وملتزم بتقديم تشخيصات دقيقة ومتابعة شخصية. بفضل سنوات خبرته، يضمن رعاية ذات جودة واستماعًا دقيقًا لكل مريض.",
      contactTitle: "اتصلوا بنا",
      formLabels: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        button: "إرسال"
      },
      addressLabel: "العنوان",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      footer: "مركز بن عامر للتصوير الطبي - جميع الحقوق محفوظة"
    }
  };

  const elements = {
    title: document.getElementById("title"),
    subtitle: document.getElementById("subtitle"),
    aboutTitle: document.querySelector("#about h2"),
    aboutText: document.querySelector("#about p"),
    servicesTitle: document.querySelector("#services h2"),
    servicesList: document.querySelector("#services ul"),
    doctorTitle: document.querySelector("#doctor h2"),
    doctorText: document.querySelector("#doctor p"),
    contactTitle: document.querySelector("#contact h2"),
    form: {
      name: document.querySelector("label[for='name']"),
      email: document.querySelector("label[for='email']"),
      message: document.querySelector("label[for='message']"),
      button: document.querySelector("#contact-form button")
    },
    contactInfo: {
      address: document.querySelector("#contact p:nth-of-type(1)"),
      phone: document.querySelector("#contact p:nth-of-type(2)"),
      email: document.querySelector("#contact p:nth-of-type(3)")
    },
    footer: document.querySelector("footer p")
  };

  function updateLang(lang) {
    const t = translations[lang];
    elements.title.textContent = t.title;
    elements.subtitle.textContent = t.subtitle;
    elements.aboutTitle.textContent = t.aboutTitle;
    elements.aboutText.textContent = t.aboutText;
    elements.servicesTitle.textContent = t.servicesTitle;
    elements.servicesList.innerHTML = t.services.map(item => `<li>${item}</li>`).join("");
    elements.doctorTitle.textContent = t.doctorTitle;
    elements.doctorText.textContent = t.doctorText;
    elements.contactTitle.textContent = t.contactTitle;
    elements.form.name.textContent = t.formLabels.name;
    elements.form.email.textContent = t.formLabels.email;
    elements.form.message.textContent = t.formLabels.message;
    elements.form.button.textContent = t.formLabels.button;
    elements.contactInfo.address.innerHTML = `<strong>${t.addressLabel} :</strong> 32 Boulevard Hammou Boutlelis, Oran, Algérie`;
    elements.contactInfo.phone.innerHTML = `<strong>${t.phoneLabel} :</strong> <a href="tel:+213661598132">0661 59 81 32</a>`;
    elements.contactInfo.email.innerHTML = `<strong>${t.emailLabel} :</strong> <a href="mailto:cherif.benameur@gmail.com">cherif.benameur@gmail.com</a>`;
    elements.footer.textContent = `© 2025 ${t.footer}`;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }

  document.getElementById("language-switcher").addEventListener("change", (e) => {
    updateLang(e.target.value);
  });

  updateLang("fr"); // Default
});

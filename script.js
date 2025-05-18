document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        fr: {
            title: "Centre d'Imagerie Benameur",
            subtitle: "Radiologie et imagerie médicale à Oran",
            aboutTitle: "À propos du centre",
            aboutText: "Le Centre d’Imagerie Benameur offre des services d’imagerie de pointe dans un environnement moderne et confortable.",
            servicesTitle: "Nos services",
            services: [
                "Radiologie générale",
                "Échographie",
                "Scanner (CT Scan)",
                "IRM (Imagerie par Résonance Magnétique)",
                "Mammographie",
                "Densitométrie osseuse"
            ],
            doctorTitle: "À propos du Dr. Cherif Benameur",
            doctorText: "Le Dr. Cherif Benameur est un radiologue expérimenté, passionné par la technologie médicale.",
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
            aboutText: "مركز بن عامر للتصوير الطبي يوفر خدمات تصوير طبية متقدمة في بيئة حديثة ومريحة.",
            servicesTitle: "خدماتنا",
            services: [
                "الأشعة العامة",
                "فحص بالموجات فوق الصوتية",
                "التصوير المقطعي",
                "التصوير بالرنين المغناطيسي",
                "تصوير الثدي",
                "قياس كثافة العظام"
            ],
            doctorTitle: "عن الدكتور شريف بن عامر",
            doctorText: "الدكتور شريف بن عامر هو طبيب أشعة ذو خبرة، شغوف بالتقنيات الطبية.",
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
        aboutText: document.getElementById("about-text"),
        servicesTitle: document.getElementById("services-title"),
        servicesList: document.getElementById("services-list"),
        doctor

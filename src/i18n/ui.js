export const languages = {
  it: 'Italien',
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'it';

export const ui = {
  it: {
    // Misc
    "level": "Livello",
    "form.title": "Form di contatto",
    
    // Contact Form
    "form.fullName": "Nome Completo",
    "form.email": "Indirizzo Email",
    "form.message": "Il tuo messaggio",
    "form.submit": "Invia messaggio",
    "form.validation.name": "Per favore inserisci il tuo nome completo.",
    "form.validation.email": "Per favore inserisci il tuo indirizzo email.",
    "form.validation.email.invalid": "Per favore inserisci un indirizzo email valido.",
    "form.validation.message": "Per favore inserisci il tuo messaggio.",
    "form.sending": "Invio in corso...",
    "form.error": "Qualcosa è andato storto!",
    
    // Contact Form Page
    "contactpage.title": "Contattaci",
    "contactpage.description": "Saremo lieti di ricevere ed analizzare la vostra richiesta di informazioni, proposta digitale o domanda tecnica.",
    
    // Footer
    "footer.contact": "Contatto",
    "footer.about": "Su di noi",
    "footer.copyright": "© northsouth 2024, Tutti i diritti riservati.",
    "footer.privacy": "Privacy Policy",
    "footer.cookie": "Cookie Policy",
    
    // References / Testimonials
    "references.title": "Referenze",
    "references.company": "in",
    
    // Team
    "team.title": "Il nostro team",
    "team.description": "Siamo un team multiculturale. Veniamo da diverse esperienze, portando personalità e competenze diverse nei nostri progetti. Questo è ciò che rende il nostro team così speciale.",
    
    // Tools
    "tools.title": "Strumenti",
    
    // Solutions page
    "solutions.title": "I nostri servizi",
    "solutions.division": "La divisione Northsouth Solutions offre una vasta gamma di servizi digitali per aiutare la tua azienda a crescere.",
    "solutions.paragraph1": "Dallo sviluppo di siti web e apps personalizzate, alla gestione di progetti di trasformazione digitale, al marketing digitale e alla consulenza IT, siamo qui per supportarti in ogni fase del tuo percorso digitale.",
    "solutions.paragraph2": "Siamo appassionati di tecnologia e ci impegniamo a offrire soluzioni innovative e di alta qualità che soddisfino le tue esigenze specifiche.",
    "solutions.paragraph3": "Contattaci oggi stesso per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi digitali.",

    // Navbar
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.casestudies': 'Case Studies',
    'nav.services.solutions': 'Northsouth Solutions',
    'nav.services.knowledge': 'Northsouth Knowledge',
    'nav.services.strategy': 'Northsouth Strategy',

    // Hero
    'hero.headline': 'Soluzioni digitali a 360 gradi.',
    'hero.tagline': 'Northsouth fa crescere la tua iniziativa digitale in modo da farti preservare risorse.',

    // Services
    'services.title': 'Servizi',
    'services.solutions.description': 'Sviluppiamo soluzioni digitali che rispondono alle tue esigenze.',
    'services.knowledge.description': 'Gestiamo la tua conoscenza per renderla un valore strategico.',
    'services.strategy.description': 'Analizziamo il tuo contesto per sviluppare strategie digitali.',

    // Service Tokens (actual services)
    'services.strategy.strategy': 'Strategia',
    'services.strategy.content': 'Contenuto',
    'services.knowledge.knowledge-management': 'Knowledge Mgmt',
    'services.knowledge.workshops': 'Workshops',

    // Navbar / Page Header
    "knowledge.nav.services": "I nostri servizi",
    "knowledge.hero.title": "Northsouth Knowledge",
    "knowledge.mainTitle": "La Gestione della Conoscenza",
    "knowledge.mainDescription":
      "La gestione della conoscenza è un processo sistematico di acquisizione, strutturazione, gestione e distribuzione delle conoscenze all'interno di un'organizzazione. Implica l'uso di diverse pratiche di gestione e tecnologie per facilitare la creazione, la condivisione e l'utilizzo delle conoscenze.",
    // Approach
    "knowledge.approachTitle": "Il nostro approccio",
    "knowledge.approachQuote":
      "Un Knowledge Management di successo coniuga un approccio collaborativo incentrato sull'umano, un'integrazione tecnologica intelligente guidata dai bisogni reali e uno sviluppo sostenibile delle conoscenze che valorizza il capitale umano ottimizzando la performance",
    "knowledge.approachBy": "Jonathan Wüthrich | Chief Knowledge Officer",
    // Steps
    "knowledge.steps.1.type": "Analisi preliminare",
    "knowledge.steps.1.definition":
      "Analizzare l'ambiente dell'azienda e il suo grado di maturità nella gestione delle conoscenze.",
    "knowledge.steps.1.internalTools.0": "Questionari",
    "knowledge.steps.1.internalTools.1": "Interviste",
    "knowledge.steps.1.internalTools.2": "Benchmarking",
    "knowledge.steps.2.type": "Cartografia",
    "knowledge.steps.2.definition":
      "Intervista con il team; mappatura delle conoscenze e dei processi; identificazione dei bisogni.",
    "knowledge.steps.2.internalTools.0": "Workshop",
    "knowledge.steps.2.internalTools.1": "Interviste",
    "knowledge.steps.2.internalTools.2": "Questionari",
    "knowledge.steps.2.internalTools.3": "Atelier partecipativi",
    "knowledge.steps.2.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.3.type": "Strategia",
    "knowledge.steps.3.definition":
      "Co-creazione della strategia KM e dei processi con i collaboratori; allineamento con la strategia aziendale.",
    "knowledge.steps.3.internalTools.0": "Workshop",
    "knowledge.steps.3.internalTools.1": "Atelier partecipativi",
    "knowledge.steps.3.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.4.type": "Implementazione",
    "knowledge.steps.4.definition":
      "Implementazione o adattamento dello strumento di formazione per i collaboratori",
    "knowledge.steps.4.internalTools.0": "Workshop",
    "knowledge.steps.4.externalTools": "Notion, Make, n8n, Instruments AI",
    "knowledge.steps.5.type": "Miglioramento continuo",
    "knowledge.steps.5.definition":
      "Definizione di un processo di miglioramento e aggiornamento del sistema di KM.",
    "knowledge.steps.5.internalTools.0": "Questionari",
    "knowledge.steps.5.internalTools.1": "Interviste",
    "knowledge.steps.5.internalTools.2": "Benchmarking",
    "knowledge.steps.5.externalTools": "Notion, Make, n8n, Instruments AI",
    // Features (Organizational Impact Levels)
    "knowledge.features.title": "Livelli di impatto organizzativo",
    "knowledge.features.1.type": "Strategico",
    "knowledge.features.1.description": "Ti aiutiamo a definire una visione chiara per il tuo Knowledge Management, ad allinearlo con la strategia aziendale, ad allocare le risorse necessarie e a implementare una governance adeguata.",
    "knowledge.features.1.services.0": "Visione",
    "knowledge.features.1.services.1": "Obiettivi",
    "knowledge.features.1.services.2": "KPIs",
    "knowledge.features.1.services.3": "Governance",
    "knowledge.features.1.services.4": "Cambiamento",
    "knowledge.features.2.type": "Tattico",
    "knowledge.features.2.description":
      "Ti aiutiamo a co-costruire i tuoi processi, a stimolare l'impegno del team e a implementare una formazione adeguata.",
    "knowledge.features.2.services.0": "Co-costruzione",
    "knowledge.features.2.services.1": "Processi",
    "knowledge.features.2.services.2": "Workshop",
    "knowledge.features.2.services.3": "Training",
    "knowledge.features.2.services.4": "Capitalizzazione",
    "knowledge.features.3.type": "Operativo",
    "knowledge.features.3.description":
      "Ti aiutiamo a implementare un contributo attivo alla base di conoscenza, a ottimizzare l'uso degli strumenti e a migliorare continuamente i processi.",
    "knowledge.features.3.services.0": "Contributo",
    "knowledge.features.3.services.1": "Condivisione",
    "knowledge.features.3.services.2": "Miglioramento",
    "knowledge.features.3.services.3": "Feedback",
    // CTA
    "knowledge.cta.title":
      "Pronto a ottimizzare la gestione delle conoscenze della tua organizzazione?",
    "knowledge.cta.button": "Prenota la tua consulenza",
    // Tools section
    "knowledge.tools.title": "Strumenti"
  },


  fr: {
    
    // Misc
    "level": "Niveau",
    "form.title": "Formulaire de contact",
    
    // Contact Form
    "form.fullName": "Nom Complet",
    "form.email": "Adresse Email",
    "form.message": "Votre Message",
    "form.submit": "Envoyer Message",
    "form.validation.name": "Veuillez fournir votre nom complet.",
    "form.validation.email": "Veuillez fournir votre adresse email.",
    "form.validation.email.invalid": "Veuillez fournir une adresse email valide.",
    "form.validation.message": "Veuillez entrer votre message.",
    "form.sending": "Envoi en cours...",
    "form.error": "Quelque chose s'est mal passé !",
    
    // Contact Form Page
    "contactpage.title": "Contactez-nous",
    "contactpage.description": "Nous serions heureux de recevoir et d'analyser votre demande d'information, proposition numérique ou question technique.",
    
    // Footer
    "footer.contact": "Contact",
    "footer.about": "À propos de nous",
    "footer.copyright": "© northsouth 2024, Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.cookie": "Politique des cookies",
    
    // References / Testimonials
    "references.title": "Références",
    "references.company": "chez",
    
    // Team
    "team.title": "Notre équipe",
    "team.description": "Nous sommes une équipe multiculturelle. Nous venons d'horizons divers, apportant différentes personnalités et compétences à nos projets. C'est ce qui rend notre équipe si spéciale.",
    
    // Tools
    "tools.title": "Outils",
    
    // Solutions page
    "solutions.title": "Nos services",
    "solutions.division": "La division Northsouth Solutions offre une large gamme de services numériques pour aider votre entreprise à se développer.",
    "solutions.paragraph1": "Du développement de sites web et d'applications personnalisés à la gestion de projets de transformation numérique, en passant par le marketing digital et le conseil informatique, nous sommes là pour vous accompagner à chaque étape de votre parcours numérique.",
    "solutions.paragraph2": "Nous sommes passionnés par la technologie et nous nous engageons à offrir des solutions innovantes et de haute qualité qui répondent à vos besoins spécifiques.",
    "solutions.paragraph3": "Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous aider à atteindre vos objectifs numériques.",
  
    // Navbar
    'nav.home': 'Accueil',
    'nav.team': 'Équipe',
    'nav.casestudies': 'Études de cas',
    'nav.services.solutions': 'Solutions ',
    'nav.services.knowledge': 'Northsouth Knowledge',
    'nav.services.strategy': 'Stratégie ',

    // Hero
    'hero.headline': 'Solutions digitales à 360 degrés.',
    'hero.tagline': 'Northsouth développe votre initiative numérique pour vous aider à préserver vos ressources.',

    // Services
    'services.title': 'Services',
    'services.solutions.description': 'Nous développons des solutions digitales qui répondent à vos besoins.',
    'services.knowledge.description': 'Nous gérons votre connaissance pour en faire un atout stratégique.',
    'services.strategy.description': 'Nous analysons votre contexte pour développer des stratégies digitales.',

    // Service Tokens (actual services)
    'services.strategy.strategy': 'Stratégie',
    'services.strategy.content': 'Contenu',
    'services.knowledge.knowledge-management': 'Knowledge Mgmt',
    'services.knowledge.workshops': 'Workshops',

    // Navbar / Page Header
    "knowledge.nav.services": "Nos services",
    "knowledge.hero.title": "Northsouth Knowledge",
    "knowledge.mainTitle": "La Gestion des connaissances",
    "knowledge.mainDescription":
      "La gestion des connaissances est un processus systématique d'acquisition, de structuration, de gestion et de distribution des connaissances importantes au sein d'une organisation. Elle implique l'utilisation d'une variété de pratiques de gestion et de technologies pour faciliter la création, le partage et l'utilisation des connaissances.",
    // Approach
    "knowledge.approachTitle": "Notre approche",
    "knowledge.approachQuote":
      "Un Knowledge Management réussi conjugue une approche collaborative centrée sur l'humain, une intégration technologique intelligente guidée par les besoins réels, et un développement pérenne des connaissances qui valorise le capital humain tout en optimisant la performance",
    "knowledge.approachBy": "Jonathan Wüthrich | Chief Knowledge Officer",
    // Steps
    "knowledge.steps.1.type": "Analyse préliminaire",
    "knowledge.steps.1.definition":
      "Analyser l'environnement de l'entreprise et son degré de maturité en gestion des connaissances.",
    "knowledge.steps.1.internalTools.0": "Questionnaires",
    "knowledge.steps.1.internalTools.1": "Entretiens",
    "knowledge.steps.1.internalTools.2": "Benchmarking",
    "knowledge.steps.2.type": "Cartographie",
    "knowledge.steps.2.definition":
      "Entretien avec l'équipe; cartographie des connaissances et processus; identification des besoins.",
    "knowledge.steps.2.internalTools.0": "Workshop",
    "knowledge.steps.2.internalTools.1": "Entretiens",
    "knowledge.steps.2.internalTools.2": "Questionnaires",
    "knowledge.steps.2.internalTools.3": "Ateliers participatifs",
    "knowledge.steps.2.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.3.type": "Stratégie",
    "knowledge.steps.3.definition":
      "Co-création de la stratégie KM et des processus avec les collaborateurs; alignement avec la stratégie de l'entreprise.",
    "knowledge.steps.3.internalTools.0": "Workshop",
    "knowledge.steps.3.internalTools.1": "Ateliers participatifs",
    "knowledge.steps.3.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.4.type": "Mise en oeuvre",
    "knowledge.steps.4.definition":
      "Mise en place ou adaptation de l'outil de formation des collaborateurs",
    "knowledge.steps.4.internalTools.0": "Workshop",
    "knowledge.steps.4.externalTools": "Notion, Make, n8n, Instruments AI",
    "knowledge.steps.5.type": "Amélioration continue",
    "knowledge.steps.5.definition":
      "Définition d'un processus d'amélioration et de mise à jour du système de KM.",
    "knowledge.steps.5.internalTools.0": "Questionnaires",
    "knowledge.steps.5.internalTools.1": "Entretiens",
    "knowledge.steps.5.internalTools.2": "Benchmarking",
    "knowledge.steps.5.externalTools": "Notion, Make, n8n, Instruments AI",
    // Features (Organizational Impact Levels)
    "knowledge.features.title": "Niveaux d'impact organisationnel",
    "knowledge.features.1.type": "Stratégique",
    "knowledge.features.1.description":
      "Nous vous aidons à définir une vision claire pour votre Knowledge Management, à l'aligner avec votre stratégie d'entreprise, à allouer les ressources nécessaires et à mettre en place une gouvernance adaptée.",
    "knowledge.features.1.services.0": "Vision",
    "knowledge.features.1.services.1": "Objectifs",
    "knowledge.features.1.services.2": "KPIs",
    "knowledge.features.1.services.3": "Gouvernance",
    "knowledge.features.1.services.4": "Changement",
    "knowledge.features.2.type": "Tactique",
    "knowledge.features.2.description":
      "Nous vous aidons à co-construire vos processus, à stimuler l'engagement des équipes et à mettre en place des formations adaptées.",
    "knowledge.features.2.services.0": "Co-construction",
    "knowledge.features.2.services.1": "Processus",
    "knowledge.features.2.services.2": "Workshops",
    "knowledge.features.2.services.3": "Training",
    "knowledge.features.2.services.4": "Capitalisation",
    "knowledge.features.3.type": "Opérationnel",
    "knowledge.features.3.description":
      "Nous vous aidons à mettre en place une contribution active à la base de connaissances, à optimiser l'utilisation des outils et à améliorer continuellement les processus.",
    "knowledge.features.3.services.0": "Contribution",
    "knowledge.features.3.services.1": "Partage",
    "knowledge.features.3.services.2": "Amélioration",
    "knowledge.features.3.services.3": "Feedback",
    // CTA
    "knowledge.cta.title":
      "Prêt à optimiser la gestion des connaissances de votre organisation ?",
    "knowledge.cta.button": "Réserver votre consultation",
    // Tools section
    "knowledge.tools.title": "Outils"
  },
  de: {
    // Misc
    "level": "Level",
    "form.title": "Kontaktformular",
    
    // Contact Form
    "form.fullName": "Vollständiger Name",
    "form.email": "E-Mail-Adresse",
    "form.message": "Ihre Nachricht",
    "form.submit": "Nachricht senden",
    "form.validation.name": "Bitte geben Sie Ihren vollständigen Namen an.",
    "form.validation.email": "Bitte geben Sie Ihre E-Mail-Adresse an.",
    "form.validation.email.invalid": "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    "form.validation.message": "Bitte geben Sie Ihre Nachricht ein.",
    "form.sending": "Wird gesendet...",
    "form.error": "Etwas ist schief gelaufen!",
    
    // Contact Form Page
    "contactpage.title": "Kontaktieren Sie uns",
    "contactpage.description": "Wir freuen uns, Ihre Anfrage nach Informationen, digitalen Vorschlag oder technische Frage zu erhalten und zu analysieren.",
    
    // Footer
    "footer.contact": "Kontakt",
    "footer.about": "Über uns",
    "footer.copyright": "© northsouth 2024, Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.cookie": "Cookie-Richtlinie",
    
    // References / Testimonials
    "references.title": "Referenzen",
    "references.company": "bei",
    
    // Team
    "team.title": "Unser Team",
    "team.description": "Wir sind ein multikulturelles Team. Wir kommen aus unterschiedlichen Hintergründen und bringen verschiedene Persönlichkeiten und Fähigkeiten in unsere Projekte ein. Das macht unser Team so besonders.",
    
    // Tools
    "tools.title": "Werkzeuge",
    
    // Solutions page
    "solutions.title": "Unsere Dienstleistungen",
    "solutions.division": "Die Abteilung Northsouth Solutions bietet eine breite Palette digitaler Dienstleistungen, um Ihrem Unternehmen beim Wachstum zu helfen.",
    "solutions.paragraph1": "Von der Entwicklung maßgeschneiderter Websites und Apps über die Betreuung digitaler Transformationsprojekte bis hin zu digitalem Marketing und IT-Beratung stehen wir Ihnen bei jedem Schritt Ihrer digitalen Reise zur Seite.",
    "solutions.paragraph2": "Wir sind leidenschaftlich an Technologie interessiert und verpflichten uns, innovative und hochwertige Lösungen anzubieten, die Ihren spezifischen Anforderungen entsprechen.",
    "solutions.paragraph3": "Kontaktieren Sie uns noch heute, um zu erfahren, wie wir Ihnen helfen können, Ihre digitalen Ziele zu erreichen.",

    // Navbar
    'nav.home': 'Startseite',
    'nav.team': 'Team',
    'nav.casestudies': 'Fallstudien',
    'nav.services.solutions': 'Northsouth Solutions',
    'nav.services.knowledge': 'Northsouth Knowledge',
    'nav.services.strategy': 'Northsouth Strategie',

    // Hero
    'hero.headline': 'Digitale Lösungen in 360 Grad.',
    'hero.tagline': 'Northsouth fördert Ihre digitale Initiative, um Ihnen zu helfen, Ressourcen zu schonen.',

    // Services
    'services.title': 'Dienstleistungen',
    'services.solutions.description': 'Wir entwickeln digitale Lösungen, die Ihren Bedürfnissen gerecht werden.',
    'services.knowledge.description': 'Wir verwalten Ihr Wissen, um es zu einem strategischen Wert zu machen.',
    'services.strategy.description': 'Wir analysieren Ihr Umfeld, um digitale Strategien zu entwickeln.',

    // Service Tokens (actual services)
    'services.strategy.strategy': 'Strategie',
    'services.strategy.content': 'Inhalt',
    'services.knowledge.knowledge-management': 'Wissensmanagement',
    'services.knowledge.workshops': 'Workshops',

    // Navbar / Page Header
    "knowledge.nav.services": "Unsere Dienstleistungen",
    "knowledge.hero.title": "Northsouth Wissen",
    "knowledge.mainTitle": "Wissensmanagement",
    "knowledge.mainDescription":
      "Wissensmanagement ist ein systematischer Prozess der Akquisition, Strukturierung, Verwaltung und Verteilung von Wissen innerhalb einer Organisation. Es umfasst den Einsatz verschiedener Managementpraktiken und Technologien zur Förderung der Erstellung, des Teilens und der Nutzung von Wissen.",
    // Approach
    "knowledge.approachTitle": "Unser Ansatz",
    "knowledge.approachQuote":
      "Erfolgreiches Wissensmanagement vereint einen kollaborativen, menschenzentrierten Ansatz, eine intelligente technologische Integration, die durch reale Bedürfnisse geleitet wird, und eine nachhaltige Entwicklung von Wissen, das das Humankapital stärkt und die Leistung optimiert.",
    "knowledge.approachBy": "Jonathan Wüthrich | Chief Knowledge Officer",
    // Steps
    "knowledge.steps.1.type": "Vorläufige Analyse",
    "knowledge.steps.1.definition":
      "Analyse des Unternehmensumfelds und seines Reifegrads im Wissensmanagement.",
    "knowledge.steps.1.internalTools.0": "Umfragen",
    "knowledge.steps.1.internalTools.1": "Interviews",
    "knowledge.steps.1.internalTools.2": "Benchmarking",
    "knowledge.steps.2.type": "Kartierung",
    "knowledge.steps.2.definition":
      "Interview mit dem Team; Kartierung von Wissen und Prozessen; Identifikation der Bedürfnisse.",
    "knowledge.steps.2.internalTools.0": "Workshop",
    "knowledge.steps.2.internalTools.1": "Interviews",
    "knowledge.steps.2.internalTools.2": "Umfragen",
    "knowledge.steps.2.internalTools.3": "Partizipative Workshops",
    "knowledge.steps.2.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.3.type": "Strategie",
    "knowledge.steps.3.definition":
      "Co-Kreation der KM-Strategie und Prozesse mit den Mitarbeitenden; Ausrichtung auf die Unternehmensstrategie.",
    "knowledge.steps.3.internalTools.0": "Workshop",
    "knowledge.steps.3.internalTools.1": "Partizipative Workshops",
    "knowledge.steps.3.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.4.type": "Implementierung",
    "knowledge.steps.4.definition":
      "Implementierung oder Anpassung des Mitarbeiterschulungswerkzeugs",
    "knowledge.steps.4.internalTools.0": "Workshop",
    "knowledge.steps.4.externalTools": "Notion, Make, n8n, Instruments AI",
    "knowledge.steps.5.type": "Kontinuierliche Verbesserung",
    "knowledge.steps.5.definition":
      "Definition eines Prozesses zur Verbesserung und Aktualisierung des KM-Systems.",
    "knowledge.steps.5.internalTools.0": "Umfragen",
    "knowledge.steps.5.internalTools.1": "Interviews",
    "knowledge.steps.5.internalTools.2": "Benchmarking",
    "knowledge.steps.5.externalTools": "Notion, Make, n8n, Instruments AI",
    // Features (Organizational Impact Levels)
    "knowledge.features.title": "Organisatorische Auswirkungen",
    "knowledge.features.1.type": "Strategisch",
    "knowledge.features.1.description": "Wir helfen Ihnen, eine klare Vision für Ihr Wissensmanagement zu definieren, es mit der Unternehmensstrategie auszurichten, die notwendigen Ressourcen zuzuweisen und eine angemessene Governance umzusetzen.",
    "knowledge.features.1.services.0": "Vision",
    "knowledge.features.1.services.1": "Ziele",
    "knowledge.features.1.services.2": "KPIs",
    "knowledge.features.1.services.3": "Governance",
    "knowledge.features.1.services.4": "Veränderung",
    "knowledge.features.2.type": "Taktisch",
    "knowledge.features.2.description":
      "Wir helfen Ihnen, Ihre Prozesse mitzugestalten, das Teamengagement zu fördern und eine angemessene Schulung umzusetzen.",
    "knowledge.features.2.services.0": "Ko-Kreation",
    "knowledge.features.2.services.1": "Prozesse",
    "knowledge.features.2.services.2": "Workshops",
    "knowledge.features.2.services.3": "Training",
    "knowledge.features.2.services.4": "Kapitalisierung",
    "knowledge.features.3.type": "Operativ",
    "knowledge.features.3.description":
      "Wir helfen Ihnen, einen aktiven Beitrag zur Wissensdatenbank zu leisten, den Einsatz der Tools zu optimieren und die Prozesse kontinuierlich zu verbessern.",
    "knowledge.features.3.services.0": "Beitrag",
    "knowledge.features.3.services.1": "Teilen",
    "knowledge.features.3.services.2": "Verbesserung",
    "knowledge.features.3.services.3": "Feedback",
    // CTA
    "knowledge.cta.title":
      "Bereit, das Wissensmanagement Ihrer Organisation zu optimieren?",
    "knowledge.cta.button": "Buchen Sie Ihre Beratung",
    // Tools section
    "knowledge.tools.title": "Tools"
  },
  en: {
    // Misc
    "level": "Level",
    "form.title": "Contact Form",
    
    // Contact Form
    "form.fullName": "Full Name",
    "form.email": "Email Address",
    "form.message": "Your Message",
    "form.submit": "Send Message",
    "form.validation.name": "Please provide your full name.",
    "form.validation.email": "Please provide your email address.",
    "form.validation.email.invalid": "Please provide a valid email address.",
    "form.validation.message": "Please enter your message.",
    "form.sending": "Sending...",
    "form.error": "Something went wrong!",
    
    // Contact Form Page
    "contactpage.title": "Contact Us",
    "contactpage.description": "We would be happy to receive and analyze your request for information, digital proposal, or technical question.",
    
    // Footer
    "footer.contact": "Contact",
    "footer.about": "About Us",
    "footer.copyright": "© northsouth 2024, All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.cookie": "Cookie Policy",
    
    // References / Testimonials
    "references.title": "References",
    "references.company": "at",
    
    // Team
    "team.title": "Our Team",
    "team.description": "We are a multicultural team. We come from diverse backgrounds, bringing different personalities and skills to our projects. That's what makes our team so special.",
    
    // Tools
    "tools.title": "Tools",
    
    // Solutions page
    "solutions.title": "Our services",
    "solutions.division": "The Northsouth Solutions division offers a wide range of digital services to help your business grow.",
    "solutions.paragraph1": "From developing custom websites and apps, to managing digital transformation projects, digital marketing and IT consulting, we are here to support you in every step of your digital journey.",
    "solutions.paragraph2": "We are passionate about technology and committed to offering innovative and high-quality solutions that meet your specific needs.",
    "solutions.paragraph3": "Contact us today to discover how we can help you achieve your digital goals.",

    // Navbar
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.services.solutions': 'Northsouth Solutions',
    'nav.services.knowledge': 'Northsouth Knowledge',
    'nav.services.strategy': 'Northsouth Strategy',

    // Hero
    'hero.headline': '360-degree digital solutions.',
    'hero.tagline': 'Northsouth helps your digital initiative grow while preserving resources.',

    // Services
    'services.title': 'Services',
    'services.solutions.description': 'We develop digital solutions that meet your needs.',
    'services.knowledge.description': 'We manage your knowledge to make it a strategic asset.',
    'services.strategy.description': 'We analyze your context to develop digital strategies.',

    // Service Tokens (actual services)
    'services.strategy.strategy': 'Strategy',
    'services.strategy.content': 'Content',
    'services.knowledge.knowledge-management': 'Knowledge Mgmt',
    'services.knowledge.workshops': 'Workshops',

    // Navbar / Page Header
    "knowledge.nav.services": "Our Services",
    "knowledge.hero.title": "Northsouth Knowledge",
    "knowledge.mainTitle": "Knowledge Management",
    "knowledge.mainDescription":
      "Knowledge management is a systematic process of acquiring, structuring, managing, and distributing knowledge within an organization. It involves using various management practices and technologies to facilitate the creation, sharing, and use of knowledge.",
    // Approach
    "knowledge.approachTitle": "Our Approach",
    "knowledge.approachQuote":
      "Successful Knowledge Management combines a human-centered collaborative approach, intelligent technology integration guided by real needs, and sustainable knowledge development that enhances human capital while optimizing performance.",
    "knowledge.approachBy": "Jonathan Wüthrich | Chief Knowledge Officer",
    // Steps
    "knowledge.steps.1.type": "Preliminary Analysis",
    "knowledge.steps.1.definition":
      "Analyze the company's environment and its knowledge management maturity level.",
    "knowledge.steps.1.internalTools.0": "Questionnaires",
    "knowledge.steps.1.internalTools.1": "Interviews",
    "knowledge.steps.1.internalTools.2": "Benchmarking",
    "knowledge.steps.2.type": "Mapping",
    "knowledge.steps.2.definition":
      "Interview with the team; mapping knowledge and processes; identifying needs.",
    "knowledge.steps.2.internalTools.0": "Workshop",
    "knowledge.steps.2.internalTools.1": "Interviews",
    "knowledge.steps.2.internalTools.2": "Questionnaires",
    "knowledge.steps.2.internalTools.3": "Participatory workshops",
    "knowledge.steps.2.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.3.type": "Strategy",
    "knowledge.steps.3.definition":
      "Co-creation of KM strategy and processes with employees; alignment with company strategy.",
    "knowledge.steps.3.internalTools.0": "Workshop",
    "knowledge.steps.3.internalTools.1": "Participatory workshops",
    "knowledge.steps.3.externalTools": "Whimsical, Tally.so, Notion",
    "knowledge.steps.4.type": "Implementation",
    "knowledge.steps.4.definition":
      "Implementation or adaptation of the employee training tool",
    "knowledge.steps.4.internalTools.0": "Workshop",
    "knowledge.steps.4.externalTools": "Notion, Make, n8n, Instruments AI",
    "knowledge.steps.5.type": "Continuous Improvement",
    "knowledge.steps.5.definition":
      "Definition of a process for improving and updating the KM system.",
    "knowledge.steps.5.internalTools.0": "Questionnaires",
    "knowledge.steps.5.internalTools.1": "Interviews",
    "knowledge.steps.5.internalTools.2": "Benchmarking",
    "knowledge.steps.5.externalTools": "Notion, Make, n8n, Instruments AI",
    // Features (Organizational Impact Levels)
    "knowledge.features.title": "Organizational Impact Levels",
    "knowledge.features.1.type": "Strategic",
    "knowledge.features.1.description": "We help you define a clear vision for your Knowledge Management, align it with your business strategy, allocate the necessary resources, and implement appropriate governance.",
    "knowledge.features.1.services.0": "Vision",
    "knowledge.features.1.services.1": "Objectives",
    "knowledge.features.1.services.2": "KPIs",
    "knowledge.features.1.services.3": "Governance",
    "knowledge.features.1.services.4": "Change",
    "knowledge.features.2.type": "Tactical",
    "knowledge.features.2.description":
      "We help you co-construct your processes, stimulate team engagement, and implement appropriate training.",
    "knowledge.features.2.services.0": "Co-construction",
    "knowledge.features.2.services.1": "Processes",
    "knowledge.features.2.services.2": "Workshops",
    "knowledge.features.2.services.3": "Training",
    "knowledge.features.2.services.4": "Capitalization",
    "knowledge.features.3.type": "Operational",
    "knowledge.features.3.description":
      "We help you implement active contribution to the knowledge base, optimize the use of tools, and continuously improve processes.",
    "knowledge.features.3.services.0": "Contribution",
    "knowledge.features.3.services.1": "Sharing",
    "knowledge.features.3.services.2": "Improvement",
    "knowledge.features.3.services.3": "Feedback",
    // CTA
    "knowledge.cta.title":
      "Ready to optimize your organization's knowledge management?",
    "knowledge.cta.button": "Book Your Consultation",
    // Tools section
    "knowledge.tools.title": "Tools"
  }
};

// Case Studies
export const caseStudies = {
  it: [
    {
      company: "Caffé Badilatti",
      services: ["UX/UI design", "E-Commmerce"],
      description:
        "Eseguito un rinnovamento UX/UI della piattaforma e-commerce per un marchio di caffè svizzero premium. Allineato il design con l'identità del marchio e affrontato le esigenze specifiche degli utenti.",
      picture: "badilatti",
    },
    {
      company: "DPStudio",
      services: ["UX/UI design", "Visual identity"],
      description:
        "Sviluppato un nuovo funnel e una landing page SaaS per softwaregestionale.ch, una piattaforma di gestione software che serve piccole e medie imprese nella Svizzera italiana.",
      picture: "software",
    },
    {
      company: "Farmatouch",
      services: ["soluzioni", "conoscenza"],
      description:
        "Progettata la piattaforma di acquisto di farmaci per un'app farmaceutica, semplificando l'interfaccia, aggiornando la tecnologia e migliorando l'esperienza utente.",
      picture: "farmatouch",
    },
    {
      company: "Naranja",
      services: ["soluzioni", "conoscenza"],
      description:
        "Progettato un sito e-commerce per una banca innovativa, migliorando la navigazione, stabilendo una nuova identità visiva, migliorando l'esperienza utente e semplificando il checkout con migliori opzioni di spedizione e pagamento.",
      picture: "naranja",
    },
    {
      company: "Sepoy",
      services: ["soluzioni", "conoscenza"],
      description:
        "Rinnovato il sito web per un'azienda specializzata in interfacce Magento scalabili ottimizzate per la conversione. Migliorata l'esperienza utente e mostrati i servizi del cliente con un design moderno.",
      picture: "sepoy",
    },
    {
      company: "Whirlpool",
      services: ["soluzioni", "conoscenza"],
      description:
        "Ridisegnato il sito e-commerce per un leader globale negli elettrodomestici. Migliorata la navigazione utente, semplificati i flussi di lavoro e ottimizzati i processi di checkout.",
      picture: "whirlpool",
    },
    {
      company: "GMPro Gmbh",
      services: ["soluzioni", "strategia"],
      description:
        "Fornita una soluzione e-commerce completa con ERP integrato, identità del marchio completa e design del prodotto (AutoCAD) per un rivenditore di attrezzature per pizza di alta qualità entro 50 giorni.",
      picture: "gmpro",
    },
    {
      company: "Scuola Guida Lugano",
      services: ["soluzioni", "strategia"],
      description:
        "Ridisegnato il sito web, il logo e il funnel dei social media per una scuola guida in Svizzera. Integrata una nuova piattaforma di prenotazione per semplificare le interazioni degli utenti.",
      picture: "scuolaguida",
    },
  ],
  en: [
    {
      company: "Caffé Badilatti",
      services: ["UX/UI design", "E-Commmerce"],
      description:
        "Performed a UX/UI overhaul of the e-commerce platform for a premium Swiss coffee brand. Aligned the design with brand identity and addressed specific user needs.",
      picture: "badilatti",
    },
    {
      company: "DPStudio",
      services: ["UX/UI design", "Visual identity"],
      description:
        "Developed a new funnel and SaaS landing page for softwaregestionale.ch, a software management platform serving small and medium enterprises in Italian-speaking Switzerland.",
      picture: "software",
    },
    {
      company: "Farmatouch",
      services: ["solutions", "knowledge"],
      description:
        "Designed the medication purchasing platform for a pharmaceutical app, simplifying the interface, updating technology, and enhancing user experience.",
      picture: "farmatouch",
    },
    {
      company: "Naranja",
      services: ["solutions", "knowledge"],
      description:
        "Designed an e-commerce website for an innovative bank, improving navigation, establishing a new visual identity, enhancing user experience, and streamlining checkout with better shipping and payment options.",
      picture: "naranja",
    },
    {
      company: "Sepoy",
      services: ["solutions", "knowledge"],
      description:
        "Revamped the website for a company specializing in scalable Magento interfaces optimized for conversion. Improved user experience and showcased the client's services with a modern design.",
      picture: "sepoy",
    },
    {
      company: "Whirlpool",
      services: ["solutions", "knowledge"],
      description:
        "Redesigned the e-commerce website for a global leader in home appliances. Enhanced user navigation, streamlined workflows, and optimized checkout processes.",
      picture: "whirlpool",
    },
    {
      company: "GMPro Gmbh",
      services: ["solutions", "strategy"],
      description:
        "Delivered a comprehensive e-commerce solution with integrated ERP, complete brand identity, and product design (AutoCAD) for a high-quality pizza equipment retailer within 50 days.",
      picture: "gmpro",
    },
    {
      company: "Scuola Guida Lugano",
      services: ["solutions", "strategy"],
      description:
        "Redesigned the website, logo, and social media funnel for a driving school in Switzerland. Integrated a new booking platform to streamline user interactions.",
      picture: "scuolaguida",
    },
  ],
  fr: [
    {
      company: "Caffé Badilatti",
      services: ["UX/UI design", "E-Commerce"],
      description:
        "Réalisation d'une refonte UX/UI de la plateforme e-commerce pour une marque de café suisse haut de gamme. Alignement du design avec l'identité de la marque et réponse aux besoins spécifiques des utilisateurs.",
      picture: "badilatti",
    },
    {
      company: "DPStudio",
      services: ["UX/UI design", "Identité visuelle"],
      description:
        "Développement d'un nouveau funnel et d'une landing page SaaS pour softwaregestionale.ch, une plateforme de gestion de logiciels desservant les petites et moyennes entreprises de la Suisse italophone.",
      picture: "software",
    },
    {
      company: "Farmatouch",
      services: ["solutions", "knowledge"],
      description:
        "Conception de la plateforme d'achat de médicaments pour une application pharmaceutique, simplifiant l'interface, mettant à jour la technologie et améliorant l'expérience utilisateur.",
      picture: "farmatouch",
    },
    {
      company: "Naranja",
      services: ["solutions", "knowledge"],
      description:
        "Conception d'un site e-commerce pour une banque innovante, améliorant la navigation, établissant une nouvelle identité visuelle, améliorant l'expérience utilisateur et simplifiant le processus de paiement avec de meilleures options d'expédition et de paiement.",
      picture: "naranja",
    },
    {
      company: "Sepoy",
      services: ["solutions", "knowledge"],
      description:
        "Refonte du site web pour une entreprise spécialisée dans les interfaces Magento évolutives optimisées pour la conversion. Amélioration de l'expérience utilisateur et mise en valeur des services du client avec un design moderne.",
      picture: "sepoy",
    },
    {
      company: "Whirlpool",
      services: ["solutions", "knowledge"],
      description:
        "Refonte du site e-commerce pour un leader mondial de l'électroménager. Amélioration de la navigation utilisateur, simplification des flux de travail et optimisation des processus de paiement.",
      picture: "whirlpool",
    },
    {
      company: "GMPro Gmbh",
      services: ["solutions", "stratégie"],
      description:
        "Fourniture d'une solution e-commerce complète avec ERP intégré, identité de marque complète et conception de produits (AutoCAD) pour un détaillant d'équipements de pizza de haute qualité en 50 jours.",
      picture: "gmpro",
    },
    {
      company: "Scuola Guida Lugano",
      services: ["solutions", "stratégie"],
      description:
        "Refonte du site web, du logo et du funnel de médias sociaux pour une auto-école en Suisse. Intégration d'une nouvelle plateforme de réservation pour simplifier les interactions des utilisateurs.",
      picture: "scuolaguida",
    },
  ],
  de: [
    {
      company: "Caffé Badilatti",
      services: ["UX/UI Design", "E-Commerce"],
      description:
        "Durchführung einer UX/UI-Überarbeitung der E-Commerce-Plattform für eine Premium-Schweizer Kaffeemarke. Abstimmung des Designs mit der Markenidentität und Berücksichtigung spezifischer Benutzerbedürfnisse.",
      picture: "badilatti",
    },
    {
      company: "DPStudio",
      services: ["UX/UI Design", "Visuelle Identität"],
      description:
        "Entwicklung eines neuen Funnels und einer SaaS-Landingpage für softwaregestionale.ch, eine Software-Management-Plattform für kleine und mittlere Unternehmen in der italienischsprachigen Schweiz.",
      picture: "software",
    },
    {
      company: "Farmatouch",
      services: ["Lösungen", "Wissen"],
      description:
        "Gestaltung der Medikamentenkaufplattform für eine Pharma-App, Vereinfachung der Benutzeroberfläche, Aktualisierung der Technologie und Verbesserung der Benutzererfahrung.",
      picture: "farmatouch",
    },
    {
      company: "Naranja",
      services: ["Lösungen", "Wissen"],
      description:
        "Gestaltung einer E-Commerce-Website für eine innovative Bank, Verbesserung der Navigation, Etablierung einer neuen visuellen Identität, Verbesserung der Benutzererfahrung und Vereinfachung des Checkout-Prozesses mit besseren Versand- und Zahlungsoptionen.",
      picture: "naranja",
    },
    {
      company: "Sepoy",
      services: ["Lösungen", "Wissen"],
      description:
        "Überarbeitung der Website für ein Unternehmen, das auf skalierbare Magento-Schnittstellen spezialisiert ist, die für Conversion optimiert sind. Verbesserung der Benutzererfahrung und Präsentation der Dienstleistungen des Kunden mit einem modernen Design.",
      picture: "sepoy",
    },
    {
      company: "Whirlpool",
      services: ["Lösungen", "Wissen"],
      description:
        "Neugestaltung der E-Commerce-Website für einen globalen Marktführer im Bereich Haushaltsgeräte. Verbesserung der Benutzernavigation, Vereinfachung der Arbeitsabläufe und Optimierung der Checkout-Prozesse.",
      picture: "whirlpool",
    },
    {
      company: "GMPro Gmbh",
      services: ["Lösungen", "Strategie"],
      description:
        "Bereitstellung einer umfassenden E-Commerce-Lösung mit integriertem ERP, vollständiger Markenidentität und Produktdesign (AutoCAD) für einen Händler von hochwertigen Pizzageräten innerhalb von 50 Tagen.",
      picture: "gmpro",
    },
    {
      company: "Scuola Guida Lugano",
      services: ["w", "Strategie"],
      description:
        "Neugestaltung der Website, des Logos und des Social-Media-Funnels für eine Fahrschule in der Schweiz. Integration einer neuen Buchungsplattform zur Vereinfachung der Benutzerinteraktionen.",
      picture: "scuolaguida",
    },
  ],
};
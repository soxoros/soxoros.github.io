// ── LANGUAGE / TRANSLATIONS ────────────────────────────────────
const translations = {
  hu: {
    page_title: 'Magyar Virág — Portfólió',
    nav_home: 'Főoldal',
    nav_research: 'Kutatás',
    nav_contact: 'Kapcsolat',
    aria_theme_toggle: 'Téma váltása',
    aria_menu: 'Menü',
    aria_back_to_top: 'Vissza a tetejére',
    aria_modal_close: 'Bezárás',

    doc_cv_short: 'Önéletrajz',
    doc_ml_short: 'Motivációs levél',
    hero_motto: '„A részletekben értem meg az embert.”',
    hero_role: 'Pszichológia hallgató &nbsp;·&nbsp; Debreceni Egyetem<br>·&nbsp; Diákmunka pályázó',
    hero_bio: 'Precíz, elemző és empatikus gondolkodású pszichológia hallgató. Tizenhárom év versenyszerű szertornázás megtanított arra, hogy az eredmény kitartó, fegyelmezett munkából születik. Ugyanezt az értékrendet viszem a tudományba és a mindennapjaimba.',
    pill_english: 'C1 Angol',
    pill_champion: 'Magyar bajnok',
    pill_analytical: 'Elemző',
    pill_precise: 'Precíz',
    pill_empathetic: 'Empatikus',
    hero_cta: 'Kutatási portfólió →',
    hero_scroll: 'Görgess',

    edu_label: 'Háttér',
    edu_title: 'Tanulmányok &<br><em>Eredmények</em>',
    edu_col_education: 'Oktatás',
    edu_item1_sub: 'Pszichológia BA',
    edu_item2_sub: 'Gimnáziumi érettségi · emelt angol, történelem',
    edu_item3_sub: 'Képzőművészeti képzés',
    edu_col_achievements: 'Eredmények',
    ach_item1_title: 'C1 Felsőfokú angol',
    ach_item1_sub: 'Állami nyelvvizsga',
    ach_item2_title: 'Emelt szintű történelem érettségi',
    ach_item3_title: 'Emelt szintű angol érettségi (B2)',
    ach_item4_title: '🥇 Magyar Bajnok — Gerenda',
    ach_item4_sub: 'Ifi II. osztály, Női torna',
    ach_item5_title: '🥇 Magyar Bajnok — Talaj',
    ach_item5_sub: 'Serdülő II. osztály, Női torna',
    ach_item6_title: 'Jó tanuló – Jó sportoló díj',

    skills_label: 'Kompetenciák',
    skills_title: 'Képességek &<br><em>Készségek</em>',
    skill1_title: 'Elemzés & Precizitás',
    skill1_body: 'Analitikus gondolkodásmód, rendszerező készség, részletorientált munkavégzés. Pszichológiai kutatáshoz és adatértelmezéshez is alkalmazható.',
    skill2_title: 'Empátia & Kommunikáció',
    skill2_body: 'Figyelmes hallgatóság, megértő, illemtudó kommunikáció. Interperszonális kapcsolatokban mély empátia, emberi helyzetekben türelmes jelenlét.',
    skill3_title: 'Kitartás & Fegyelem',
    skill3_body: '13 év versenyszerű sport megalapozta a munkamorált: hosszú távú célokra is képes fókuszálni, nem riad vissza az ismétléstől és az aprómunkától.',
    skill4_title: 'Nyelvek',
    skill4_body: 'Magyar anyanyelvű. Angol C1 szintű felsőfokú, tudományos szövegek olvasása és írása szintjén is. Aktívan fejleszti szakmai szókincsét.',

    docs_label: 'Dokumentumok',
    docs_title: 'Letölthető<br><em>Anyagok</em>',
    doccard1_title: 'Szakmai önéletrajz',
    doccard1_desc: 'Teljes körű CV — tanulmányok, eredmények',
    doccard2_title: 'Motivációs levél',
    doccard2_desc: 'Általános sablon — diákmunka pályázatokhoz testre szabható',
    doccard3_title: 'Kutatási napló',
    doccard3_desc: 'Pszichológiai kutatási részvétel dokumentációja — amint elkészül publikálható anyag frissülni fog',
    doc_download: 'Letöltés',
    doc_view: 'Megtekintés →',

    contact_label: 'Kapcsolat',
    contact_title: 'Lépj kapcsolatba<br><em>velem</em>',
    contact_phone_btn: 'Telefonszám kérése',

    footer_copy: '© 2026 · Magyar Virág · Portfólió',

    modal_title: 'Telefonszám<br><em>kérése</em>',
    modal_desc: 'A telefonszámomat adatvédelmi okokból nem tüntetem fel nyilvánosan. Küldj egy rövid emailt, és haladéktalanul visszajelzek!',
    modal_email_btn: 'Email küldése',
    modal_note: 'Az emailt a saját leveleződ nyitja meg — adataid biztonságban maradnak.',

    mailto_subject: 'Telefonszám kérés — Magyar Virág portfólió',
    mailto_body: 'Kedves Virág!\n\nA portfóliódon keresztül találtam meg az elérhetőségedet.\nSzeretnék felvenni Veled a személyes kapcsolatot — kérlek, oszd meg velem telefonszámodat.\n\nKöszönöm!\n'
  },

  en: {
    page_title: 'Virág Magyar — Portfolio',
    nav_home: 'Home',
    nav_research: 'Research',
    nav_contact: 'Contact',
    aria_theme_toggle: 'Toggle theme',
    aria_menu: 'Menu',
    aria_back_to_top: 'Back to top',
    aria_modal_close: 'Close',

    doc_cv_short: 'CV',
    doc_ml_short: 'Cover letter',
    hero_motto: '"I understand people through their details."',
    hero_role: 'Psychology student &nbsp;·&nbsp; University of Debrecen<br>·&nbsp; Seeking student work',
    hero_bio: 'A precise, analytical and empathetic psychology student. Thirteen years of competitive gymnastics taught me that results come from persistent, disciplined work — I bring the same values into science and into my everyday life.',
    pill_english: 'C1 English',
    pill_champion: 'Hungarian Champion',
    pill_analytical: 'Analytical',
    pill_precise: 'Precise',
    pill_empathetic: 'Empathetic',
    hero_cta: 'Research portfolio →',
    hero_scroll: 'Scroll',

    edu_label: 'Background',
    edu_title: 'Education &<br><em>Achievements</em>',
    edu_col_education: 'Education',
    edu_item1_sub: 'Psychology BA',
    edu_item2_sub: 'High school diploma · advanced English, History',
    edu_item3_sub: 'Fine arts training',
    edu_col_achievements: 'Achievements',
    ach_item1_title: 'C1 Advanced English',
    ach_item1_sub: 'State language exam',
    ach_item2_title: 'Advanced-level History exam',
    ach_item3_title: 'Advanced-level English exam (B2)',
    ach_item4_title: '🥇 Hungarian Champion — Balance Beam',
    ach_item4_sub: 'Junior II class, Women\'s gymnastics',
    ach_item5_title: '🥇 Hungarian Champion — Floor',
    ach_item5_sub: 'Youth II class, Women\'s gymnastics',
    ach_item6_title: 'Good Student – Good Athlete Award',

    skills_label: 'Competencies',
    skills_title: 'Abilities &<br><em>Skills</em>',
    skill1_title: 'Analysis & Precision',
    skill1_body: 'Analytical mindset, strong organizational skills, detail-oriented work. Also applicable to psychological research and data interpretation.',
    skill2_title: 'Empathy & Communication',
    skill2_body: 'Attentive listening, understanding and courteous communication. Deep empathy in interpersonal relationships, patient presence in human situations.',
    skill3_title: 'Persistence & Discipline',
    skill3_body: '13 years of competitive sport built a strong work ethic: able to focus on long-term goals, unfazed by repetition or detailed work.',
    skill4_title: 'Languages',
    skill4_body: 'Native Hungarian speaker. Advanced C1-level English, including reading and writing academic texts. Actively growing her professional vocabulary.',

    docs_label: 'Documents',
    docs_title: 'Downloadable<br><em>Materials</em>',
    doccard1_title: 'Professional CV',
    doccard1_desc: 'Full CV — education, achievements',
    doccard2_title: 'Cover letter',
    doccard2_desc: 'General template — customizable for student job applications',
    doccard3_title: 'Research journal',
    doccard3_desc: 'Documentation of participation in psychological research — will be updated once publishable material is available',
    doc_download: 'Download',
    doc_view: 'View →',

    contact_label: 'Contact',
    contact_title: 'Get in touch<br><em>with me</em>',
    contact_phone_btn: 'Request phone number',

    footer_copy: '© 2026 · Virág Magyar · Portfolio',

    modal_title: 'Phone number<br><em>request</em>',
    modal_desc: 'For privacy reasons I don\'t list my phone number publicly. Send me a short email and I\'ll get back to you right away!',
    modal_email_btn: 'Send email',
    modal_note: 'The email opens in your own mail app — your data stays safe.',

    mailto_subject: 'Phone number request — Virág Magyar portfolio',
    mailto_body: 'Dear Virág,\n\nI found your contact details through your portfolio.\nI would like to get in touch with you personally — could you please share your phone number?\n\nThank you!\n'
  },

  de: {
    page_title: 'Virág Magyar — Portfolio',
    nav_home: 'Startseite',
    nav_research: 'Forschung',
    nav_contact: 'Kontakt',
    aria_theme_toggle: 'Thema wechseln',
    aria_menu: 'Menü',
    aria_back_to_top: 'Nach oben',
    aria_modal_close: 'Schließen',

    doc_cv_short: 'Lebenslauf',
    doc_ml_short: 'Motivationsschreiben',
    hero_motto: '„In den Details verstehe ich den Menschen.“',
    hero_role: 'Psychologiestudentin &nbsp;·&nbsp; Universität Debrecen<br>·&nbsp; Auf der Suche nach einem Studentenjob',
    hero_bio: 'Eine präzise, analytisch und empathisch denkende Psychologiestudentin. Dreizehn Jahre Wettkampfturnen haben mir gezeigt, dass Ergebnisse aus beharrlicher, disziplinierter Arbeit entstehen — genau diese Werte bringe ich in die Wissenschaft und in meinen Alltag ein.',
    pill_english: 'C1 Englisch',
    pill_champion: 'Ungarische Meisterin',
    pill_analytical: 'Analytisch',
    pill_precise: 'Präzise',
    pill_empathetic: 'Empathisch',
    hero_cta: 'Forschungsportfolio →',
    hero_scroll: 'Scrollen',

    edu_label: 'Hintergrund',
    edu_title: 'Ausbildung &<br><em>Erfolge</em>',
    edu_col_education: 'Ausbildung',
    edu_item1_sub: 'Psychologie BA',
    edu_item2_sub: 'Abitur · Erweitertes Englisch, Geschichte',
    edu_item3_sub: 'Ausbildung in bildender Kunst',
    edu_col_achievements: 'Erfolge',
    ach_item1_title: 'C1 Fortgeschrittenes Englisch',
    ach_item1_sub: 'Staatliche Sprachprüfung',
    ach_item2_title: 'Abitur Geschichte auf erhöhtem Niveau',
    ach_item3_title: 'Abitur Englisch auf erhöhtem Niveau (B2)',
    ach_item4_title: '🥇 Ungarische Meisterin — Schwebebalken',
    ach_item4_sub: 'Jugendklasse II, Damenturnen',
    ach_item5_title: '🥇 Ungarische Meisterin — Boden',
    ach_item5_sub: 'Schülerklasse II, Damenturnen',
    ach_item6_title: 'Auszeichnung „Guter Schüler – Guter Sportler“',

    skills_label: 'Kompetenzen',
    skills_title: 'Fähigkeiten &<br><em>Kompetenzen</em>',
    skill1_title: 'Analyse & Präzision',
    skill1_body: 'Analytisches Denken, ausgeprägte Organisationsfähigkeit, detailorientiertes Arbeiten. Auch für psychologische Forschung und Datenauswertung einsetzbar.',
    skill2_title: 'Empathie & Kommunikation',
    skill2_body: 'Aufmerksames Zuhören, verständnisvolle und höfliche Kommunikation. Tiefe Empathie in zwischenmenschlichen Beziehungen, geduldige Präsenz in menschlichen Situationen.',
    skill3_title: 'Ausdauer & Disziplin',
    skill3_body: '13 Jahre Wettkampfsport haben die Arbeitsmoral geprägt: fokussiert auf langfristige Ziele, schreckt weder vor Wiederholung noch vor Detailarbeit zurück.',
    skill4_title: 'Sprachen',
    skill4_body: 'Ungarische Muttersprachlerin. Englisch auf C1-Niveau, auch beim Lesen und Verfassen wissenschaftlicher Texte. Erweitert aktiv ihren Fachwortschatz.',

    docs_label: 'Dokumente',
    docs_title: 'Herunterladbare<br><em>Materialien</em>',
    doccard1_title: 'Beruflicher Lebenslauf',
    doccard1_desc: 'Vollständiger Lebenslauf — Ausbildung, Erfolge',
    doccard2_title: 'Motivationsschreiben',
    doccard2_desc: 'Allgemeine Vorlage — anpassbar für Bewerbungen um Studentenjobs',
    doccard3_title: 'Forschungstagebuch',
    doccard3_desc: 'Dokumentation der Teilnahme an psychologischer Forschung — wird aktualisiert, sobald veröffentlichbares Material vorliegt',
    doc_download: 'Herunterladen',
    doc_view: 'Ansehen →',

    contact_label: 'Kontakt',
    contact_title: 'Nimm Kontakt<br><em>mit mir auf</em>',
    contact_phone_btn: 'Telefonnummer anfragen',

    footer_copy: '© 2026 · Virág Magyar · Portfolio',

    modal_title: 'Telefonnummer<br><em>anfragen</em>',
    modal_desc: 'Aus Datenschutzgründen gebe ich meine Telefonnummer nicht öffentlich an. Schick mir eine kurze E-Mail, und ich melde mich umgehend zurück!',
    modal_email_btn: 'E-Mail senden',
    modal_note: 'Die E-Mail öffnet sich in deinem eigenen E-Mail-Programm — deine Daten bleiben sicher.',

    mailto_subject: 'Anfrage Telefonnummer — Portfolio Virág Magyar',
    mailto_body: 'Liebe Virág,\n\nIch habe deine Kontaktdaten über dein Portfolio gefunden.\nIch würde gerne persönlich mit dir in Kontakt treten — könntest du mir bitte deine Telefonnummer mitteilen?\n\nVielen Dank!\n'
  }
};

const docFiles = {
  hu: { cv: 'doc/Magyar Virág CV.docx',     ml: 'doc/Magyar Virág ML.docx' },
  en: { cv: 'doc/Magyar Virág ENG-CV.docx', ml: 'doc/Magyar Virág ENG-ML.docx' },
  de: { cv: 'doc/Magyar Virág DE-CV.docx',  ml: 'doc/Magyar Virág DE-ML.docx' }
};

const i18n = {
  current: 'hu',
  t(key) {
    return (translations[this.current] && translations[this.current][key]) || translations.hu[key] || '';
  },
  apply(lang) {
    if (!translations[lang]) lang = 'hu';
    this.current = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = this.t(key);
      if (val) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-doc]').forEach(el => {
      const kind = el.getAttribute('data-doc');
      const file = docFiles[lang] && docFiles[lang][kind];
      if (file) el.setAttribute('href', file);
    });

    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = this.t('page_title');

    document.querySelectorAll('#langSwitch button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }
};

(function initLang() {
  const saved = localStorage.getItem('lang') || 'hu';
  i18n.apply(saved);

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => i18n.apply(btn.getAttribute('data-lang')));
    });
  }
})();

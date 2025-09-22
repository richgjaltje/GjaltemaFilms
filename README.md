# Gjaltema Films website

Statische, snelle en toegankelijke marketingwebsite voor videoproductiebedrijf **Gjaltema Films**. Ontworpen in vanilla HTML/CSS/JS met focus op conversie, SEO en WCAG 2.1 AA-eisen.

## Te vervangen gegevens
- `jouw@e-mail.nl` &rarr; vervang door het gewenste contactadres (komt voor in HTML, privacyverklaring en manifest).
- Formspree-endpoint `https://formspree.io/f/your-form-id` &rarr; vervang door je eigen Formspree-ID.
- Telefoonnummer `06-…` en `tel:06` &rarr; vul het juiste nummer in.
- Adresinformatie `Straat, Plaats` &rarr; actualiseren.
- KvK- en BTW-nummers `nummer` &rarr; invullen.
- Social links (`href="#"`) &rarr; vervang door echte Instagram/YouTube/LinkedIn URL's.
- Vanaf-prijzen `€ …` &rarr; vul concrete bedragen in.
- Sitemap/robots domein `https://www.gjaltemafilms.nl/` &rarr; wijzig indien je een ander domein gebruikt.

## Structuur
```
.
├── index.html           # Hoofdpagina met alle secties
├── privacy.html         # Privacyverklaring + cookieparagraaf
├── assets/
│   ├── css/styles.css   # Gestyleerde componenten en layout
│   ├── js/main.js       # Navigatie, lightbox, formulierlogica
│   ├── icons/favicon.svg
│   └── img/             # SVG assets en portfolio placeholders
├── manifest.json        # PWA/icoon-meta-informatie
├── robots.txt           # Crawling-instructies
├── sitemap.xml          # Sitemap voor zoekmachines
└── README.md
```

## Ontwikkeling
- Geen build-stap nodig; open `index.html` rechtstreeks in de browser of host de map via GitHub Pages / Netlify.
- Styles zijn mobiel-first met CSS Grid en flexbox.
- JavaScript valideert het contactformulier, beheert de portfolio-lightbox en het mobiele menu.

## Contactformulier instellen
1. Maak een gratis Formspree-project en kopieer het formulier-ID (bijvoorbeeld `https://formspree.io/f/abcd1234`).
2. Vervang de `action`-waarde in `index.html` bij `<form id="contact-form" ...>` door je Formspree-URL.
3. Voeg in Formspree het gewenste ontvangstadres toe (bij voorkeur hetzelfde als `mailto:` in de site).
4. Test het formulier via de live omgeving en controleer de bevestigingsmail.

## Deployen op GitHub Pages
1. Push de inhoud van deze map naar de `main`-branch van je GitHub-repo.
2. Activeer **Settings → Pages → Branch: main (/root)**.
3. Voeg eventueel een CNAME-record toe als je een eigen domein gebruikt.
4. Werk `robots.txt` en `sitemap.xml` bij met de definitieve domeinnaam.

## Toegankelijkheid & performance
- Contrasten voldoen aan WCAG 2.1 AA (accentkleur #C9A227 op donker).
- Navigatie volledig toetsenbordbedienbaar; skiplink aanwezig.
- Afbeeldingen gebruiken `loading="lazy"` en alt-teksten.
- Geen externe scripts behalve Google Fonts.

## Privacy
- `privacy.html` bevat de privacyverklaring en vermeldt dat uitsluitend functionele cookies worden gebruikt.
- Voeg indien nodig extra paragrafen toe als er nieuwe tooling of tracking wordt toegevoegd.

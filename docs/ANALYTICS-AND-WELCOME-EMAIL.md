# Analytics (GA4) + welcome e-mail flow

## Google Analytics 4

1. In [Google Analytics](https://analytics.google.com/), maak een property (indien nog niet gedaan) en een **Data stream** voor het web.
2. Kopieer het **Measurement ID** (formaat `G-XXXXXXXXXX`).
3. In de repo: open `site/analytics-config.js` en zet:
   ```js
   window.__GA4_MEASUREMENT_ID__ = 'G-JOUW_ID_HIER';
   ```
4. Deploy de site. Op elke pagina met de analytics-scripts wordt dan het tag geladen. Als de string leeg is, gebeurt er niets (handig voor lokaal testen).

**EU / AVG:** Voor bezoekers uit de EER kan **consent mode** of een cookiemelding verplicht zijn, afhankelijk van hoe je marketing-/analyticscookies wil zetten. Dit is geen juridisch advies — check je eigen situatie of een jurist. Meer info: [Google — Consent Mode](https://support.google.com/analytics/answer/9976101).

---

## Welkom na checklist-signup (Mailchimp of vergelijkbaar)

Formspree vangt het **e-mailadres** op `guide.html` af en stuurt jou een notificatie; bezoekers gaan daarna naar `guide-thank-you.html` voor de PDF. Er is géén ingebouwde “dubbele opt-in welkomstmail” in Formspree op jullie plan.

**Praktische routes:**

### A. Zapier / Make (aanbevolen, kleine setup)

1. **Trigger:** Nieuwe submission op je Formspree-formulier (webhook of Formspree Zap).
2. **Actie:** Voeg contact toe in **Mailchimp** (of Brevo, etc.) met hetzelfde e-mailveld; tag bijv. `source: checklist`.
3. In Mailchimp: **Customer Journey** of **Classic Automation** — reeks gestart op tag of lijst “Checklist downloaders”.

### B. Mailchimp-formulier i.p.v. Formspree (meer herschrijven)

Vervang het checklist-formulier door een Mailchimp embedded form + redirect naar bedankpagina. Dan zit de lijst direct goed; wel **minder** flexibel dan Formspree + Zapier.

### C. Handmatig (alleen om te testen)

Formspree-mail naar jezelf → contact handmatig in Mailchimp zetten. Niet schaalbaar.

---

## Voorbeeld welkomst-reeks (5 e-mails, uit marketing audit)

Pas timing en copy aan je tool aan.

| # | Timing | Onderwerp / focus |
|---|--------|-------------------|
| 1 | Direct na signup | PDF link / herinnering + “jouw plan week 1” |
| 2 | Dag 3 | BSN — waar het misgaat |
| 3 | Dag 7 | 30%-ruling — kwalificeer je? |
| 4 | Dag 14 | Huurmarkt — realiteit |
| 5 | Dag 21 | Zorgverzekering + DigiD |

PDF-URL voor in mail (zelfde als op de site):  
`https://dutchsurvivalhacks.seniorease.eu/assets/checklist.pdf`

---

## Nieuwsbrief (homepage)

Het aparte formulier op `index.html` gebruikt hetzelfde Formspree-endpoint of een ander — zorg dat **checklist** en **nieuwsbrief** in je ESP hetzelfde of gescheiden lijsten gebruiken (tags), zodat alleen checklist-downloaders de 5-mail-reeks krijgen.

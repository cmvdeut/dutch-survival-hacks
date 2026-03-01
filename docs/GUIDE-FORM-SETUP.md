# Gids-formulier koppelen

Het formulier op de pagina **/guide** (guide.html) vraagt om een e-mailadres. Hieronder hoe je dat koppelt aan een dienst die de inzendingen ontvangt en (optioneel) automatisch de checklist mailt.

---

## Optie 1: Formspree (snelst, geen eigen backend)

Formspree ontvangt de formulierposts, stuurt jou een e-mail en kan doorverwijzen naar een bedankpagina. Later kun je een automatische e-mail met de PDF instellen (via Zapier/Make of Formspree’s eigen regels).

### Stappen

1. Ga naar **[formspree.io](https://formspree.io)** en maak een (gratis) account.
2. Klik **New Form** → geef een naam (bijv. "Dutch Survival Hacks – checklist").
3. Na aanmaken krijg je een **form endpoint**, bijvoorbeeld:  
   `https://formspree.io/f/abcdefgh`
4. In je project: open **site/guide.html** en vervang in het formulier de `action`:
   - Van: `action="#"`
   - Naar: `action="https://formspree.io/f/JOUW-FORM-ID"`  
   (vervang `JOUW-FORM-ID` door het echte ID uit Formspree.)
5. **(Optioneel)** Na verzenden doorsturen naar een bedankpagina:
   - In **site/guide.html** staat een uitgecommentarieerd veld `_next`. Verwijder de `<!-- -->` rond die regel zodat het veld actief is. De bedankpagina **guide-thank-you.html** staat al in de site; die opent dan na het verzenden.
   - Zonder `_next` blijft de bezoeker op de standaard Formspree-bedankpagina.

### Versturen van de PDF

- **Handmatig:** Je krijgt per inzending een e-mail van Formspree; je mailt zelf de checklist.
- **Automatisch:** In Formspree (betaalde plannen) of via Zapier/Make: bij nieuwe inzending → e-mail met PDF-link of bijlage naar het opgegeven adres.

---

## Optie 2: Mailchimp

Geschikt als je nieuwsbrief en gids-download in één tool wilt (abonnee + automatische e-mail met checklist).

### Stappen

1. Log in op **Mailchimp** → **Audience** → **Signup forms** → **Embedded forms**.
2. Kies of maak een formulier dat alleen e-mail vraagt; kopieer de **form action-URL** (begint met `https://...us1.list-manage.com/subscribe/post?u=...`).
3. In **site/guide.html**: zet `action="[gekopieerde Mailchimp-URL]"` en `method="post"`.  
   Mailchimp verwacht vaak ook verborgen velden (o.a. `u`, `id`). Die staan in de door Mailchimp gegenereerde formuliercode; neem die over of voeg ze als hidden inputs toe.
4. In Mailchimp: maak een **Automation** of **Welcome email** die na inschrijving een e-mail met de checklist-link of PDF verstuurt.

---

## Optie 3: ConvertKit

Ook geschikt voor lijst + automatische e-mail (sequence of form “thank you” e-mail met PDF).

### Stappen

1. Log in op **ConvertKit** → **Landing Pages & Forms** → maak een **Form** (alleen e-mail) of gebruik een bestaande.
2. Kies **Hosted** of **API** form; noteer de **form endpoint** (bij API-forms) of embed-URL.
3. Voor een eigen formulier op je site: bij ConvertKit → Form → **Settings** → **External form** of **API**; daar staat de POST-URL en eventueel een form ID.
4. In **site/guide.html**: zet `action="[ConvertKit POST-URL]"` en voeg eventueel een hidden field toe met je form ID (zoals ConvertKit aangeeft).
5. In ConvertKit: stel een **Sequence** of **Automation** in die na inschrijving op dit formulier een e-mail met de checklist stuurt.

---

## Samenvatting

| Dienst     | Voordeel                          | Nadelen                    |
|-----------|------------------------------------|----------------------------|
| Formspree | Snel live, geen accountcomplexiteit | Automatische PDF via extra stap (Zapier/regels) |
| Mailchimp | Lijst + automations in één tool   | Form action + hidden velden goed overnemen |
| ConvertKit| Gericht op creators, duidelijke automations | Zelfde als Mailchimp qua form-setup |

**Aanrader om te starten:** Formspree. Vervang in **site/guide.html** alleen de `action` door je Formspree-URL; daarna kun je altijd nog overschakelen naar Mailchimp of ConvertKit door de `action` (en evt. hidden velden) opnieuw in te vullen.

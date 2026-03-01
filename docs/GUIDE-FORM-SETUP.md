# Gids-formulier koppelen

Het formulier op **/guide** gebruikt **Formspree**: alleen e-mail, geen NAW, redirect naar de bedankpagina en (optioneel) een autoresponder met de PDF-link. Eenvoudig om te onderhouden.

---

## Huidige instelling: Formspree

- **Action:** `https://formspree.io/f/xvzbnbln`
- **Redirect na verzenden:** `_next` → https://dutchsurvivalhacks.seniorease.eu/guide-thank-you.html
- **Veld:** alleen e-mail (`name="email"`)

In Formspree kun je een **Autoresponder** instellen zodat de inzender direct een e-mail met de checklist-PDF-link krijgt. Zie **docs/CHECKLIST-PDF-AUTOMATION.md** (stap 3).

**Formspree gratis:** beperkt aantal inzendingen per maand; voor de meeste starters voldoende. Bij hoger volume of behoefte aan een echte nieuwsbrieflijst kun je later overschakelen naar Mailchimp.

---

## Alternatief: Mailchimp

Als je later een volledige nieuwsbrieflijst wilt in één tool:

1. **Audience** → **Signup forms** → **Embedded forms** → formulier zo instellen dat alleen **Email** zichtbaar is (andere velden op Hidden).
2. Form action-URL en hidden velden (`u`, `id`) uit de Mailchimp-code overnemen in **site/guide.html** (action + hidden inputs).
3. E-mailveld in guide.html op **name="EMAIL"** zetten.
4. In Mailchimp een **Welcome**-automation aanmaken met de PDF-link.

Zie eventueel de eerdere Mailchimp-sectie in de git-geschiedenis als je die stappen terug wilt lezen.

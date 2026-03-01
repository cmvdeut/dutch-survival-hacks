# Checklist-PDF: maken en automatisch versturen

Het gids-formulier gebruikt **Formspree**. Via de **Formspree-autoresponder** stuur je automatisch een e-mail met een link naar de checklist-PDF naar iedereen die het formulier invult.

---

## Stap 1: PDF maken uit de checklist

De inhoud staat in **content/checklist-pdf.md** en als printbare pagina in **site/assets/checklist.html**.

### Optie A — Browser: Print naar PDF (aanbevolen)

1. Open **site/assets/checklist.html** in Chrome of Edge.
2. **Ctrl+P** (of Cmd+P op Mac) → **Bestemming:** "Opslaan als PDF" / "Save as PDF".
3. Sla op als **checklist.pdf** in de map **site/assets/**.
4. Controleer dat het bestand heet: **site/assets/checklist.pdf**.

### Optie B — Pandoc (command line)

Als je [Pandoc](https://pandoc.org/) hebt geïnstalleerd:

```bash
cd d:\MAUREEN\DEV\DutchSurvivalHacks
pandoc content/checklist-pdf.md -o site/assets/checklist.pdf
```

---

## Stap 2: PDF in de repo en live zetten

1. Zorg dat **site/assets/checklist.pdf** bestaat.
2. Commit en push (Vercel deployt automatisch):

```powershell
cd d:\MAUREEN\DEV\DutchSurvivalHacks
git add site/assets/checklist.pdf
git commit -m "Add checklist PDF for form delivery"
git push origin main
```

3. Na de deploy is de PDF bereikbaar op:

**https://dutchsurvivalhacks.seniorease.eu/assets/checklist.pdf**

Test die URL in je browser; als de PDF opent, is stap 2 klaar.

---

## Stap 3: Formspree-autoresponder met PDF-link

Formspree kan automatisch een e-mail naar de inzender sturen. Daarin zet je de link naar de PDF.

1. Log in op **[formspree.io](https://formspree.io)** en open het formulier (ID xvzbnbln).
2. Ga naar **Settings** → **Notifications** / **Autoresponder** (of **Workflow** → Email action naar inzender).
3. Zet de **Autoresponder** aan (e-mail naar het adres dat in het formulier is ingevuld).
4. Vul in:
   - **Subject:** bijv. `Your checklist — Dutch Survival Hacks`
   - **Message**, bijvoorbeeld:

```
Thanks for signing up. Here's your checklist for your first 30 days in the Netherlands:

Download the PDF: https://dutchsurvivalhacks.seniorease.eu/assets/checklist.pdf

If the link doesn't work, copy and paste it into your browser. More tips on our site and TikTok @dutchsurvivalhacks.

— Dutch Survival Hacks
```

5. Sla op. Nieuwe inzendingen krijgen dan automatisch een e-mail met de PDF-link.

---

## Samenvatting

| Stap | Wat |
|------|-----|
| 1 | **site/assets/checklist.html** in browser openen → Print → Opslaan als PDF → **site/assets/checklist.pdf** |
| 2 | **checklist.pdf** committen en pushen → live op **https://dutchsurvivalhacks.seniorease.eu/assets/checklist.pdf** |
| 3 | In Formspree: **Autoresponder** “aanzetten” en in de e-mail de link naar de PDF zetten |

Daarna krijgt iedereen die het formulier invult automatisch een welkomstmail met de downloadlink.

---

## Geen betaald Formspree-plan: checklist via bedankpagina

De **custom redirect** (Response) en **Autoresponder** (e-mail naar inzender) zijn bij Formspree betaalde opties. Je hoeft niet te upgraden.

**Hoe het nu werkt (gratis):**  
Na het invullen van het formulier stuurt Formspree de bezoeker door naar de **bedankpagina** (via het verborgen veld `_next` in het formulier). Op die pagina staat een knop **Download the checklist (PDF)**. De bezoeker krijgt de checklist dus direct op de volgende pagina, zonder e-mail. Jij ontvangt wel een melding van Formspree dat er een nieuwe inzending is (op het e-mailadres dat aan je Formspree-account gekoppeld is).

De teksten op de gids-pagina zijn daarop aangepast: "Enter your email and click the button — you'll land on a page where you can download the PDF straight away." Geen belofte van een e-mail, wel duidelijke levering via de downloadknop op de bedankpagina.

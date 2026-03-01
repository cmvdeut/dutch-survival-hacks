# Checklist-PDF: maken en automatisch versturen via Formspree

Zodra iemand het gids-formulier invult, kunnen ze de checklist als PDF krijgen via een **Formspree-autoresponder** met een downloadlink. Formspree stuurt geen bestanden mee; je host de PDF op je site en linkt ernaar in de e-mail.

---

## Stap 1: PDF maken uit de checklist

De inhoud staat in **content/checklist-pdf.md** en als printbare pagina in **site/assets/checklist.html**.

### Optie A — Browser: Print naar PDF (aanbevolen)

1. Open **site/assets/checklist.html** in Chrome of Edge.
2. **Ctrl+P** (of Cmd+P op Mac) → **Bestemming:** "Opslaan als PDF" / "Save as PDF".
3. Sla op als **checklist.pdf** in de map **site/assets/**.
4. Controleer dat het bestand heet: `site/assets/checklist.pdf`.

### Optie B — Pandoc (command line)

Als je [Pandoc](https://pandoc.org/) hebt geïnstalleerd:

```bash
cd d:\MAUREEN\DEV\DutchSurvivalHacks
pandoc content/checklist-pdf.md -o site/assets/checklist.pdf
```

(Eventueel eerst: `pandoc content/checklist-pdf.md -o site/assets/checklist.html` en dan vanuit de browser naar PDF printen voor betere opmaak.)

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

## Stap 3: Formspree-autoresponder instellen

Formspree stuurt automatisch een e-mail naar het adres dat in het formulier is ingevuld. In die e-mail zet je een link naar de PDF.

1. Log in op **[formspree.io](https://formspree.io)** en open het formulier dat hoort bij **xvzbnbln**.
2. Ga naar **Settings** (of **Form settings**) → **Notifications** / **Autoresponder**.
3. Zet de **Autoresponder** aan (email naar de inzender).
4. Stel in:
   - **Subject:** bijv. `Your checklist — Dutch Survival Hacks`
   - **Message** (tekst of HTML), bijvoorbeeld:

```
Thanks for signing up. Here's your checklist for your first 30 days in the Netherlands:

Download the PDF: https://dutchsurvivalhacks.seniorease.eu/assets/checklist.pdf

If the link doesn't work, copy and paste it into your browser. You'll get more tips on our site and on TikTok @dutchsurvivalhacks.

— Dutch Survival Hacks
```

5. Sla op. Nieuwe inzendingen krijgen nu direct een e-mail met de link naar de PDF.

---

## Samenvatting

| Stap | Wat |
|------|-----|
| 1 | **site/assets/checklist.html** in browser openen → Print → Opslaan als PDF → opslaan als **site/assets/checklist.pdf** |
| 2 | **checklist.pdf** committen en pushen → URL: **https://dutchsurvivalhacks.seniorease.eu/assets/checklist.pdf** |
| 3 | In Formspree: **Autoresponder** aanzetten en in de e-mail de link naar de PDF zetten |

Daarna krijgt iedereen die het formulier invult automatisch een e-mail met de downloadlink.

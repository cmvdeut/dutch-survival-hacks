# WelkomNL-pagina deployen op Vercel (via GitHub)

De landingspagina staat in de map `site/`. Je kunt die op Vercel hosten en eventueel koppelen aan je eigen domein.

## Stappen

### 1. Code op GitHub zetten

Als het project nog niet op GitHub staat:

```bash
cd d:\MAUREEN\DEV\DutchSurvivalHacks
git init
git add .
git commit -m "Initial commit: site + content plan"
```

Maak op [github.com](https://github.com) een nieuw repository met de naam **dutch-survival-hacks** (of koppel een bestaande) en koppel het:

```bash
git remote add origin https://github.com/cmvdeut/dutch-survival-hacks.git
git branch -M main
git push -u origin main
```

(Repo en Vercel staan onder hoofdaccount **cmvdeut**.)

### 2. Deploy op Vercel

1. Ga naar [vercel.com](https://vercel.com) en log in met je **hoofdaccount** (cmvdeut of het account dat bij je GitHub hoort).
2. **Add New…** → **Project**.
3. Importeer het repository **dutch-survival-hacks** (vanuit **cmvdeut**).
4. Belangrijk: zet **Root Directory** op `site` (anders zoekt Vercel in de projectroot).
5. Klik **Deploy**.

Vercel geeft je een URL zoals `dutchsurvivalhacks.vercel.app` (of een andere naam die je kiest).

**Krijg je 404 Not Found?** Dan staat de Root Directory waarschijnlijk nog op de projectroot. Zet die op `site` (zie hieronder).

### 2b. Root Directory instellen (belangrijk)

1. Ga in Vercel naar je project **dutch-survival-hacks**.
2. Klik op **Settings** (tab bovenaan).
3. Links: **General** → scroll naar **Root Directory**.
4. Klik **Edit** naast Root Directory.
5. Vul in: **`site`** (alleen dat woord, geen slash ervoor of achter).
6. Klik **Save**.
7. Ga naar **Deployments** → bij de laatste deployment op **⋯** (three dots) → **Redeploy** (of push opnieuw vanuit Git).

Daarna zou de homepage op je Vercel-URL moeten laden.

### 3. (Optioneel) Eigen domein

In het Vercel-dashboard: **Project → Settings → Domains**. Voeg bijvoorbeeld `welkomnl.nl` of een subdomein toe en volg de DNS-instructies.

### 3b. Subdomein onder seniorease.eu

De site draait op **dutchsurvivalhacks.seniorease.eu** (subdomein onder seniorease.eu).

**Stap 1 — In Vercel**
1. Ga naar je project **dutch-survival-hacks** → **Settings** → **Domains**.
2. Klik **Add**.
3. Vul in: **`dutchsurvivalhacks.seniorease.eu`**.
4. Bevestig. Vercel toont nu de DNS-instructies (meestal een CNAME-record).

**Stap 2 — Bij je domeinregistrar (waar je seniorease.eu beheert)**
1. Ga naar de DNS-instellingen voor **seniorease.eu**.
2. Voeg een **CNAME-record** toe:
   - **Naam / host / subdomein:** `dutchsurvivalhacks` (sommige systemen willen alleen dit, andere `dutchsurvivalhacks.seniorease.eu`).
   - **Doel / target / value:** `cname.vercel-dns.com` (of exact wat Vercel bij Domains aangeeft).
3. Sla op. DNS kan een paar minuten tot uren duren om te propageren.

**Stap 3 — Controleren**
- In Vercel bij Domains moet het subdomein na korte tijd op “Valid” staan.
- Open in de browser: **https://dutchsurvivalhacks.seniorease.eu** — daar is de homepage.

**TikTok:** gebruik in je bio de link **https://dutchsurvivalhacks.seniorease.eu** (of alleen het subdomein als je geen “https://” wilt tonen).

### 4. Canva afbouwen

Als de Vercel-site goed staat:

- Update je TikTok-bio: vervang de Canva-link door de nieuwe Vercel-URL (of je eigen domein).
- Je kunt de oude Canva-pagina laten staan als redirect of later verwijderen.

## Repo en Vercel onder hoofdaccount (cmvdeut)

Het project draait onder je hoofdaccount **cmvdeut** (GitHub + Vercel). Als je eerder een apart account (dutchsurvivalhacks) gebruikte, kun je als volgt overzetten.

**GitHub**
- **Optie A — Repo overdragen:** Bij het oude account: **dutchsurvivalhacks/dutch-survival-hacks** → **Settings** → onderaan **Transfer ownership** → voer **cmvdeut** in en bevestig. Accepteer de transfer in cmvdeut. Daarna is de repo **cmvdeut/dutch-survival-hacks**.
- **Optie B — Nieuwe repo onder cmvdeut:** Log in als cmvdeut → **New repository** → naam **dutch-survival-hacks** (leeg, geen README). Lokaal: `git remote set-url origin https://github.com/cmvdeut/dutch-survival-hacks.git` → `git push -u origin main`. Daarna kun je het oude repo onder dutchsurvivalhacks archiveren of verwijderen.

**Lokaal (na overdracht of nieuwe repo)**  
Zorg dat de remote naar cmvdeut wijst:
```bash
git remote set-url origin https://github.com/cmvdeut/dutch-survival-hacks.git
git push -u origin main
```
(Gebruik de inloggegevens van cmvdeut.)

**Vercel**
- Log in op Vercel met je **hoofdaccount**.
- **Add New…** → **Project** → kies **cmvdeut/dutch-survival-hacks**. Root Directory: **site** → Deploy.
- **Settings** → **Domains** → voeg **dutchsurvivalhacks.seniorease.eu** toe (zelfde CNAME bij je registrar blijft geldig).
- Het oude Vercel-project (onder het aparte account) kun je laten uitlopen of verwijderen; het domein wijst daarna alleen naar het nieuwe project.

## Wijzigingen doorvoeren

Na aanpassingen in `site/` (bijv. `index.html` of `styles.css`):

```bash
git add site/
git commit -m "Update landing page"
git push
```

Vercel bouwt en deployt automatisch na elke push op `main`.

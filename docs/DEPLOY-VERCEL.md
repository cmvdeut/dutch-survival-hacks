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
git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/dutch-survival-hacks.git
git branch -M main
git push -u origin main
```

### 2. Deploy op Vercel

1. Ga naar [vercel.com](https://vercel.com) en log in met je (project-)account.
2. **Add New…** → **Project**.
3. Importeer het repository **dutch-survival-hacks**.
4. Belangrijk: zet **Root Directory** op `site` (anders zoekt Vercel in de projectroot).
5. Klik **Deploy**.

Vercel geeft je een URL zoals `dutchsurvivalhacks.vercel.app` (of een andere naam die je kiest).

### 3. (Optioneel) Eigen domein

In het Vercel-dashboard: **Project → Settings → Domains**. Voeg bijvoorbeeld `welkomnl.nl` of een subdomein toe en volg de DNS-instructies.

### 4. Canva afbouwen

Als de Vercel-site goed staat:

- Update je TikTok-bio: vervang de Canva-link door de nieuwe Vercel-URL (of je eigen domein).
- Je kunt de oude Canva-pagina laten staan als redirect of later verwijderen.

## Wijzigingen doorvoeren

Na aanpassingen in `site/` (bijv. `index.html` of `styles.css`):

```bash
git add site/
git commit -m "Update landing page"
git push
```

Vercel bouwt en deployt automatisch na elke push op `main`.

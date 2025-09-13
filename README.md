# AI Prompting – NL website

Een eenvoudige, moderne en SEO-vriendelijke website in het Nederlands met:

- **Prompt Generator** (5-delig kader: Task, Role, Context, Constraints, Output)
- **Tips & Patronen** (Chain-of-thought, few-shot, self-critique, role prompting)
- **Updates** (configureerbare AI-feeds via RSS)

## Installatie

1. Zet de bestanden op een webhost (GitHub Pages, Netlify, Vercel).  
2. Vervang `https://example.com` in `index.html` en `sitemap.xml` door jouw domein.  
3. Voeg eigen afbeeldingen toe in `assets/img/` en werk alt-teksten bij.  
4. (Optioneel) Pas feeds aan in `assets/js/feed.js`.

## SEO-checklist

- Titel & meta description per pagina ingesteld.
- Open Graph tags voor social sharing.
- **Sitemap** en **robots.txt** aanwezig.
- **FAQ schema** op `tips.html` (structured data). 
- Semantische HTML (H1/H2/section/nav/footer).
- Mobile-first en snel (lichte CSS/JS).

## CORS en feeds

Het script gebruikt `api.allorigins.win` als proxy voor RSS. Als een feed niet laadt, configureer een eigen proxy (bv. Netlify Function) of kies een andere bron met CORS.

## Aanbevolen afbeeldingen

- `assets/img/hero.webp` – 1600×1000, gecomprimeerd.
- `assets/img/flowchart-prompting.svg` – eenvoudige vector flowchart.

## Licentie

Vrij te gebruiken. Voeg je eigen branding toe.

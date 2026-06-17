# Kern — MVP Scope

> Doel: valideren dat gebruikers terugkomen voor de weekse reflectie na een gedrag-eerste waardenprofiel.

---

## MVP in één zin

Gedragsintake → waardenprofiel → gap visualisatie → weekse reflectie. Niets meer.

---

## Wat zit erin

### 1. Onboarding (4 stappen, ~8 min, eenmalig)

| Stap | Wat | Output |
|---|---|---|
| 1 | 6 gedragsscenario-vragen | Ruwe waardensignalen |
| 2 | Waardenprofiel verschijnt (top 5) | Schwartz-profiel op basis van gedrag |
| 3 | Gap meting — twee sliders per waarde | Belang vs. geleefd, gap in cijfers |
| 4 | Eerste micro-commitment | ACT-actiekaart aangemaakt |

### 2. Home Dashboard

- Naam + weeknummer van de journey
- Gap-indicator per top-waarde (simpele balk)
- Weekse reflectiekaart als prominente CTA
- Commitment van deze week zichtbaar

### 3. Weekse Reflectie

- **Maandag:** één open vraag over één waarde + gedragsanker
- **Vrijdag:** check-in op de commitment (Ja / Deels / Nee + optioneel tekstveld)
- Push notificaties voor beide momenten

### 4. Profielpagina

- Top 5 waarden met huidige gap
- Commitment history (kaarten per week)
- Datum gestart

---

## Wat er NIET in zit (→ backlog)

| Feature | Reden |
|---|---|
| Sociale spiegel (anderen laten invullen) | Vereist browser-flow + extra backend |
| Partner / team vergelijking | Vereist meerdere gebruikers gekoppeld |
| Coach marketplace | Vereist coaches, content, betalingen |
| Longitudinale tijdlijn | Heeft tijd + data nodig om te vullen |
| AI-patronenanalyse | Vereist genoeg reflectie-data eerst |
| Premium / betaalmodel | Validate eerst retentie |
| Kwartaalrapport PDF | Na longitudinale data |
| Life chapters | Na meerdere kwartalen gebruik |
| Team dashboard (B2B) | Aparte product-stroom |

---

## MVP Schermen (5 totaal)

```
1. Onboarding — Gedragsintake
2. Onboarding — Waardenprofiel reveal
3. Onboarding — Gap meting
4. Home Dashboard
5. Weekse Reflectie
6. Profielpagina
```

---

## Succesmaatstaf MVP

- Gebruiker voltooit onboarding → **>60%**
- Gebruiker keert terug voor weekse reflectie week 2 → **>40%**
- Gebruiker keert terug voor weekse reflectie week 4 → **>25%**

Als deze getallen kloppen: door naar V1.1 met de sociale spiegel.

---

## Volgende stap na MVP scope

→ Het algoritme: hoe worden gedragsantwoorden vertaald naar een Schwartz-waardenprofiel?

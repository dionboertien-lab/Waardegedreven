# Waardegedreven — Status & Voortgang

*Laatste update: juni 2026*

---

## Waar we zijn

Concept, methodologie, algoritme en MVP-scope zijn uitgewerkt. De Expo-app is
gebouwd (6 schermen, algoritme, storage, navigatie) en heeft een **kritische
Opus-review** + **fix-ronde** doorlopen. Klaar voor de review van de gebruiker.

### Verwerkt uit de code-review (K1-K4, B1-B6)
- **K1** Week wordt nu afgeleid uit de startdatum → reflecties krijgen unieke
  week-id's, roterend schema werkt, geen overschrijven meer.
- **K2** Globale state via `KernContext` → schermen verversen direct na wijziging.
- **K3** Onboarding-gate is reactief → na intake schakelt de app vanzelf naar Main.
- **K4** Append-only datamodel (`KernData`: intakes[] + reflecties[]) + stabiele
  `userId` + reflecties gekoppeld aan intake. Historie blijft bewaard.
- **B1** Gedeelde-noemer normalisatie → gap is een echte belang-vs-geleefd afstand.
- **B2** Circumplex-validatie (`vindSpanningen`) zichtbaar in ProfielReveal.
- **B3** Lerend profiel (`updateLivedNaReflecties`) daadwerkelijk bedraad.
- **B4** 10 vragen i.p.v. 6, elke waarde ≥5× bereikbaar.
- **B5/B6** Veilige deling in balken + locale-onafhankelijke dag-check (`getDay`).
- **N1/N4** Typed navigatie zonder `as any`-casts + try/catch rond storage-parse.

### Nog open (bewust, voor latere fases)
- Backend/identiteit-keuze (Supabase/Firebase) — nu nog lokaal, userId is voorbereid.
- Push notificaties voor het ma/vr-ritme.
- Kwartaal-herintake flow (datamodel ondersteunt het al via profielVersie).

---

## Beslissingen die zijn genomen

| Onderwerp | Beslissing |
|---|---|
| Naam | Waardegedreven (werknaam) |
| Theoretisch fundament | Schwartz (meten) + Values Bridge (gap) + ACT (handelen) |
| Startpunt | Gedrag eerst — niet abstracte zelfrapportage |
| Kernbelofte | De gap tussen wie je bent en hoe je leeft wordt zichtbaar en krimpt |
| Platform | React Native + Expo (iOS + Android) + browser (voor sociale laag) |
| Taal | Nederlandstalig |
| Verdienmodel | Freemium + coach marketplace |
| AI/LLM | Alleen voor open tekst (premium), niet in MVP |
| MVP scope | Intake + profiel + gap + weekse reflectie — niets meer |

---

## Bestanden

| Bestand | Inhoud |
|---|---|
| `waardegedreven-concept.md` | Volledig visiedocument — concept, pillars, app flow, verdienmodel |
| `waardegedreven-mvp.md` | MVP scope — wat zit erin, wat niet, succesmaatstaven |
| `waardegedreven-backlog.md` | Alles buiten MVP — 8 fases + losse ideeën |
| `waardegedreven-algoritme.md` | Volledig algoritme — 6 vragen, weighting matrix, scoring, LLM-spec, data model |
| `waardegedreven-status.md` | Dit bestand |

---

## Het algoritme in één oogopslag

```
6 gedragsvragen
  ↓ elk met twee ankers: voorkeur + werkelijk gedrag
Weighting matrix (10 Schwartz-waarden)
  ↓ voorkeur → importance scores
  ↓ gedrag   → lived scores
Normalisatie → top 5 waarden
  ↓
Gap = importance - lived  (Values Bridge, automatisch berekend)
  ↓
Sliders voor gebruikersbevestiging
  ↓
Opgeslagen als baseline profiel
  ↓
Weekse reflecties verfijnen het profiel over tijd
```

---

## MVP Schermen (6 totaal)

1. Onboarding — Gedragsintake (6 vragen)
2. Onboarding — Waardenprofiel reveal
3. Onboarding — Gap meting (sliders)
4. Home Dashboard
5. Weekse Reflectie (maandag + vrijdag)
6. Profielpagina

---

## Wat volgende sessie te doen

**Direct volgende stap: technische setup**

1. React Native + Expo project initialiseren
2. Mappenstructuur bepalen
3. Navigatiestructuur opzetten (React Navigation)
4. De 6 onboarding-schermen bouwen
5. Scoringsalgoritme implementeren in TypeScript

**Of eerst:** schermen ontwerpen (wireframes) voor de 6 MVP-schermen — dan weet je wat je bouwt voordat je code schrijft.

---

## Openstaande vragen voor later

- Definitieve naam (Waardegedreven is werknaam)
- Visuele identiteit / kleurpalet
- Exacte tekst van de 6 vragen (Nederlands, A/B/C/D opties)
- Push notificatie strategie (maandag + vrijdag ritme)
- Backend keuze (Supabase / Firebase / eigen)
- App Store / Play Store developer accounts

---

## Niet vergeten

- Schwartz PVQ-21 is public domain — vrij te gebruiken
- ACT-principes zijn vrij — eigen vragen schrijven, geen worksheets kopiëren
- Values Bridge concept is vrij — eigen implementatie
- LLM-classificatie (Claude Haiku) kost ~$0,001 per intake — alleen voor premium, niet in MVP
- Coach marketplace: coaches betalen voor leads én voor zichtbaarheid (twee stromen)

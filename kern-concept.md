# Kern — App Concept

> *De afstand tussen wie je bent en hoe je leeft, wordt steeds kleiner.*

---

## Kern idee

Een waardentest-app die niet vraagt wie je wilt zijn, maar je **betrapt** op wie je echt bent. Vertrekpunt is gedrag, niet abstracte zelfrapportage. De app is geen éénmalige test maar een wekelijks ritueel dat je helpt de kloof tussen je waarden en je gedrag steeds kleiner te maken.

---

## Theoretisch fundament (3 lagen)

| Laag | Theorie | Functie |
|---|---|---|
| 1 — Meten | Schwartz Theory of Basic Values | Welke waarden heb jij? |
| 2 — Begrijpen | Values Bridge (held vs. expressed) | Leef je ze ook echt? |
| 3 — Handelen | ACT (Acceptance & Commitment Therapy) | Wat staat ertussen? Hoe verander je dat? |

Deze lagen zijn gratis te gebruiken: de Schwartz-theorie en PVQ-21 zijn public domain, ACT is een open therapeutisch framework. Specifieke werkbladen (Russ Harris, Bull's Eye) zijn auteursrechtelijk beschermd — eigen vragen schrijven gebaseerd op de principes is de aanpak.

---

## Vijf concept pillars

### 1. Gedrag eerst — eerlijker dan zelfrapportage
Alle bestaande waardentests beginnen met "wat vind je belangrijk?" — vatbaar voor sociale wenselijkheid. Kern begint met concrete gedragsvragen over de afgelopen week. Uit gedrag worden impliciete waarden gedestilleerd. Verrassender, eerlijker, en minder te gamemen.

### 2. De Gap als kern — niet een lijst maar een afstand
De Values Bridge gap (verschil tussen belang en hoe sterk je het leeft) is de emotionele kern van het product. Niet "dit zijn je waarden" maar "hier zit de afstand tussen wie je wilt zijn en wie je bent." Die afstand wordt meetbaar en krimpt zichtbaar over tijd.

### 3. De Spiegel — perceptie van anderen als confrontatie
Gebruikers nodigen iemand uit die hen goed kent. Die persoon beoordeelt hoe sterk zij elke waarde zien uitgedragen — via een browserlink, zonder app download. Het verschil tussen zelfperceptie en andersperceptie is het rijkste gesprek. Niemand heeft dit voor waarden gebouwd.

### 4. Companion, niet test — wekelijks ritueel
De app is nooit "klaar." Wekelijkse micro-reflecties (3 min) verfijnen het profiel continu. Kwartaalmoment voor volledige herintake. Jaarlijkse "life chapter" overzichten. Engagement zit ingebakken in de methodologie.

### 5. Coach marketplace — zelfsturend verdienmodel
Coaches kunnen aanbevolen worden op basis van de waarden + gap van gebruikers. Twee richtingen: coaches betalen voor leads/zichtbaarheid, gebruikers worden gematcht aan de meest relevante coach. Coaches worden het distributienetwerk.

---

## Marktpositie

| Dimensie | Bestaande markt | Kern |
|---|---|---|
| Startpunt | Zelfrapportage van waarden | Gedrag → waarden |
| Output | Lijst met waarden | Meetbare gap die krimpt |
| Tijdshorizon | Éénmalige test | Doorlopend ritueel |
| Sociaal | Geen of beperkt | Perceptiespiegel + vergelijking |
| Taal | Engelstalig (kwaliteitstools) | Nederlandstalig |
| Prijs | Gratis (oppervlakkig) of €99+ (coaching) | Freemium |
| Doelgroep | Individu of enterprise | Individu + coach marketplace |

**Wit vlak:** Er bestaat geen gratis, kwalitatieve, volledig Nederlandstalige waardentest met wetenschappelijke basis, longitudinal tracking, en sociale laag. Dat is Kern.

---

## App Flow

### Fase 0 — Splash & positionering
- Tagline: *"Wie ben jij — echt?"*
- Geen waardelijsten, geen abstracties. Direct naar gedrag.

---

### Fase 1 — Gedrag-eerst Intake (~8 min, eenmalig)

**Stap 1.1 — Gedragsscenario's (6 vragen)**

Concrete situaties uit de afgelopen week met een gedragsanker:

- *"Je hebt een vrije avond. Wat doe je het liefst — en wat deed je écht?"*
- *"Je moet kiezen: meer verdienen of meer vrijheid. Wat koos je de laatste keer dat dit speelde?"*
- *"Wanneer voelde je je de laatste tijd het meest jezelf?"*

Het verschil tussen voorkeur en daadwerkelijk gedrag is al een eerste Values Bridge signaal.

**Stap 1.2 — Eerste waardenprofiel**

Algoritme destilleert top 5 Schwartz-waarden uit de antwoorden. Het profiel *verschijnt* op basis van gedrag — geen keuzelijst.

**Stap 1.3 — Values Bridge meting**

Voor elke top-waarde twee schuifregelaars:

```
Autonomie
Hoe belangrijk?    8/10
Hoe leef je het?   4/10
Gap: 4 punten  ← dit is je startpunt
```

**Stap 1.4 — Eerste ACT micro-commitment**

> *"Je leeft autonomie nog maar half. Wat is één kleine keuze die je deze week anders kunt maken?"*

Gebruiker typt een concrete actie. Dit wordt hun eerste commitment — zichtbaar als kaart in de app.

**Stap 1.5 — Sociale uitnodiging**

Nodig iemand uit via WhatsApp/email. Link opent in browser — geen download vereist voor de invuller.

---

### Fase 2 — Home Dashboard

- Naam + weeknummer van de journey
- Huidige gap trending (▼ = gap krimpt)
- Weekse reflectievraag als kaart
- Visuele gap-meter per top-waarde
- Navigatie: Spiegel / Groei / Coaches

---

### Fase 3 — Weekse Micro-reflectie (3 min/week)

**Maandag:** Één reflectievraag over één waarde
> *"Autonomie — geef een moment van vorige week waar je dit leefde. En één moment waar je het liet liggen."*

AI analyseert patronen over weken heen en geeft terugkoppeling:
> *"Je noemt werk vaak als moment waar je autonomie loslaat. Is dat een patroon dat je herkent?"*

**Vrijdag:** Check-in op de micro-commitment van maandag
- Lukte het? Ja / Deels / Nee
- Wat hield je tegen? (optioneel tekstveld)

---

### Fase 4 — Profiel & Tijdlijn

- Gap per waarde zichtbaar over tijd (nu / 3mnd / 6mnd / 1jr)
- Positieve trending toont groei: gap krimpt
- Negatieve trending triggert een ACT-prompt
- Kwartaalmoment: volledige herintake, waardenprofiel kan verschuiven
- "Life chapter" framing bij significante verschuivingen

---

### Fase 5 — De Spiegel (Sociale Laag)

**Voor de gebruiker:**

Na ontvangst van een perceptie-invulling:

```
Lisa heeft jou ingevuld

Autonomie
  Jij:  8/10
  Lisa: 6/10  (verschil: -2)

Verbondenheid
  Jij:  4/10
  Lisa: 8/10  (verschil: +4) ← !

"Lisa ziet jou als veel meer verbonden dan
 jij jezelf ervaart. Wist je dat?"
```

**Browser flow voor de invuller (geen app nodig):**

- Ontvangt link via WhatsApp/email
- Opent in browser, geen download
- 5 minuten, 12 waarden beoordelen
- Schaal per waarde: hoe sterk leeft [naam] dit uit — in jouw beleving?

**Partner / team vergelijking (beide hebben de app):**

- Gedeelde waarden zichtbaar
- Aanvullende waarden zichtbaar
- Potentiële spanningspunten gesignaleerd
- Tekst: *"Jullie vullen elkaar aan op verbondenheid — en kunnen botsen op autonomie."*

---

### Fase 6 — Groei & ACT Laag

Verweven door de hele app, niet als losse sectie. Na elke reflectie:

**ACT prompt-typen:**
- **Acceptatie:** *"Is dit iets wat je kunt veranderen, of iets wat je moet accepteren?"*
- **Defusie:** *"Je denkt dat je X moet. Wie heeft dat bepaald?"*
- **Committed action:** *"Eén kleine stap deze week. Wat is het?"*

**Micro-commitments als kaarten:**
```
✓ Week 12: Agenda zelf bepaald
✓ Week 11: Nee gezegd tegen vergadering
○ Week 10: Eigen project gestart (lopend)
```

---

### Fase 7 — Coach Marketplace

Zichtbaar na 2-3 weken gebruik (zodat matchingdata beschikbaar is).

- Coaches gematcht op basis van gebruikers gap-profiel
- Coaches tonen specialisatie per waarde
- Rating gebaseerd op eerdere matches via Kern
- Coaches betalen voor zichtbaarheid en leads
- CTA voor coaches: *"Word partner van Kern"*

---

## Verdienmodel

| Stroom | Doelgroep | Model | Prijs indicatie |
|---|---|---|---|
| Gratis basis | Alle gebruikers | Freemium | €0 |
| Premium | Gebruikers | Abonnement | €4,99/mnd |
| Coach leads | Coaches | Per match of abonnement | €29–€79/mnd |
| Aanbeveling | Coaches | Betalen voor zichtbaarheid | €49–€149/mnd |
| Team dashboard | Bedrijven | Per seat | €8–€15/mnd |

### Gratis vs. Premium

| Gratis | Premium |
|---|---|
| Gedragsintake | Volledige tijdlijn |
| Top 5 waarden | Partnercompare |
| Basis gap-meting | AI-patronenanalyse |
| 1 uitnodiging spiegel | Onbeperkte uitnodigingen |
| Weekse reflectie | Kwartaalrapport (PDF) |
| 1 coach aanbeveling | Directe coach-match |

### Coach marketplace flywheel

```
Gebruiker maakt profiel
       ↓
App koppelt aan passende coach (op basis van waardenprofiel + gap)
       ↓
Coach betaalt voor de lead / aanbeveling
       ↓
Meer coaches willen erbij → betere matching → meer gebruikers
```

---

## Technische aanpak

**Stack: React Native + Expo + Web**

```
iOS App     ─┐
Android App  ─┤── React Native (Expo) — één codebase
Browser     ─┘── Expo Web / Next.js frontend
```

- Één codebase voor iOS + Android
- Browser werkt voor de "anderen laten invullen" flow — geen download vereist
- Expo maakt publiceren naar App Store + Play Store eenvoudig
- Schaalbaar naar desktop

---

## Wat dit uniek maakt (samenvatting)

1. **Gedrag eerst** — eerlijker dan zelfrapportage
2. **Gap als kern** — meetbare afstand die zichtbaar krimpt
3. **Spiegel mechanic** — perceptieverschil als emotionele hook en virale driver
4. **Companion, niet test** — wekelijks ritueel, nooit "klaar"
5. **Coach marketplace** — zelfsturend verdienmodel via netwerk
6. **Browser voor anderen** — geen drempel voor de sociale laag
7. **Nederlandstalig** — uniek in de markt op dit kwaliteitsniveau

---

*Concept versie 1.0 — Juni 2026*

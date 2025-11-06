# Individuell Examination – Pomodoro Timer

## Om Projektet

En fullt fungerande Pomodoro Timer-applikation byggd med vanilla JavaScript. Timern hjälper användare att följa Pomodoro-tekniken med 25-minuters arbetspass följt av 5-minuters pauser. Applikationen har session-räkning för att spåra produktivitet.

**Funktioner:**
- ⏱️ 25/5 minuters arbets- och vilotimer
- ▶️ Start, paus och återställ-kontroller
- 🔄 Automatisk växling mellan arbete och vila
- 📊 Session-räknare för avslutade arbetspass
- 📱 Responsiv design 

**Mål:** Visa ett komplett Git-flöde (branches → PR → review → merge), lös mergekonflikt och tillämpa agila metoder (user stories, AC, DoD, retrospektiv).

## Valt Case
**Pomodoro Timer** (VG-nivå) - 25/5 minuters produktivitetstimer

## Checklista
- [x] Valt case: Pomodoro Timer + Trello-bräda skapad
- [x] User stories med AC + INVEST-motivering
- [x] En feature per branch → PR → review → squash-merge
- [x] 6 PR skapade och mergade (#1-6)
- [x] 1 mergekonflikt skapad och löst (PR #5-6)
- [x] reflection.md komplett
- [x] Länkar till Trello och reviews

## User Stories Implementerade

**US1:** HTML-struktur för timer (PR #1)
- Timer-display, kontrollknappar, session-räknare

**US2:** CSS-styling (PR #2)
- Responsiv design, custom properties, button states

**US3:** Timer-logik (PR #3)
- Start/paus/återställ, 25/5 min cykler, automatisk växling

**US4:** Session-räknare (PR #4)
- Räknar avslutade arbetspass

**US5-6:** Merge-konflikt (PR #5-6)
- Skapad och löst dokumentation i README1.md

**US5-7:** Uppdatera dokumentation (PR #7)
- Uppdatera dokumentation (README + Reflektion)


## Merge-konflikt

**Vad:** Konflikt i README1.md rad 29 - Trello-länknamn
**Hur:** Lokal merge med `git merge`, valde version-A
**Varför:** Båda branches ändrade samma rad samtidigt
**Resultat:** Konflikt löst, version-A behölls för konsistens

## Länkar

**Trello-bräda:** https://trello.com/b/p8Kkacoy/pomodoro-timer-version-A


**Reviews givna (5 st):**
1. https://github.com/MuamerBrankovic/bookmarks-mini/pull/3#pullrequestreview-3413467039
2. https://github.com/VitaliyBeletskiy/mu25-git-agile-bookmarks-mini/pull/4#pullrequestreview-3417595362
3. https://github.com/sofianiyazson/versionshantering-exam/pull/6#pullrequestreview-3422358057
4. https://github.com/ThatMayBeTheCase/Bookmarks-lite/pull/2
5. https://github.com/s91k/mu25-individ-karlsson-simon/pull/4#pullrequestreview-3424901462
6. https://github.com/MuamerBrankovic/bookmarks-mini/pull/4#pullrequestreview-3427817513

**Reviews mottagna (1 st):**
1. https://github.com/moodyambr/Individuell-examination-Git-Agilt/pull/1
2. https://github.com/moodyambr/Individuell-examination-Git-Agilt/pull/4#pullrequestreview-3428112878


## Teknisk Info

**Köra lokalt:** Öppna `starter/index.html` i webbläsare (eller använd Live Server i VS Code)

**Filstruktur:**
```
├── README.md 
├── reflection.md 
├── .gitignore
├── .github/
│   ├── pull_request_template.md
│   └── ISSUE_TEMPLATE/
│       └── feature_request.md
└── starter/
    ├── index.html 
    ├── style.css 
    └── app.js 
```

**Tech stack:** HTML5, CSS3 (custom properties), Vanilla JavaScript

**Git workflow:** 
- Feature branches (`feature/US#-beskrivning`)
- Pull requests med mall och reviews
- Squash merge för clean historik
- Semantic commit messages (`type(scope): beskrivning`)

**PR Policy:**
- [x] Små, fokuserade PR (≤ 250 rader diff)
- [x] Tydliga titlar: `type(scope): kort syfte`
- [x] Beskrivning med varför + hur
- [x] Länka Trello-kort
- [x] Minst 1 review innan merge
- [x] Squash merge till main


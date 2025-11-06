# Reflektion – Git & Agilt (1–2 sidor)

## 1) Egen user story + Acceptance Criteria + INVEST

**Story:** Som användare vill jag se hur många Pomodoro-pass jag genomfört så att jag kan spåra min produktivitet.

**Acceptance Criteria (checkboxar):**
- [x] Session-räknare visas i UI och startar på 0
- [x] Räknaren ökar med 1 när 25-minuters arbetsperiod avslutas
- [x] Räknaren nollställs när användaren klickar återställ-knappen
- [x] Räknaren påverkas inte av pausperioder

**INVEST – kort motivering (2–4 meningar):**
Vilka av I, N, V, E, S, T uppfyller storyn och varför?
- **I**ndependent: Kan implementeras oberoende av andra features
- **N**egotiable: Kan diskutera var räknaren visas eller om den ska sparas
- **V**aluable: Ger användaren insikt i produktivitet och motivation
- **E**stimable: Enkel att uppskatta 
- **S**mall: Liten feature som passar i en sprint
- **T**estable: Enkelt att testa genom att köra timer och räkna pass  

## 2) Sprintmål + Definition of Done (DoD)
**Sprintmål:** Skapa en fungerande Pomodoro-timer med HTML-struktur, CSS-styling, timer-logik och session-räkning för att hjälpa användare att följa 25/5-minuters produktivitetsmetoden.

**DoD (checklista):**
- [x] Kod kör lokalt utan fel
- [x] PR granskad och godkänd (minst 1 review)
- [x] README uppdaterad med valt case
- [x] Issue/kort länkat och stängt vid merge
- [x] Tydliga commit-meddelanden enligt policy
- [x] Squash merge använt för clean historik

## 3) Retro: Start / Stop / Continue
- **Start:** Använda squash merge konsekvent från början, lärde mig under US3 och fick mycket renare historik
- **Stop:** Skapa flera commits för samma feature (US1 hade 3 commits) det hade skapat lite rörig historik i main
- **Continue:** Tydliga branch-namn `feature/US#-beskrivning` och commit-meddelanden enligt `type(scope): beskrivning` format och policy

**Konkret förbättring för nästa sprint:** Implementera squash merge direkt från första PR. Detta kommer skapa en renare git-historik från start och göra det lättare att följa projektets utveckling. Jag kommer också använda interactive rebase innan push för att städa commits lokalt.


## 4) Hänvisningar (VG)
- **Förbättring 1 - Squash merge adoption** stöds av commit f5c448e: US3 blev en enda clean commit jämfört med US1 som hade flera commits (42d6d89, 491830f, cb51326)
- **Förbättring 2 - Semantisk HTML** stöds av commit 42d6d89: Fixade språkattribut till svenska och tog bort duplicerad body-tagg för valid HTML

# Reflektion – Git & Agilt

## 1) User Story + Acceptance Criteria + INVEST

**User Story:** US4 - Session-räknare
Som användare vill jag se antal avslutade arbetspass så att jag kan följa min produktivitet.

**Acceptance Criteria:**
- [x] Session-räknare visas i UI och startar på 0
- [x] Räknaren ökar med 1 när 25-minuters arbetsperiod avslutas
- [x] Räknaren nollställs när användaren klickar återställ-knappen
- [x] Räknaren påverkas inte av pausperioder (5 min)

**INVEST-motivering:**
- **I**ndependent: Kan implementeras oberoende av andra features
- **N**egotiable: Placeringen i UI kan diskuteras, sparning i localStorage valfritt
- **V**aluable: Ger användaren insikt i produktivitet och motivation att fortsätta
- **E**stimable: 2-3 timmar (enkelt att uppskatta)
- **S**mall: Liten feature som passar i en sprint, ~50 rader kod
- **T**estable: Testa genom att köra timer och verifiera räkning

## 2) Sprintmål + Definition of Done

**Sprintmål:** 
Skapa en fungerande Pomodoro-timer med grundläggande funktionalitet (25/5 min cykler, start/paus/återställ, session-räkning) för att hjälpa användare följa produktivitetsmetoden.

**Definition of Done:**
- [x] Kod kör lokalt utan fel
- [x] PR granskad och godkänd (minst 1 review)
- [x] README uppdaterad med projektinfo
- [x] Trello-kort länkat och flyttat till "Done"
- [x] Commit-meddelanden följer policy: `type(scope): beskrivning`
- [x] Squash merge använt för clean historik i main
- [x] Alla tester passerar (manuell testning)

## 3) Retrospektiv: Start / Stop / Continue

**START:**
- Använda squash merge från början - lärde mig vid US3, resulterade i renare historik
- Skriva tydligare PR-beskrivningar med "varför" och "hur"

**STOP:**
- Flera commits för samma feature (US1 hade 3 commits istället för 1)
- Merge commits i main (PR#2 blev merge istället för squash)

**CONTINUE:**
- Tydliga branch-namn: `feature/US#-beskrivning`
- Semantiska commit-meddelanden: `type(scope): beskrivning`
- En feature per branch-strategin

**Konkret förbättring för nästa sprint:**
Implementera squash merge konsekvent från första PR och använd `git rebase -i` lokalt innan push för att städa commits. Detta ger en commit per feature i main och gör historiken lättare att följa.

## 4) Hänvisningar till Förbättringar (VG)

**Förbättring 1 - Squash merge adoption:**
- Commit: `f5c448e` (US3 timer-logik)
- Resultat: En enda clean commit jämfört med US1 som hade 3 commits (42d6d89, cb51326, 491830f)
- Impact: Renare git-historik, enklare att förstå projektets utveckling

**Förbättring 2 - Semantisk HTML och validering:**
- Commit: `42d6d89` (HTML fixes)
- Ändringar: Fixade `lang="sv"` istället för `en`, tog bort duplicerad `<body>`-tagg
- Impact: Valid HTML5, bättre tillgänglighet och SEO

**Förbättring 3 - Merge-konflikt hantering:**
- PR: #5 och #6
- Lösning: Lokal merge med `git merge`, valde version-A för konsistens
- Dokumentation: Tydligt beskrivet i PR-kommentar (vad/hur/varför)

---

## 5) Alla Git-kommandon som använts i projektet

**Grundläggande kommandon:**
- `git init` 
- `git status` 
- `git add . / git add <fil>` 
- `git commit -m "meddelande"` 
- `git log --oneline` 
- `git pull` 
- `git push`

**Branch-hantering:**
- `git checkout -b <branch-name>` 
- `git checkout <branch>` 
- `git push -u origin <branch>` 

**Avancerade operationer:**
- `git stash / git stash pop` - Sparade/återställde ändringar temporärt
- `git reset HEAD~1` - Ångrade commits
- `git rebase --abort` - Avbröt rebase-operationer
- `git merge main` - Mergade main i feature branch
- `git restore .` - Återställde ändringar i arbetskatalogen

**Inspektionskommandon:**
- `git log --graph --oneline` - Visualiserade branch-struktur
- `git reflog` - Visade alla git-operationer
- `git branch -a` - Listade alla branches
- `git diff` - Visade ändringar


---

**Sammanfattning:** Projektet följde agil metodik med user stories, sprint planning och retro. Git-workflow förbättrades genom lärande (squash merge, clean commits). Alla VG-krav uppfyllda: 6 PR, 6 givna reviews, 3 förbättringar dokumenterade.

---



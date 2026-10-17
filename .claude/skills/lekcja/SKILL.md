---
name: lekcja
description: Rozpoczyna (albo wznawia) następną lekcję kursu JavaScript — tłumaczy temat i tworzy folder lekcji z README, zadaniami i testami, bez rozwiązań. Użyj, gdy użytkownik wpisze /lekcja, „zaczynamy lekcję”, „następna lekcja” albo poda numer lekcji.
---

# lekcja: start lub wznowienie lekcji

Opcjonalny argument: numer lub nazwa lekcji (np. `02`, `G1`, `F2`). Bez argumentu bierzesz pierwszą nieodhaczoną pozycję z `PLAN-NAUKI.md`.

## Kroki

1. **Zbierz kontekst** (jednym wywołaniem): przeczytaj `PLAN-NAUKI.md` i `POSTEP.md`, wypisz `ls lekcje/`, sprawdź `git branch --show-current` i `git status -sb`.

2. **Wybierz lekcję.** Weź argument albo pierwszą `[ ]` w planie. Jeśli w `POSTEP.md` coś jest „do powtórki”, wpleć 1–2 zadania powtórkowe z tego tematu.

3. **Wznowienie.** Jeśli folder `lekcje/NN-temat/` już istnieje, nic nie nadpisuj. Uruchom testy lekcji, powiedz, które zadania są zrobione, a które nie, i zaproponuj następny krok. Koniec.

4. **Branch.** Jeśli użytkownik jest na `main`, nie twórz brancha za niego (w modułach 0–2 robi to sam). Podaj komendę z wyjaśnieniem:
   `git switch -c lekcja/NN-temat`: „tworzy nowy branch i przechodzi na niego, żeby lekcja nie mieszała się z main”.
   Zasugeruj prefiks `!` w Claude. Kontynuuj, gdy użytkownik potwierdzi. Od modułu 3 możesz utworzyć branch sam.

5. **Utwórz folder `lekcje/NN-temat/`** (nazwa po polsku, kebab-case, bez polskich znaków). Wzorzec do naśladowania: `lekcje/01-zmienne/`.
   - `README.md`: **Cel** (1 zdanie), **Teoria** w małych krokach z krótkimi przykładami, tabela lub sekcja **„Kiedy tego używać”**, **Częste błędy**, **Zadania** (jak uruchomić testy, plac zabaw, `/podpowiedz`, `/sprawdz`). Nawiązuj do kodu, który użytkownik już zna (np. `projekty/01-licznik`).
   - `zadania.js`: 6–8 zadań od łatwych do trudniejszych, ostatnie jako „bonus”. Każde zadanie ma komentarz z poleceniem i **pusty szkielet** (`undefined`, pusta funkcja z `// tu Twój kod`). **Nigdy nie wpisuj rozwiązań.** Używaj tylko konstrukcji z poprzednich lekcji i z tej lekcji. Moduły ES (`export`).
   - `zadania.test.js`: `node:test` + `node:assert/strict`, jeden `test(...)` na zadanie, nazwy testów po polsku („Zadanie 3: ...”), komunikaty błędów podpowiadające, czego oczekiwano. Przed oddaniem sprawdź, że testy uruchamiają się i są **czerwone** (`node --test lekcje/NN-temat/*.test.js`).
   - `plac-zabaw.js`: kilka `console.log` z przykładami z README do eksperymentów.

   Lekcje specjalne:
   - **Git (G1–G4):** zamiast testów `README.md` z ćwiczeniami krok po kroku w terminalu (checkboxy). Przy każdej komendzie: co robi i kiedy jej używać. W G2 przygotuj scenariusz, w którym użytkownik **sam** wywoła konflikt merge na dwóch branchach i go rozwiąże.
   - **Przeglądarka (moduł 3):** logikę trzymaj w osobnym module z testami w Node, a DOM w `index.html` + `script.js`. Dodaj checklistę „sprawdź w przeglądarce”.
   - **Fork (F1–F3):** symulacja bez cudzych osób. Użytkownik zakłada w przeglądarce darmową organizację GitHub (poprowadź go krok po kroku). W niej tworzysz repo „cudzego projektu”, a użytkownik robi fork (`gh repo fork`), dodaje `upstream`, wysyła PR z forka. W F3 Ty, jako „opiekun projektu”, wprowadzasz zmianę w upstream, a użytkownik synchronizuje fork. Gdyby nie chciał organizacji: lokalne repo `git init --bare` jako „upstream”.
   - **Projekty (P1–P5):** folder w `projekty/NN-nazwa/`. Zamiast gotowych szkieletów: opis wymagań + lista kroków, a użytkownik projektuje strukturę sam.

6. **W czacie** (krótko, maks. ~10 linijek): czego dotyczy lekcja, po co to w praktyce, jak uruchomić testy, od którego zadania zacząć. Nie wklejaj całego README.

## Zasady
- Trzymaj się trybu mentora z `CLAUDE.md`. Nie pokazuj rozwiązań, chyba że użytkownik napisze „pokaż rozwiązanie”.
- Nie commituj. Commit robi użytkownik (moduły 0–2) albo `/ship`.

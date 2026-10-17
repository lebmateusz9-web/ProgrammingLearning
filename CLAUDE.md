# ProgrammingLearning

Repozytorium do nauki programowania w JavaScripcie od podstaw. Razem z JS właściciel uczy się pracy z Claude oraz z Git/GitHub, w tym z forkami. Program kursu jest w `PLAN-NAUKI.md`, a postępy w `POSTEP.md`.

## Struktura
- `lekcje/NN-temat/`: jedna lekcja, czyli `README.md` (teoria + „Kiedy tego używać”), `zadania.js` (zadania do zrobienia) i `zadania.test.js` (testy)
- `projekty/NN-nazwa/`: większe projekty, np. `01-licznik` (HTML/CSS/JS, otwierany w przeglądarce)
- `PLAN-NAUKI.md`: program kursu z checkboxami
- `POSTEP.md`: dziennik postępów, czyli co już umie i co powtórzyć
- `SCIAGA-GIT.md`: komendy git z opisem, kiedy ich używać
- `.claude/skills/`: skille kursu: `/lekcja`, `/podpowiedz`, `/sprawdz`

Czysty JavaScript, bez frameworków i bez zależności z npm. Pliki JS to moduły ES (`export` / `import`). Node.js służy tylko do uruchamiania zadań i testów:
- wszystkie testy: `npm test`
- jedna lekcja: `node --test lekcje/01-zmienne/*.test.js`

Node.js (v24 LTS) jest zainstalowany przez **nvm**, nie systemowo. W powłoce Claude przed `node`/`npm` trzeba go załadować:
```
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"
```

## Tryb mentora (najważniejsze)
- Właściciel repo dopiero zaczyna naukę. Kod ma być **prosty i czytelny dla początkującego**: bez sprytnych skrótów, zaawansowanych wzorców i zbędnych abstrakcji. Używaj tylko konstrukcji, które już były w lekcjach albo które właśnie tłumaczysz.
- **Nie wpisuj rozwiązań do `zadania.js`** i nie pokazuj gotowego kodu zadania, dopóki użytkownik wprost nie napisze „pokaż rozwiązanie”. Zamiast tego podpowiadaj krok po kroku (`/podpowiedz`).
- Tłumacz **dlaczego**, a nie tylko **jak**. Przy każdym nowym pojęciu powiedz, kiedy się go używa w praktyce.
- Przy każdej komendzie git lub terminala, którą uruchamiasz albo proponujesz, powiedz jednym zdaniem, co ona robi.
- W modułach 0–2 commit, push i PR użytkownik robi **ręcznie** (Ty tylko podpowiadasz). Od modułu 3 może używać `/ship`.
- Po zakończonej lekcji zaktualizuj `POSTEP.md` i odhacz lekcję w `PLAN-NAUKI.md`.

## Styl kodu
- Nazwy zmiennych i funkcji po polsku (`licznik`, `odswiez`, `przyciskPlus`). Komentarze też po polsku i krótkie.
- `const` domyślnie, `let` tylko gdy wartość się zmienia. Nigdy `var`.
- W przeglądarce `addEventListener` zamiast atrybutów `onclick` w HTML.
- Teksty na stronach po polsku (`<html lang="pl">`).

## Git i GitHub
- Remote: `https://github.com/lebmateusz9-web/ProgrammingLearning`, gałąź główna `main`.
- Lekcja idzie na branchu `lekcja/NN-temat`, inne zmiany na `feature/<opis>`. Potem Pull Request i merge.
- Commity i opisy PR są po polsku.
- Git nie ma skonfigurowanego logowania przez HTTPS, więc push i pull robi się przez poświadczenia `gh`:
  ```
  git -c credential.helper= -c credential.helper='!gh auth git-credential' push -u origin <branch>
  ```

# ProgrammingLearning

Repozytorium do nauki programowania od podstaw. Aktualny projekt: **Licznik kliknięć**, czyli prosta aplikacja webowa z przyciskami +, − i Reset.

## Struktura
- `index.html`: struktura strony
- `style.css`: wygląd (karta na środku, gradientowe tło, animacja liczby)
- `script.js`: logika licznika

Czysty HTML, CSS i JavaScript, bez frameworków, bundlera i `npm`. Node.js nie jest zainstalowany. Aplikację uruchamia się, otwierając `index.html` w przeglądarce.

## Zasady pisania kodu
- Właściciel repo dopiero zaczyna naukę, więc kod ma być **prosty i czytelny dla początkującego**. Bez sprytnych skrótów, zaawansowanych wzorców ani zbędnych abstrakcji.
- Nazwy zmiennych i funkcji w JS są po polsku (`licznik`, `odswiez`, `przyciskPlus`), a komentarze też po polsku i krótkie.
- Używaj `addEventListener` zamiast atrybutów `onclick` w HTML.
- Teksty na stronie są po polsku (`<html lang="pl">`).
- Przy nowych funkcjach wyjaśnij użytkownikowi, czego się z nich nauczy. Jeśli prosi o naukę, a nie o gotowy kod, podpowiadaj krok po kroku.

## Git i GitHub
- Remote: `https://github.com/lebmateusz9-web/ProgrammingLearning`, gałąź główna `main`.
- Zmiany idą przez branch `feature/<opis>`, potem Pull Request i merge (skill `/ship`).
- Commity i opisy PR są po polsku.
- Git nie ma skonfigurowanego logowania przez HTTPS, więc push i pull robi się przez poświadczenia `gh`:
  ```
  git -c credential.helper= -c credential.helper='!gh auth git-credential' push -u origin <branch>
  ```

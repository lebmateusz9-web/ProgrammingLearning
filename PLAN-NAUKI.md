# Plan nauki: JavaScript + Claude + Git/GitHub

Tempo: około 1 lekcja tygodniowo (2–4 godz.). Odhaczaj `[x]` po skończonej lekcji. Robi to też `/sprawdz`.

## Rytm każdej lekcji
1. `git switch main`, potem pull (wersja z `gh`, patrz `SCIAGA-GIT.md`), a potem `git switch -c lekcja/NN-temat`
2. `/lekcja`: Claude tłumaczy temat i tworzy folder lekcji
3. Czytasz `README.md` i piszesz kod w `zadania.js`
4. `node --test lekcje/NN-temat/*.test.js`: czerwone testy pokazują, co jeszcze nie działa
5. Utknąłeś? `/podpowiedz` (3 poziomy, od lekkiej do prawie rozwiązania)
6. Wszystko zielone? `/sprawdz`: code review + wpis do `POSTEP.md`
7. Commit → push → Pull Request → merge (moduły 0–2 ręcznie, potem `/ship`)

---

## Moduł 0: Narzędzia
- [ ] 00 Terminal, VS Code, Node.js, jak pracować z Claude, przegląd pierwszego PR kursu

## Moduł 1: Podstawy JavaScriptu (w terminalu, z testami)
- [ ] 01 Zmienne i typy danych (`const`, `let`, string, number, boolean, `typeof`)
- [ ] 02 Operatory i warunki (`if`, `else`, `===`, `&&`, `||`)
- [ ] 03 Pętle (`for`, `while`, `for...of`)
- [ ] 04 Funkcje (parametry, `return`, funkcje strzałkowe)
- [ ] 05 Tablice (indeksy, `push`, `length`, przechodzenie pętlą)
- [ ] 06 Obiekty (klucze, wartości, tablice obiektów)
- [ ] 07 Metody tablic (`map`, `filter`, `find`, `reduce`)
- [ ] 08 Stringi (metody tekstowe, template literals)
- [ ] P1 Mini-projekt: gra „Zgadnij liczbę” w terminalu

## Moduł 2: Git na serio (wplecione między lekcje JS)
- [ ] G1 `status`, `diff`, `log`: co się zmieniło i kiedy
- [ ] G2 Branche i celowo wywołany **konflikt merge**, potem jego rozwiązanie
- [ ] G3 Cofanie zmian: `restore`, `revert`, `.gitignore`
- [ ] G4 GitHub Issues, dobry opis commita i PR, przegląd PR

## Moduł 3: JavaScript w przeglądarce
- [ ] 09 DOM: wyszukiwanie i zmienianie elementów strony
- [ ] 10 Zdarzenia (kliknięcia, klawiatura)
- [ ] 11 Formularze i walidacja
- [ ] 12 `localStorage`: zapamiętywanie danych
- [ ] 13 Debugowanie w DevTools (F12, breakpointy, konsola)
- [ ] P2 Projekt: rozbudowa licznika + aplikacja **Lista zadań**
- [ ] P3 Publikacja na **GitHub Pages**

## Moduł 4: Fork (symulacja)
- [ ] F1 Fork, clone i branch: czym się różnią i kiedy który. Zakładamy organizację-„cudzy projekt”
- [ ] F2 Fork → clone → `upstream` → Pull Request z forka
- [ ] F3 Synchronizacja forka z upstream + code review

## Moduł 5: Asynchroniczność i API
- [ ] 14 Callbacki i `setTimeout`
- [ ] 15 Promise
- [ ] 16 `async` / `await`
- [ ] 17 `fetch` i JSON
- [ ] 18 Obsługa błędów (`try` / `catch`)
- [ ] P4 Projekt: aplikacja z darmowym API (pogoda albo quiz)

## Moduł 6: Projekt końcowy + Claude jak w pracy
- [ ] 19 Planowanie funkcji z Claude (plan mode, Issue → plan)
- [ ] 20 Code review z `/code-review` i refaktoryzacja
- [ ] 21 Piszemy własny skill dla Claude
- [ ] P5 Własny projekt od Issue do wdrożenia

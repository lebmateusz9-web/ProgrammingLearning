---
name: sprawdz
description: Sprawdza bieżącą lekcję — uruchamia testy, robi code review jak w pracy, zadaje pytanie sprawdzające i zapisuje postęp w POSTEP.md i PLAN-NAUKI.md. Użyj, gdy użytkownik wpisze /sprawdz, „sprawdź”, „skończyłem”, „zrobione” przy lekcji.
---

# sprawdz: testy, review, postęp

Opcjonalny argument: numer lekcji. Bez argumentu bierzesz lekcję z nazwy brancha albo ostatnio zmieniany folder w `lekcje/`.

## Kroki

1. **Testy:** `node --test lekcje/NN-temat/*.test.js`. W lekcjach bez testów (Git, Fork, lekcja 00) sprawdź checklistę w README komendami (`git log`, `git branch`, `git remote -v`, `gh pr list --state all`).

2. **Jeśli są czerwone testy:** wypisz, które zadania jeszcze nie przechodzą, i wytłumacz komunikaty prostymi słowami. **Nie poprawiaj kodu.** Zaproponuj `/podpowiedz <nr>`. Koniec.

3. **Jeśli wszystko zielone: code review** kodu w `zadania.js`, jak od starszego kolegi:
   - ✅ 2–3 rzeczy zrobione dobrze (konkretnie, z nazwą zmiennej lub linijką)
   - 🔧 do 3 rzeczy do poprawy: **co** i **dlaczego** (czytelność, `const` vs `let`, nazwy, powtórzenia). Tylko w zakresie poznanych tematów.
   - ❓ 1 pytanie sprawdzające zrozumienie (np. „co by się stało, gdyby…?”). Poczekaj na odpowiedź, zanim uznasz lekcję za zaliczoną.

4. **Zapisz postęp** (po odpowiedzi na pytanie):
   - `POSTEP.md`: dopisz wiersz w „Historia lekcji” (data, lekcja, wynik np. „8/8 + bonus”, krótkie uwagi), uzupełnij „Co już umiem”, a słabsze tematy wpisz do „Do powtórki” (usuń z niej to, co już opanowane).
   - `PLAN-NAUKI.md`: zmień `[ ]` na `[x]` przy tej lekcji.

5. **Następny krok z Git:**
   - Moduły 0–2: wypisz komendy commit → push (wersja z `gh` z `CLAUDE.md`) → `gh pr create` → `gh pr merge` → `git switch main` + pull, każdą z jednym zdaniem „co robi”. Użytkownik wpisuje je sam.
   - Od modułu 3: zaproponuj `/ship`.
   - Na koniec: „następna lekcja: `/lekcja`”.

## Zasady
- Bądź konkretny i życzliwy, bez ogólników typu „dobra robota”.
- Nie commituj i nie pushuj sam.

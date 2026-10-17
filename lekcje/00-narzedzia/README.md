# Lekcja 00: Narzędzia

**Cel:** poznać narzędzia, z których będziesz korzystać w każdej lekcji, i zrobić pierwszy **ręczny** commit + Pull Request.

Zaznaczaj `[x]`, gdy zrobisz ćwiczenie.

---

## 1. Terminal
Terminal to tekstowy sposób wydawania poleceń komputerowi. Programiści używają go, bo jest szybszy niż klikanie, a wiele narzędzi (git, node, Claude Code) działa tylko w nim.

| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `pwd` | pokazuje, w jakim folderze jesteś | gdy nie wiesz, „gdzie jesteś” |
| `ls` | wypisuje pliki w folderze | żeby zobaczyć, co jest w środku |
| `cd folder` | wchodzi do folderu | przechodzenie między folderami |
| `cd ..` | cofa się o jeden folder w górę | |
| `cd ~/Repositories/ProgrammingLearning` | idzie prosto do repo kursu | na początku każdej sesji nauki |
| `mkdir nazwa` | tworzy folder | |
| strzałka ↑ | poprzednia komenda | żeby nie pisać jeszcze raz |
| `Tab` | dopełnia nazwę pliku lub folderu | **zawsze**, bo oszczędza literówek |

**Ćwiczenia** (w zwykłym Terminalu albo w Claude z prefiksem `!`, np. `! pwd`):
- [ ] Wpisz `pwd`, potem `ls`. Co widzisz?
- [ ] Przejdź do repo kursu przez `cd` i wypisz pliki.
- [ ] Wejdź do `lekcje`, potem wróć `cd ..`. Użyj `Tab` do dopełniania.

## 2. VS Code
Edytor, w którym piszesz kod. Ma kolorowanie składni, podpowiedzi i wbudowany terminal.

- [ ] Otwórz VS Code → `File → Open Folder…` → wybierz `ProgrammingLearning`.
- [ ] W VS Code naciśnij `Cmd+Shift+P`, wpisz **Shell Command: Install 'code' command in PATH** i zatwierdź. Od teraz `code .` w terminalu otwiera bieżący folder w VS Code.
- [ ] Otwórz wbudowany terminal: `` Ctrl+` ``.

## 3. Node.js
Node.js pozwala uruchamiać JavaScript **poza przeglądarką**, czyli w terminalu. Używamy go do zadań i testów.

Node jest zainstalowany przez **nvm** (Node Version Manager), czyli program do instalowania i przełączania wersji Node, który nie wymaga hasła administratora. Działa w **nowo otwartym** terminalu.

| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `nvm ls` | pokazuje zainstalowane wersje Node | gdy chcesz sprawdzić, co masz |
| `nvm install --lts` | instaluje najnowszą stabilną wersję (LTS) | raz na kilka miesięcy, żeby zaktualizować Node |

- [ ] `node -v`: sprawdza wersję. Jeśli widzisz numer, Node działa.
- [ ] Wpisz samo `node`. Otworzy się „konsola JS” (REPL). Wpisz `2 + 2`, potem `"Ala" + " ma kota"`. Wyjście: `Ctrl+D`.
- [ ] `node --test lekcje/01-zmienne/*.test.js`: uruchamia testy lekcji 01. Będą **czerwone**, bo zadania są jeszcze puste. Tak ma być.

**Kiedy przeglądarka, a kiedy Node?** Strony (przyciski, kolory, kliknięcia) robisz w przeglądarce, jak licznik w `projekty/01-licznik`. Czystą logikę (obliczenia, dane, testy) wygodniej sprawdzać w Node.

## 4. Claude jako mentor
Claude Code to asystent w terminalu, który **widzi pliki tego repo**, uruchamia komendy i pisze kod. W tym kursie działa jako mentor (zasady są w `CLAUDE.md`).

### Skille kursu
| Skill | Co robi | Kiedy używać |
|---|---|---|
| `/lekcja` | tłumaczy następny temat i tworzy folder z zadaniami | na początku lekcji |
| `/podpowiedz` | daje podpowiedź (3 poziomy), nie gotowy kod | gdy utkniesz na dłużej niż ~10 minut |
| `/sprawdz` | uruchamia testy, robi code review i zapisuje postęp | gdy testy są zielone (albo chcesz feedback) |
| `/ship` | branch → commit → push → PR → merge automatycznie | **od modułu 3**, gdy już rozumiesz te kroki |

### Jak dobrze pytać
- Źle: „nie działa”.
- Dobrze: „W zadaniu 4 test mówi `expected 37.5, got NaN`. Myślę, że problem jest w mnożeniu. Dlaczego wychodzi NaN?”
- Pytaj „**dlaczego**”, nie tylko „jak”. Proś: „wytłumacz jak 10-latkowi”, „daj inny przykład”.
- Jeśli chcesz zobaczyć rozwiązanie, napisz wprost: **„pokaż rozwiązanie”**.

### Ważne funkcje Claude Code
| Funkcja | Co robi | Kiedy używać |
|---|---|---|
| `!komenda` | uruchamia komendę w terminalu bez wychodzenia z Claude | `! git status`, `! node -v` |
| plan mode (`Shift+Tab`) | Claude najpierw planuje, nic nie zmienia bez akceptacji | przy większych zmianach (moduł 6) |
| `CLAUDE.md` | instrukcje dla Claude o tym projekcie, czytane w każdej sesji | gdy chcesz zmienić stałe zasady |
| `/clear` | czyści rozmowę | na początku nowej lekcji |

- [ ] Otwórz `CLAUDE.md` i przeczytaj sekcję „Tryb mentora”.
- [ ] Otwórz `~/.claude/skills/ship/SKILL.md`. Zobacz, że skill to po prostu **instrukcja tekstowa** dla Claude, krok po kroku. W module 6 napiszesz własny.

## 5. Przejrzyj pierwszy Pull Request kursu
Pliki kursu zapisał i wysłał Claude: commit → push → Pull Request → merge. Twoim zadaniem jest **zrozumieć, co się stało**. Swój pierwszy ręczny commit i PR zrobisz po lekcji 01 (ściąga: `SCIAGA-GIT.md`).

Co zrobił Claude, krok po kroku:
| Krok | Komenda | Po co |
|---|---|---|
| 1 | `git switch -c feature/plan-nauki` | osobny branch, żeby nie zmieniać `main` bezpośrednio |
| 2 | `git add <pliki>` | wybór plików do zapisania (poczekalnia) |
| 3 | `git commit -m "..."` | zapis punktu w historii |
| 4 | `git push -u origin feature/plan-nauki` (z `gh`) | wysłanie brancha na GitHuba |
| 5 | `gh pr create` | prośba o włączenie zmian do `main` |
| 6 | `gh pr merge --merge --delete-branch` | włączenie zmian i usunięcie zbędnego brancha |
| 7 | `git switch main` + pull | powrót na `main` i pobranie aktualnej wersji |

Ćwiczenia:
- [ ] `git log --oneline -5`: znajdź commit „Dodaj plan nauki…” i commit „Merge pull request…”. Dlaczego są dwa?
- [ ] `git show --stat HEAD~1`: które pliki zmienił commit? Zwróć uwagę na `rename`, czyli przeniesienie licznika.
- [ ] `gh pr list --state merged`: lista zmergowanych PR-ów. Zapamiętaj numer najnowszego.
- [ ] `gh pr view <numer> --web`: obejrzyj PR w przeglądarce, zakładki **Conversation** i **Files changed**.
- [ ] `git branch`: czy `feature/plan-nauki` jeszcze istnieje? Dlaczego nie?

Gotowe? Uruchom `/sprawdz`. Następny krok to `/lekcja`, czyli lekcja 01.

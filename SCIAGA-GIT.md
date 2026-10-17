# Ściąga: Git i GitHub

**Git** to program na Twoim komputerze, który pamięta historię zmian w plikach.
**GitHub** to strona internetowa, która przechowuje kopię repozytorium i pozwala współpracować (Pull Requesty, Issues, forki).

## Słowniczek
| Pojęcie | Co to jest | Porównanie |
|---|---|---|
| repozytorium (repo) | folder projektu + cała jego historia | segregator z wszystkimi wersjami dokumentu |
| commit | zapisany „punkt w historii” z opisem | zapis gry |
| branch (gałąź) | osobna linia zmian, nie psuje `main` | kopia robocza, na której eksperymentujesz |
| `main` | główna gałąź, czyli „oficjalna” wersja | |
| remote / `origin` | repo na GitHubie, z którym się łączysz | |
| push | wysyłasz swoje commity na GitHuba | |
| pull | pobierasz nowe commity z GitHuba | |
| Pull Request (PR) | prośba: „wciągnij zmiany z mojej gałęzi do `main`” | miejsce na przegląd i dyskusję |
| merge | połączenie gałęzi | |
| konflikt | git nie wie, którą wersję linii zostawić; decydujesz Ty | |
| clone | kopia repo z GitHuba na Twój komputer | |
| fork | kopia **cudzego** repo na **Twoje konto** GitHub | moduł 4 |
| `upstream` | oryginalne repo, z którego zrobiono fork | moduł 4 |

## Komendy: co robią i kiedy ich używać

### Codzienne
| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `git status` | pokazuje zmienione pliki i aktualny branch | **zawsze** przed commitem i gdy nie wiesz, co się dzieje |
| `git diff` | pokazuje dokładnie, co zmieniłeś (linie `+` i `-`) | przed `git add`, żeby sprawdzić swoje zmiany |
| `git add <plik>` | dodaje plik do „poczekalni” (staging) przed commitem | gdy zmiany w pliku są gotowe do zapisania |
| `git commit -m "opis"` | zapisuje punkt w historii | po skończeniu jednej logicznej rzeczy |
| `git log --oneline` | krótka historia commitów | gdy chcesz zobaczyć, co i kiedy się działo |

### Branche
| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `git switch -c lekcja/01-zmienne` | tworzy nowy branch i od razu na niego przechodzi | na początku **każdej** nowej pracy |
| `git switch main` | przechodzi na branch `main` | po zmergowaniu PR albo żeby zacząć coś nowego |
| `git branch` | lista branchy (gwiazdka = aktualny) | gdy nie pamiętasz, gdzie jesteś |
| `git merge <branch>` | łączy wskazany branch z aktualnym | lokalnie albo przy synchronizacji forka |

### Praca z GitHubem
W tym repo push i pull idą przez logowanie `gh` (git nie ma zapisanego hasła):
```
git -c credential.helper= -c credential.helper='!gh auth git-credential' push -u origin <branch>
git -c credential.helper= -c credential.helper='!gh auth git-credential' pull
```

| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `git push -u origin <branch>` (wersja wyżej) | wysyła branch na GitHuba | gdy chcesz zrobić PR albo mieć kopię zapasową |
| `git pull` (wersja wyżej) | pobiera nowe zmiany z GitHuba | po zmergowaniu PR, przed rozpoczęciem nowej pracy |
| `gh pr create` | tworzy Pull Request (pyta o tytuł i opis) | gdy branch jest gotowy do przeglądu |
| `gh pr view --web` | otwiera PR w przeglądarce | żeby zobaczyć zmiany i komentarze |
| `gh pr merge` | merguje PR | gdy PR jest sprawdzony |

### Cofanie (moduł 2)
| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `git restore <plik>` | wyrzuca niezapisane zmiany w pliku | gdy coś zepsułeś i chcesz wrócić do ostatniego commita |
| `git restore --staged <plik>` | wyjmuje plik z poczekalni (zmiany zostają) | gdy przez pomyłkę zrobiłeś `git add` |
| `git revert <commit>` | tworzy nowy commit, który odwraca stary | gdy zły commit jest już na GitHubie |

### Fork (moduł 4)
| Komenda | Co robi | Kiedy używać |
|---|---|---|
| `gh repo fork <właściciel>/<repo> --clone` | robi fork na Twoim koncie i klonuje go | gdy chcesz coś zmienić w **cudzym** projekcie |
| `git remote -v` | pokazuje, z jakimi repo jesteś połączony | żeby sprawdzić `origin` i `upstream` |
| `git fetch upstream` | pobiera zmiany z oryginału (bez łączenia) | gdy oryginał poszedł do przodu |
| `git merge upstream/main` | łączy zmiany z oryginału z Twoim branchem | synchronizacja forka |

## Fork, clone czy branch?
- **Branch:** pracujesz we **własnym** repo (albo masz prawo zapisu). Tak jest prawie zawsze.
- **Clone:** chcesz mieć repo u siebie na komputerze.
- **Fork:** chcesz coś zmienić w **cudzym** repo, do którego **nie masz** prawa zapisu. Robisz własną kopię, zmieniasz ją i wysyłasz PR do oryginału.

## Standardowy przepływ pracy
```
git switch main                  # wracam na main
git pull (z gh)                  # pobieram najnowsze zmiany
git switch -c lekcja/NN-temat    # nowy branch na lekcję
... piszę kod ...
git status                       # co się zmieniło?
git diff                         # jak dokładnie?
git add lekcje/NN-temat/         # dodaję do poczekalni
git commit -m "Lekcja NN: ..."   # zapisuję
git push -u origin ... (z gh)    # wysyłam na GitHuba
gh pr create                     # proszę o włączenie do main
gh pr merge                      # włączam
```

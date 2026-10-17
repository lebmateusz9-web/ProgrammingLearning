# Lekcja 01: Zmienne i typy danych

**Cel:** umieć zapamiętać wartość pod nazwą, wiedzieć, kiedy `const`, a kiedy `let`, i rozpoznawać podstawowe typy danych.

## Teoria

### Zmienna to pudełko z etykietą
```js
const imie = "Ola";   // pudełko „imie”, w środku tekst "Ola"
let punkty = 0;       // pudełko „punkty”, w środku liczba 0
```
Nazwa zmiennej to etykieta, a `=` znaczy „włóż do pudełka”. To nie jest „równa się” z matematyki!

### `const` czy `let`?
| | Można zmienić wartość? | Kiedy używać |
|---|---|---|
| `const` | ❌ nie | **domyślnie**, zawsze gdy wartość się nie zmienia (imię, cena, element strony) |
| `let` | ✅ tak | gdy wartość będzie się zmieniać (licznik, punkty, wynik) |
| `var` | — | **nie używamy**, to stary sposób z problemami |

```js
let punkty = 0;
punkty = punkty + 10;   // teraz 10
punkty = punkty + 10;   // teraz 20

const cena = 5;
cena = 6;               // ❌ błąd: TypeError: Assignment to constant variable.
```
Dlaczego `const` domyślnie? Bo gdy widzisz `const`, od razu wiesz, że ta wartość nigdy się nie zmieni. Mniej rzeczy do śledzenia w głowie i mniej błędów.

Licznik w `projekty/01-licznik/script.js` używa właśnie `let licznik = 0`, bo liczba się zmienia, a przycisków przez `const`, bo to zawsze te same elementy.

### Typy danych
| Typ | Przykład | Do czego |
|---|---|---|
| `string` (tekst) | `"Ola"`, `'kot'` | imiona, komunikaty, wszystko co jest tekstem |
| `number` (liczba) | `25`, `12.5`, `-3` | wiek, ceny, punkty. Ułamki piszemy z **kropką**! |
| `boolean` (prawda/fałsz) | `true`, `false` | odpowiedzi tak/nie: czy zalogowany, czy gra skończona |
| `undefined` | `undefined` | „pudełko jest puste, nic jeszcze nie włożono” |
| `null` | `null` | „celowo nic”, wartość pusta ustawiona specjalnie |

Uwaga: `"25"` (w cudzysłowie) to **tekst**, a `25` to **liczba**. Różnica ma znaczenie:
```js
"2" + "2"   // "22", bo teksty się sklejają
2 + 2       // 4, bo liczby się dodają
```

### `typeof`: jaki to typ?
```js
typeof "Ola"   // "string"
typeof 25      // "number"
typeof true    // "boolean"
```
**Kiedy używać:** gdy nie masz pewności, co jest w zmiennej, zwłaszcza przy szukaniu błędu.

### Operacje na liczbach i sklejanie tekstu
```js
const cena = 12.5;
const ile = 2;
const razem = cena * ile;          // 25  (* mnożenie, / dzielenie, + dodawanie, - odejmowanie)

const imie = "Ola";
const powitanie = "Cześć, " + imie + "!";   // "Cześć, Ola!"
```

### `console.log`: podglądanie wartości
```js
console.log(razem);   // wypisuje 25 w terminalu albo w konsoli przeglądarki
```
**Kiedy używać:** zawsze, gdy chcesz zobaczyć, co naprawdę jest w zmiennej. To najprostsze narzędzie do szukania błędów.

## Częste błędy
- Przecinek zamiast kropki: `12,5` ❌, `12.5` ✅
- Liczba w cudzysłowie: `"10" + 5` daje `"105"`, a nie `15`
- Próba zmiany `const`: jeśli wartość ma się zmieniać, użyj `let`
- Literówka w nazwie: `imie` i `Imie` to **dwie różne** zmienne (wielkość liter ma znaczenie)

## Zadania
1. Otwórz `zadania.js` i rób zadania po kolei.
2. Po każdym zadaniu uruchom testy:
   ```
   node --test lekcje/01-zmienne/*.test.js
   ```
   ✔ zielone = zrobione, ✖ czerwone = jeszcze nie. Czytaj komunikat błędu, bo mówi, czego oczekiwano (`expected`) i co dostano (`actual`).
3. Chcesz poeksperymentować? Pisz w `plac-zabaw.js` i uruchamiaj `node lekcje/01-zmienne/plac-zabaw.js`.
4. Utknąłeś? `/podpowiedz`. Wszystko zielone? `/sprawdz`.

---
name: podpowiedz
description: Daje stopniowaną podpowiedź (poziom 1–3) do zadania z bieżącej lekcji, bez gotowego rozwiązania. Użyj, gdy użytkownik wpisze /podpowiedz, „podpowiedz”, „utknąłem”, „nie wiem jak” albo „nie działa” przy zadaniu z lekcji.
---

# podpowiedz: podpowiedź, nie rozwiązanie

Opcjonalny argument: numer zadania (np. `4`). Bez argumentu bierzesz pierwsze zadanie, którego test nie przechodzi.

## Kroki

1. **Ustal lekcję i zadanie.** Lekcja: folder z nazwy brancha (`lekcja/NN-temat`), a jeśli to nie działa, ostatnio zmieniany folder w `lekcje/`. Uruchom `node --test lekcje/NN-temat/*.test.js` i przeczytaj `zadania.js`, żeby zobaczyć **kod użytkownika** i komunikat błędu.

2. **Wybierz poziom.** Jeśli w tej rozmowie była już podpowiedź do tego zadania, idź o poziom wyżej. W przeciwnym razie zacznij od 1.
   - **Poziom 1, naprowadzenie:** pytanie lub wskazówka, która pokazuje kierunek. Odwołaj się do sekcji README („zajrzyj do części o `typeof`”). Jeśli kod ma błąd, wskaż **linijkę**, ale nie poprawkę.
   - **Poziom 2, plan:** rozpisz rozwiązanie na kroki słowami albo pseudokodem. Pokaż analogiczny przykład **na innych danych**.
   - **Poziom 3, prawie gotowe:** szkielet kodu z jedną lub dwiema lukami `___` do uzupełnienia.

3. **Wytłumacz komunikat błędu** prostymi słowami, jeśli test go pokazał (`expected` = czego test chciał, `actual` = co dostał).

4. Zakończ zachętą: „spróbuj i uruchom testy”. Przypomnij, że może poprosić o kolejny poziom albo napisać „pokaż rozwiązanie”.

## Zasady
- **Nie edytuj `zadania.js`.** Kod pisze użytkownik.
- Pełne rozwiązanie pokazujesz tylko po wyraźnym „pokaż rozwiązanie”. Wtedy wytłumacz je linijka po linijce i zaproponuj podobne mini-zadanie do samodzielnego zrobienia.
- Krótko: podpowiedź to kilka zdań, nie wykład.

// Testy do lekcji 01. Tego pliku nie musisz zmieniać.
// Uruchom: node --test lekcje/01-zmienne/*.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import * as z from "./zadania.js";

test("Zadanie 1: imie to niepusty tekst", () => {
    assert.equal(typeof z.imie, "string", "imie ma być tekstem w cudzysłowie");
    assert.ok(z.imie.length > 0, "imie nie może być puste");
});

test("Zadanie 2: wiek to liczba", () => {
    assert.equal(typeof z.wiek, "number", "wiek ma być liczbą, bez cudzysłowu");
    assert.ok(z.wiek > 0, "wiek ma być większy od 0");
});

test("Zadanie 3: lubieKawe to true albo false", () => {
    assert.equal(typeof z.lubieKawe, "boolean", "wpisz true albo false, bez cudzysłowu");
});

test("Zadanie 4: razem = cena * ilość", () => {
    assert.equal(z.razem, 37.5);
});

test("Zadanie 5: typImienia", () => {
    assert.equal(z.typImienia, "string");
});

test("Zadanie 6: punkty po zmianach", () => {
    assert.equal(z.punkty, 15);
});

test("Zadanie 7: powitanie", () => {
    assert.equal(typeof z.imie, "string", "najpierw zrób zadanie 1");
    assert.equal(z.powitanie, "Cześć, " + z.imie + "!");
});

test("Zadanie 8: tekst + tekst", () => {
    assert.equal(z.wynikSklejenia, z.zFormularzaA + z.zFormularzaB);
});

test("Zadanie 8 (bonus): prawdziwa suma", () => {
    assert.equal(z.sumaLiczb, 15);
});

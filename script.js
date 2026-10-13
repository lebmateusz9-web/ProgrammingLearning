// 1. Zmienna, która przechowuje aktualną liczbę
let licznik = 0;

// 2. Pobieramy elementy ze strony
const wyswietlacz = document.getElementById("licznik");
const przyciskPlus = document.getElementById("plus");
const przyciskMinus = document.getElementById("minus");
const przyciskReset = document.getElementById("reset");

// 3. Funkcja, która pokazuje aktualną liczbę na stronie
function odswiez() {
    wyswietlacz.textContent = licznik;

    // Kolor liczby zależy od tego, czy jest dodatnia, ujemna czy równa 0
    wyswietlacz.classList.remove("dodatni", "ujemny");
    if (licznik > 0) {
        wyswietlacz.classList.add("dodatni");
    } else if (licznik < 0) {
        wyswietlacz.classList.add("ujemny");
    }

    // Krótka animacja "podskoku" przy każdej zmianie
    wyswietlacz.classList.remove("pop");
    void wyswietlacz.offsetWidth; // restart animacji
    wyswietlacz.classList.add("pop");
}

// 4. Reagujemy na kliknięcia
przyciskPlus.addEventListener("click", function () {
    licznik = licznik + 1;
    odswiez();
});

przyciskMinus.addEventListener("click", function () {
    licznik = licznik - 1;
    odswiez();
});

przyciskReset.addEventListener("click", function () {
    licznik = 0;
    odswiez();
});

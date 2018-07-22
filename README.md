# warsawjs-workshop-22-checking-dom

> Aplikacja stworzona na potrzeby WarsawJS Workshop #22

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Krok po kroku

1. [x] Komponent powinien być klasą:
    + posiadać typ `function`
    + nie być `arrow function`
2. [x] Komponent powinien przyjmować argument z opcjami
3. [x] W opcjach powinna być właściwość z miejscem, gdzie ma się wyrenderować
    karuzela, które powinno zostać zapisane w nowej właściwości
4. [x] Zamockowaniać DOMa
    + <https://github.com/jsdom/jsdom>
5. [x] Przekazywany parametr, którym ma wyrenderować się karuzela powinien być
    typu `HTMLElement`
6. [x] Element, który jest przekazany w obiekcie z argumentami do kontruktora
    karuzeli powinien istnieć
7. [x] Karuzela powinna przyjmować listę obrazków i zapisać ją w nowej właściwości
8. [x] Karuzela powinna wyrenderować pierwszy obrazek
    + a) [x] karuzela powinna przechowywać informację o indeksie aktualnego obrazka
    + b) [x] karuzela powinna posiadać funkcję renderującą
9. [x] Karuzela powinna po kilku sekundach pokazać kolejny obrazek
    + a) [x] karuzela powinna istnieć właściwość określająca czas zmiany obrazka
    + b) [x] domyślna wartość właściwość powinna być równa 4 sekund
    + c) [x] właściwość powinna być nadpisywana za pomocą argumentu z opcjami
    + d) [x] karuzela powinna istnieć funkcja uruchamiająca pokaz slajdów
    + e) [x] karuzela powinna istnieć funkcja zatrzymująca pokaz slajdów
    + f) [x] karuzela powinna posiadać właściwość zegarka (domyślnie `null`)
10. [x] Karuzela powinna zapętlać wyświetlanie obrazków
11. [x] Karuzela powinna pauzować pokaz slajdów

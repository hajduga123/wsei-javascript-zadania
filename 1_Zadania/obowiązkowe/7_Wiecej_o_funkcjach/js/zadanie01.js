
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Definicja funkcji 'sortArray()'
function sortArray() {

    //Deklaracja tablicy 'points'
    var points = [41, 3, 6, 1, 114, 54, 64];

    //funkcja 'sort()' sprtuje tablicê
    points.sort(function (a, b) {
        //funkcja odejmuje 'b' od 'a' w celu porównania dwóch liczb
        return a - b;
    });

    //funkcja zwraca posortowan¹ tablicê 'points'
    return points;
}

//Wywo³anie funkcji 'sortArray()'
sortArray();

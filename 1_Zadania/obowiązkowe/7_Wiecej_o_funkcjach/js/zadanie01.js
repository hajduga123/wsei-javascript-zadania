
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Definicja funkcji 'sortArray()'
function sortArray() {

    //Deklaracja tablicy 'points'
    var points = [41, 3, 6, 1, 114, 54, 64];

    //funkcja 'sort()' sprtuje tablic�
    points.sort(function (a, b) {
        //funkcja odejmuje 'b' od 'a' w celu por�wnania dw�ch liczb
        return a - b;
    });

    //funkcja zwraca posortowan� tablic� 'points'
    return points;
}

//Wywo�anie funkcji 'sortArray()'
sortArray();

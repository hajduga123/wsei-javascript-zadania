/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Deklarcja funkcji `jeden()` - funkcja nie przyjmuje zadnych arguentów wejœciowych
function jeden() {

    //Deklaracja zmiennej `zmienna1` - dostêpna w obu funkcjach, poniewa¿ funkcja `jeden()` jest nadrzêdna wzgelêdem funkcji `dwa()`
    //Funkcja `dwa()` jest zagnie¿d¿ona w funkcji `jeden()` wiêc wszystkie zmienne utworzone w funckji `jeden()` bêd¹ dostêpne w obu funkcjach
    //Natomiast wszystkie zmienne utworzone w funckji `dwa()` bêd¹ dostêpne jedynie w wywo³aniu funckji `dwa()`
    var zmienna1 = 1;

    //Deklarcja funkcji `dwa()` - funkcja jest zagnie¿d¿ona w funkcji `jeden()`
    function dwa() {

        //Wywo³anie w konsoli zmiennej `zmienna1` - dostêpna poniewa¿ zainicjowana w funkcji nadrzêdnej
        console.log(zmienna1);

        //Deklaracja zmiennej `zmienna2` - dostêpna tylko w funkcji zagnie¿d¿onej `dwa()`
        var zmienna2 = 3;
    }

    //Wywo³anie funkcji zagnie¿d¿onej `dwa()`
    dwa();

    //Wywo³anie w konsoli zmiennej `zmienna2` - niedostêpna poniewa¿ zainicjowana w funkcji zagnie¿d¿onej `dwa()`
    //Zwrócenie b³êdu o niezadeklarowanej zmiennej
    console.log(zmienna2)
}

//Wywo³anie funkcji zagnie¿d¿onej `jeden()`
jeden()

//Zmienne zadeklarowane w funkcji zagnie¿d¿onej bêd¹ widoczne tylko w funkcji, w której zosta³y zadeklarowane
//Nie s¹ widoczne w funkcji nadrzêdnej
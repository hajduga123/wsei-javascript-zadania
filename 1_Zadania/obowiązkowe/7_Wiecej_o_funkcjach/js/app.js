/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Deklarcja funkcji `jeden()` - funkcja nie przyjmuje zadnych arguent�w wej�ciowych
function jeden() {

    //Deklaracja zmiennej `zmienna1` - dost�pna w obu funkcjach, poniewa� funkcja `jeden()` jest nadrz�dna wzgel�dem funkcji `dwa()`
    //Funkcja `dwa()` jest zagnie�d�ona w funkcji `jeden()` wi�c wszystkie zmienne utworzone w funckji `jeden()` b�d� dost�pne w obu funkcjach
    //Natomiast wszystkie zmienne utworzone w funckji `dwa()` b�d� dost�pne jedynie w wywo�aniu funckji `dwa()`
    var zmienna1 = 1;

    //Deklarcja funkcji `dwa()` - funkcja jest zagnie�d�ona w funkcji `jeden()`
    function dwa() {

        //Wywo�anie w konsoli zmiennej `zmienna1` - dost�pna poniewa� zainicjowana w funkcji nadrz�dnej
        console.log(zmienna1);

        //Deklaracja zmiennej `zmienna2` - dost�pna tylko w funkcji zagnie�d�onej `dwa()`
        var zmienna2 = 3;
    }

    //Wywo�anie funkcji zagnie�d�onej `dwa()`
    dwa();

    //Wywo�anie w konsoli zmiennej `zmienna2` - niedost�pna poniewa� zainicjowana w funkcji zagnie�d�onej `dwa()`
    //Zwr�cenie b��du o niezadeklarowanej zmiennej
    console.log(zmienna2)
}

//Wywo�anie funkcji zagnie�d�onej `jeden()`
jeden()

//Zmienne zadeklarowane w funkcji zagnie�d�onej b�d� widoczne tylko w funkcji, w kt�rej zosta�y zadeklarowane
//Nie s� widoczne w funkcji nadrz�dnej
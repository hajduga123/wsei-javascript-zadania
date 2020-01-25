sayHi();

function sayHi() {
    console.log('Czeœæ');
}

sayHi();

sayHello();

const sayHello = function () {
    console.log('Witaj');
}

sayHello();

//w przypadku funkcji sayHi nie ma znaczenia dla dzialania czy wywolamy ja przed czy po definicji, dziala tzw hoisting czyli przeniesienie deklaracji na sama gore

// w przypadku wyrazenia funkcyjnego jezeli sprobujemy wywolac je przed definicja otrzymamy blad
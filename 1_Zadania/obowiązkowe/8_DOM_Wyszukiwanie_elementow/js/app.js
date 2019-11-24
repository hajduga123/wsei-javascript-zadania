console.log9'bbb'0
document.addEventListener("DOMContentLoaded", function () {
    console.log('aaa')
    let elemClass = document.getElementsByClassName('title')[0];

    function getDataAnimation(element){
        console.log('ccc');
        let newVariable = element.getAttribute('data-animation');
        console.log('ddd',newVarible);
        return newVariable;

    }
    getDataAnimation(elemClass);
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    var el1 = document.getElementById('home');
    var el2 = document.querySelector('#home');

    var eli = document.querySelector('li[data-direction]')[0];
    var elClassBlock = document.querySelector('.block');

    var allLi = document.querySelectorAll('nav li');
    var allP = document.querySelector('div p');
    var allDiv = document.querySelectorAll('article div')

});

document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //zad00

    const title = document.querySelector('.title');

    function getDataAnimation(element) {
        let animation = element.dataset.animation;
        return animation;
    }

    const result = getDataAnimation(title);
    console.log(result);


    //zad01

    const home = document.querySelector('#home');
    const home2 = document.getElementById('home');
    console.log(home, home2);

    const direction = document.querySelector('li');
    console.log(direction);

    const block = document.querySelector('.block');
    console.log(block);


    //zad02

    const allLiInNav = document.querySelector('nav').querySelectorAll('li');
    console.log(allLiInNav.length);

    const pInDivs = document.querySelectorAll('div p')
    console.log(pInDivs.length);

    const divsInArticle = document.querySelectorAll('article div');
    console.log(divsInArticle.length);


    //zad03

    const firstArticle = document.querySelector('article.first');
    const h1 = firstArticle.querySelectorAll('h1');
    console.log(h1.length);

});
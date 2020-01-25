document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */


    // zad00
    function getDatasInfo(elements) {
        let newArr = [];
        for (let i = 0; i < elements.length; i++) {
            newArr.push(elements[i].dataset.color);
        }

        return newArr;
    }

    console.table(getDatasInfo(links));


    //zad 01

    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);


    for (let i = 0; i < childElements.length; i++) {
        console.log('Nazwa klasy:', childElements[i].classList);
        console.log('Nazwa tagu: ', childElements[i].tagName);
    }

    console.log(banner);

    for (let i = 0; i < blocks.length; i++) {
        console.log('Nazwa klasy:', blocks[i].classList);
        console.log('Nazwa tagu: ', blocks[i].tagName);
    }

    for (let i = 0; i < links.length; i++) {
        console.log('Nazwa klasy:', links[i].classList);
        console.log('Nazwa tagu: ', links[i].tagName);
    }


    //zad02

    console.log(blocks.innerHTML);
    console.log(blocks.outerHTML);

    const bl = document.querySelector('.blocks');
    bl.innerHTML = 'Nowa wartość diva o klasie blocks';

    // innerHTML wyswietla strukture dom wewnatrz elementu a outerHTML wyswietla wraz z elementem



    //zad03

    const mainFooter = document.querySelector('#mainFooter');
    console.log(mainFooter);

    function getId(element) {
        const id = element.getAttribute('id');
        console.log(id);
        return id;
    }

    getId(mainFooter);


    //zad04

    function getTags(elements) {
        const newArr = [];
        for (let i = 0; i < elements.length; i++) {
            newArr.push(elements[i].tagName);
        }
        console.log(newArr);
        return newArr;
    }

    getTags(childElements);


    //zad05

    function getClassInfo(element) {
        console.log(element.classList);
        return element.classList;
    }

    getClassInfo(banner);


    //zad06

    const li = document.querySelectorAll('nav li');
    console.log(li);
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.direction === undefined) {
                elements[i].dataset.direction = 'top';
            }
            console.log(elements[i].dataset.direction);
        }
    }

    setDataDirection(li);

});
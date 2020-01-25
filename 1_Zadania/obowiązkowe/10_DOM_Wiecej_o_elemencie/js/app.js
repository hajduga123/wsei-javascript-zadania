document.addEventListener("DOMContentLoaded", function () {
    //Zadanie 0
    function exerciseZero() {
        const _data = document.querySelectorAll('.ex5 ul li')
        console.log(_data)
        for (let counter = 0; counter < _data.length; counter++) {
            if (counter % 2 == 0) {
                _data[counter].style.backgroundColor = 'green'
            }

            if (counter % 5 === 0) {
                _data[counter].classList.add('.big')
                console.log(_data)
            }

            if (counter % 3 === 0) {
                _data[counter].style.borderBottom = '3px solid'
            }
        }

        return _data
    }
    exerciseZero()

    //Zadanie 1
    function excerciseOne() {
        const edgeLink = "https://www.microsoft.com/pl-pl/windows/microsoft-edge"
        const firefoxLink = "https://www.mozilla.org/pl/firefox/new/"

        let edge = document.querySelector('.edge')
        edge.style.backgroundImage = "url('assets/img/edge.png')"

        let firefox = document.querySelector('.firefox')
        firefox.style.backgroundImage = "url('assets/img/firefox.png')"

        let chrome = document.querySelector('.chrome')
        chrome.style.width = "100px"

        chrome.parentElement.querySelector('a').innerHTML = "Chrome"
        edge.parentElement.querySelector('a').innerHTML = "Microsoft Edge"
        firefox.parentElement.querySelector('a').innerHTML = "Firefox"

        edge.parentElement.querySelector('a').setAttribute("href", edgeLink)
        firefox.parentElement.querySelector('a').setAttribute("href", firefoxLink)
    }
    excerciseOne()

    //Zadanie 2
    function excerciseTwo() {
        const _spanName = document.querySelectorAll('.ex2 ul li span')[0]
        const _spanColor = document.querySelectorAll('.ex2 ul li span')[1]
        const _spanX = document.querySelectorAll('.ex2 ul li span')[2]

        _spanName.innerHTML = 'Sebastian'
        _spanColor.innerHTML = 'Czerwony'
        _spanX.innerHTML = 'Pizza'

        return _spanName, _spanColor, _spanX
    }
    excerciseTwo()

    //Zadanie 3
    function excerciseThree() {
        const menu = document.querySelector('.ex3 ul')
        menu.classList.add('menu')

        const menuElement = document.querySelector('.ex3 ul li')
        Array.prototype.forEach.call(menuElement, element => {
            element.classList.add('menuElement')
        });

        const errorClass = document.querySelector('.error')
        Array.prototype.forEach.call(errorClass, element => {
            element.classList.remove('error')
        });
    }
    excerciseThree();

    //Zadanie 4
    function exerciseFour() {
        let list = document.querySelectorAll('.ex4 ul li')
        for (let index = 0; index < list.length; index++) {
            list[index].setAttribute('data-id', index + 1)
        }

        return list
    }
    console.log(exerciseFour())
});
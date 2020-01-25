document.addEventListener('DOMContentLoaded', function () {

    const divs = document.querySelectorAll('.box');

    divs.forEach(div => {
        div.addEventListener('click', function () {
            this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    });


});
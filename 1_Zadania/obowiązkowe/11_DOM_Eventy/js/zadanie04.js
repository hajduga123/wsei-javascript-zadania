window.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button');
    var span = document.querySelector('p > span');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            var tmp = span.innerHTML;
            span.innerHTML = ++tmp;
        })
    }
});
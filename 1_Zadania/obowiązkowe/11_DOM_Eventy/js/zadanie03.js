document.addEventListener('DOMContentLoaded', function () {

    const btns = document.querySelectorAll('button');
    const counters = document.querySelectorAll('.counter');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            let old = counters[i].innerHTML;
            old++;
            counters[i].innerHTML = old;
        });
    }

});
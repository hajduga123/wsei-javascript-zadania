window.addEventListener('DOMContentLoaded', function () {
    var globalX = document.querySelector('#globalX'),
        globalY = document.querySelector('#globalY'),
        localX = document.querySelector('#localX'),
        localY = document.querySelector('#localY');


    document.addEventListener('mousemove', function (event) {
        globalX.textContent = event.clientX;
        globalY.textContent = event.clientY;
    });

    document.getElementById('box').addEventListener('mousemove', function (event) {
        localX.textContent = event.clientX - globalX.textContent;
        localY.textContent = event.clientY - globalY.textContent;
    })
});
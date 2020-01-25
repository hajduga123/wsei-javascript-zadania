document.addEventListener('DOMContentLoaded', function () {

    const width = document.querySelector('#windowWidth');
    const height = document.querySelector('#windowHeight');

    window.addEventListener('resize', function () {
        width.innerHTML = this.innerWidth;
        height.innerHTML = this.innerHeight;
    });

});
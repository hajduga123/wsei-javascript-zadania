window.addEventListener('DOMContentLoaded', (event) => {
    var parents = document.querySelectorAll('div[class="parent"]');

    for (let i = 0; i < parents.length; i++) {
        parents[i].addEventListener('mouseover', () => {
            var children = parents[i].querySelector('div[class="children"]');
            children.style.display = 'block';

            // 0b
            // showChildrenElement(parents[i]);
        });
        parents[i].addEventListener('mouseout', () => {
            var children = parents[i].querySelector('div[class="children"]');
            children.style.display = 'none';

            // 0b
            // hideChildrenElement(parents[i]);
        })
    }

    // 0b
    function hideChildrenElement(el) {
        el.getElementsByClassName('children')[0].style.display = 'none';
    }
    function showChildrenElement(el) {
        el.getElementsByClassName('children')[0].style.display = 'block';
    }
});
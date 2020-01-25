const button = document.querySelector('.button')

button.addEventListener("click", function () {
    this.parentElement.removeChild(button)
})
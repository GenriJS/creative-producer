const words = ['идею', 'проект', 'вакансию', 'продукт', 'задачу', 'оффер'];
let currentIndex = 0;

function changeWord() {
    const span = document.getElementById('dynamic-word');
    span.classList.add('rotate');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        span.textContent = words[currentIndex];
        span.classList.remove('rotate');
    }, 400);
}

setInterval(changeWord, 2500);

changeWord();
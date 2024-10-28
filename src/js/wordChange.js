const words = ['идею', 'проект', 'вакансию', 'продукт', 'задачу', 'оффер'];
let currentIndex = 0;

function changeWord() {
    const span = document.getElementById('dynamic-word');
    span.classList.remove('fade-in');
    span.classList.add('fade');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        span.textContent = words[currentIndex];
        span.classList.remove('fade');
        span.classList.add('fade-in');
    }, 500);
}

setInterval(changeWord, 2000);

changeWord();
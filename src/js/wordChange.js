const words = {
    ru: ['идею', 'проект', 'вакансию', 'продукт', 'задачу', 'оффер'],
    en: ['idea', 'project', 'vacancy', 'product', 'task', 'offer'],
  };
  
  let currentIndex = 0;
  
  function changeWord() {
    const span = document.getElementById('dynamic-word');
    span.classList.add('rotate');
  
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % words[currentLanguage].length;
      span.textContent = words[currentLanguage][currentIndex];
      span.classList.remove('rotate');
    }, 400);
  }
  
  setInterval(changeWord, 2500);
  
  changeWord();
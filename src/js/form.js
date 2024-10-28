document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
  
    fetch('https://vladislavpodolian.com/server.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            alert('Ошибка сервера');
            throw new Error('Ошибка сети');
        }
        return response.text();
    })
    .then(() => {
        const modalWindow = document.querySelector('.fullscreen-container');
        modalWindow.style.display = "flex";
        document.body.style.overflow = "hidden";; 
    })
    .catch(error => {
        alert('Произошла ошибка при отправке данных: ' + error.message);
        console.error('Error:', error);
    });
  });
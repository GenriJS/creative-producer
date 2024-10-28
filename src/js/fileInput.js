document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById('file-input');
  const label = document.getElementById('file-label');

  fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
      label.textContent = 'файл прикреплен';
    } else {
      label.textContent = 'прикрепить бриф';
    }
  });
});
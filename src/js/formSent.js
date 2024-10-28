document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener("click", () => {
    const modalWindow = document.querySelector('.fullscreen-container');
    modalWindow.style.display = "none";
    document.body.style.overflow = '';
  });
});
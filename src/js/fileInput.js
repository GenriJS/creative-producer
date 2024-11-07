document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file-input");
  const fileLabel = document.getElementById("file-label");
  const form = document.getElementById("contacts");

  form.addEventListener("dragover", (event) => {
    event.preventDefault();
    fileLabel.classList.add("drag-over");
  });

  form.addEventListener("dragleave", () => {
    fileLabel.classList.remove("drag-over");
  });

  form.addEventListener("drop", (event) => {
    event.preventDefault();
    fileLabel.classList.remove("drag-over");

    const files = event.dataTransfer.files;
    fileInput.files = files;

    const fileNames = Array.from(files).map(file => file.name).join(", ");
    fileLabel.textContent = `Файлы: ${fileNames}`;
  });

});
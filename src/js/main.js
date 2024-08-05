import './downloadPdf.js';
import './ripple.js';

document.addEventListener('DOMContentLoaded', () => {
  const editableElements = document.querySelectorAll('.editable');
  const modal = document.querySelector('#editModal');
  const modalInput = document.querySelector('#modalInput');
  const modalSave = document.querySelector('#save-button');
  const modalCancel = document.querySelector('#cancel-button');
  let currentElement;

  editableElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      currentElement = event.target;
      modalInput.value = currentElement.textContent.trim();
      modal.classList.add('active');
    });
  });

  modalSave.addEventListener('click', () => {
    if (currentElement) {
      currentElement.textContent = modalInput.value;
      currentElement.classList.add('animation');
      modal.classList.remove('active');

      const data = JSON.parse(localStorage.getItem('t-lab-resumeData')) || {};
      data[currentElement.id] = currentElement.textContent;
      localStorage.setItem('t-lab-resumeData', JSON.stringify(data));
    }
  });

  modalCancel.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem('t-lab-resumeData'));
    if (data) {
      editableElements.forEach((element) => {
        if (data[element.id]) {
          element.textContent = data[element.id];
        }
      });
    }
  };

  loadData();

  editableElements.forEach((element) => {
    element.addEventListener('animationend', () => {
      element.classList.remove('animation');
    });
  });

  document.querySelectorAll('.languages__level').forEach((bar) => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--progress', level);
  });
});

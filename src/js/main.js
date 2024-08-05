// import { createInterestsBox } from './interests';
import './downloadPdf.js';
import './ripple.js';

// const resume = document.querySelector('.resume');
// const interestsBox = createInterestsBox();
// resume.append(interestsBox);

document.addEventListener('DOMContentLoaded', () => {
  const editableElements = document.querySelectorAll('.editable');
  const modal = document.querySelector('#editModal');
  const modalInput = document.querySelector('#modalInput');
  const modalSave = document.querySelector('#modalSave');
  const modalCancel = document.querySelector('#modalCancel');
  let currentElement;

  editableElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      currentElement = event.target;
      modalInput.value = currentElement.textContent;
      modal.classList.add('active');
    });
  });

  modalSave.addEventListener('click', () => {
    if (currentElement) {
      currentElement.textContent = modalInput.value;
      currentElement.classList.add('animation');
      modal.classList.remove('active');

      // Сохранение в LocalStorage
      const data = JSON.parse(localStorage.getItem('resumeData')) || {};
      data[currentElement.id] = currentElement.textContent;
      localStorage.setItem('resumeData', JSON.stringify(data));
    }
  });

  modalCancel.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem('resumeData'));
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

// const prefix = 't-lab-';

// const loadData = () => {
//   document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
//     const id = element.id;
//     const savedText = localStorage.getItem(prefix + id);
//     if (savedText) {
//       element.textContent = savedText;
//     }
//   });
// };

// const saveData = (event) => {
//   const element = event.target;
//   const id = element.id;
//   const text = element.textContent;
//   localStorage.setItem(prefix + id, text);
// };

// document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
//   element.addEventListener('input', saveData);
// });

// loadData();
// });

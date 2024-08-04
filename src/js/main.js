// import { createInterestsBox } from './interests';
import './downloadPdf.js';

// document.querySelector('.edit-button').addEventListener('click', () => {
//   document.querySelectorAll('[contenteditable]').forEach((element) => {
//     element.setAttribute('contenteditable', element.getAttribute('contenteditable') === 'false' ? 'true' : 'false');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // const resume = document.querySelector('.resume');
  // const interestsBox = createInterestsBox();
  // resume.append(interestsBox);

  const loadData = () => {
    document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
      const id = element.id;
      const savedText = localStorage.getItem(id);
      if (savedText) {
        element.textContent = savedText;
      }
    });
  };

  const saveData = () => {
    document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
      const id = element.id;
      const text = element.textContent;
      localStorage.setItem(id, text);
    });
  };

  document.querySelectorAll('.languages__level').forEach((bar) => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--progress', level);
  });

  document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
    element.addEventListener('input', saveData);
  });

  loadData();
});

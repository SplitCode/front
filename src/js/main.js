// import { createInterestsBox } from './interests';

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

  // document.getElementById('download-btn').addEventListener('click', () => {
  //   html2pdf(document.querySelector('.resume'), {
  //     margin: 1,
  //     filename: 'resume.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  //   });
  // });

  document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
    element.addEventListener('input', saveData);
  });

  loadData();
});

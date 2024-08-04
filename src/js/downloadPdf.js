import html2pdf from 'html2pdf.js';

const downloadButton = document.querySelector('.download-button');
downloadButton.addEventListener('click', () => {
  const resume = document.getElementById('resume');
  const opt = {
    margin: 0.5,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };
  html2pdf().from(resume).set(opt).save();
});

console.log('test');
document.querySelectorAll('.progress-bar').forEach((bar) => {
  const level = bar.getAttribute('data-level');
  bar.style.setProperty('--progress', level);
});

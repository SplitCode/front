console.log('test');
document.querySelectorAll('.language__level').forEach((bar) => {
  const level = bar.getAttribute('data-level');
  bar.style.setProperty('--progress', level);
});

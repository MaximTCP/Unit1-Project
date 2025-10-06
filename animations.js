// Ensure blur animation can be re-run safely
window.runBlurAnimation = function() {
  try {
    initBlurAnimation();
  } catch (e) {
    console.warn('runBlurAnimation failed', e);
  }
};

// Re-apply blur animation when page becomes visible again
window.addEventListener('pageshow', () => {
  setTimeout(() => window.runBlurAnimation(), 100);
});
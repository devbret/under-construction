function headerResize() {
  const headerSqueeze = document.querySelectorAll('.headerSqueeze')[0];
  const hOneElement = document.querySelector('h1');
  const subtext = document.querySelector('#subtext');
  let hOneFontSize = 66;
  let subtextFontSize = 20;
  window.addEventListener('load', () => {
    if (hOneElement.offsetWidth >= headerSqueeze.offsetWidth - 60) {
      while (hOneElement.offsetWidth >= headerSqueeze.offsetWidth - 60) {
        hOneElement.style.fontSize = `${(hOneFontSize -= 1)}px`;
      }
      while (subtext.offsetWidth >= headerSqueeze.offsetWidth - 60) {
        subtext.style.fontSize = `${(subtextFontSize -= 1)}px`;
      }
    }
  });
  window.addEventListener('resize', () => {
    if (hOneElement.offsetWidth >= headerSqueeze.offsetWidth - 60) {
      while (hOneElement.offsetWidth >= headerSqueeze.offsetWidth - 60) {
        hOneElement.style.fontSize = `${(hOneFontSize -= 1)}px`;
      }
      while (subtext.offsetWidth >= headerSqueeze.offsetWidth - 60) {
        subtext.style.fontSize = `${(subtextFontSize -= 1)}px`;
      }
    }
    if (hOneElement.offsetWidth <= headerSqueeze.offsetWidth - 60) {
      while (
        hOneElement.offsetWidth <= headerSqueeze.offsetWidth - 60 &&
        hOneFontSize < 66
      ) {
        hOneElement.style.fontSize = `${(hOneFontSize += 1)}px`;
      }
      while (
        subtext.offsetWidth <= headerSqueeze.offsetWidth - 60 &&
        subtextFontSize < 20
      ) {
        subtext.style.fontSize = `${(subtextFontSize += 1)}px`;
      }
    }
  });
}
headerResize();

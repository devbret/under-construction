(function mainInit(win, doc) {
  // Background coloring resize logic.
  const b = doc.querySelector('body');
  const bgColoring = doc.querySelector('#bgColoring');
  win.addEventListener('load', () => {
    const w = win.innerWidth;
    if (w > 990) {
      bgColoring.style.display = 'block';
      const bHeight = b.clientHeight;
      bgColoring.style.height = `${bHeight + 55}px`;
      bgColoring.style.zIndex = '-10000000';
    } else {
      bgColoring.style.display = 'none';
      bgColoring.style.zIndex = '-10000000';
    }
  });
  win.addEventListener('resize', () => {
    const w = win.innerWidth;
    if (w > 990) {
      bgColoring.style.display = 'block';
      const bHeight = b.clientHeight;
      bgColoring.style.height = `${bHeight + 55}px`;
      bgColoring.style.zIndex = '-10000000';
    } else {
      bgColoring.style.display = 'none';
      bgColoring.style.zIndex = '-10000000';
    }
  });
  // Image manipulation logic.
  const meImage = doc.querySelector('#meImage');
  const hueRotateSlider = doc.querySelector('#hueRotateSlider');
  const saturateSlider = doc.querySelector('#saturateSlider');
  const contrastSlider = doc.querySelector('#contrastSlider');
  const brightnessSlider = doc.querySelector('#brightnessSlider');
  const resetButton = doc.querySelector('#resetButton');
  hueRotateSlider.addEventListener('input', function onHueRotateSliderInput() {
    meImage.style.filter = `hue-rotate(${this.value}deg) saturate(${saturateSlider.value}%) contrast(${contrastSlider.value}%) brightness(${brightnessSlider.value}%)`;
  });
  saturateSlider.addEventListener('input', function onSaturateSliderInput() {
    meImage.style.filter = `hue-rotate(${hueRotateSlider.value}deg) saturate(${this.value}%) contrast(${contrastSlider.value}%) brightness(${brightnessSlider.value}%)`;
  });
  contrastSlider.addEventListener('input', function onContrastSliderInput() {
    meImage.style.filter = `hue-rotate(${hueRotateSlider.value}deg) saturate(${saturateSlider.value}%) contrast(${this.value}%) brightness(${brightnessSlider.value}%)`;
  });
  brightnessSlider.addEventListener('input', function onBrightnessSliderInput() {
    meImage.style.filter = `hue-rotate(${hueRotateSlider.value}deg) saturate(${saturateSlider.value}%) contrast(${contrastSlider.value}%) brightness(${this.value}%)`;
  });
  resetButton.addEventListener('click', () => {
    meImage.style.filter = 'hue-rotate(0deg) saturate(100%) contrast(100%) brightness(100%)';
    hueRotateSlider.value = '0';
    saturateSlider.value = '100';
    contrastSlider.value = '100';
    brightnessSlider.value = '100';
  });
  // Image resizing logic.
  win.addEventListener('load', () => {
    const imgWidth = meImage.clientWidth;
    meImage.style.width = '100%';
    meImage.style.maxHeight = `${imgWidth}px`;
  });
  win.addEventListener('resize', () => {
    const imgWidth = meImage.clientWidth;
    meImage.style.width = '100%';
    meImage.style.maxHeight = `${imgWidth}px`;
  });
  // Time logic.
  const timer = doc.querySelector('#timer');
  const then = new Date(2021, 0, 17);
  const now = new Date();
  timer.innerHTML = `This website was first launched <b>${((now.getTime() - then.getTime()) / 86400000).toFixed(4)} days</b> ago.`;
  setInterval(() => {
    const intervalNow = new Date();
    timer.innerHTML = `This website was first launched <b>${((intervalNow.getTime() - then.getTime()) / 86400000).toFixed(4)} days</b> ago.`;
  }, 1000);
}(window, document));

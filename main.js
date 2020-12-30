function main() {
    //Time logic.
    const timer = document.querySelector(`#timer`);
    const then = new Date(2021, 1, 1);
    const now = new Date();
    timer.innerHTML = `Which means there are exactly <b>${((then.getTime() - now.getTime()) / 86400000).toFixed(4)} days</b> left for me to finish building my portfolio.`;
    const masterInterval = setInterval(function(){
        const now = new Date();
        timer.innerHTML = `Which means there are exactly <b>${((then.getTime() - now.getTime()) / 86400000).toFixed(4)} days</b> left for me to finish building my portfolio.`;
    },1000);
    //Image manipulation logic.
    const meImage = document.querySelector(`#meImage`);
    const hueRotateSlider = document.querySelector(`#hueRotateSlider`);
    const saturateSlider = document.querySelector(`#saturateSlider`);
    const contrastSlider = document.querySelector(`#contrastSlider`);
    const brightnessSlider = document.querySelector(`#brightnessSlider`);
    const resetButton = document.querySelector(`#resetButton`);
    hueRotateSlider.addEventListener(`input`, function(){
        meImage.style.filter = `hue-rotate(${this.value}deg) saturate(${saturateSlider.value}%) contrast(${contrastSlider.value}%) brightness(${brightnessSlider.value}%)`;
    });
    saturateSlider.addEventListener(`input`, function(){
        meImage.style.filter = `hue-rotate(${hueRotateSlider.value}deg) saturate(${this.value}%) contrast(${contrastSlider.value}%) brightness(${brightnessSlider.value}%)`;
    });
    contrastSlider.addEventListener(`input`, function(){
        meImage.style.filter = `hue-rotate(${hueRotateSlider.value}deg) saturate(${saturateSlider.value}%) contrast(${this.value}%) brightness(${brightnessSlider.value}%)`;
    });
    brightnessSlider.addEventListener(`input`, function(){
        meImage.style.filter = `hue-rotate(${hueRotateSlider.value}deg) saturate(${saturateSlider.value}%) contrast(${contrastSlider.value}%) brightness(${this.value}%)`;
    });
    resetButton.addEventListener(`click`, function(){
        meImage.style.filter = `hue-rotate(0deg) saturate(100%) contrast(100%) brightness(100%)`;
        hueRotateSlider.value = `0`;
        saturateSlider.value = `100`;
        contrastSlider.value = `100`;
        brightnessSlider.value = `100`;
    });
}
main();

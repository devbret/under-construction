function main() {
    const b = document.querySelector(`body`);
    const gameContainer = document.querySelector(`#gameContainer`);
    const projectOne = document.querySelector(`#projectOne`);
    const frame = document.querySelector(`#frame`);
    const gamesHeader = document.querySelector(`#gamesHeader`);
    window.addEventListener(`load`, function(){
        const w = window.innerWidth;
        const bW = b.clientWidth;
        if (w < 330) {
            gameContainer.style.width = `${bW}px`;
            projectOne.style.width = `${bW}px`;
            frame.style.width = `${bW}px`;
            gamesHeader.style.width = `${bW}px`;
        } else {
            gameContainer.style.width = `100%`;
            projectOne.style.width = `300px`;
            frame.style.width = `300px`;
            gamesHeader.style.width = `300px`;
        }
    });
    window.addEventListener(`resize`, function(){
        const w = window.innerWidth;
        const bW = b.clientWidth;
        if (w < 330) {
            gameContainer.style.width = `${bW}px`;
            projectOne.style.width = `${bW}px`;
            frame.style.width = `${bW}px`;
            gamesHeader.style.width = `${bW}px`;
        } else {
            gameContainer.style.width = `100%`;
            projectOne.style.width = `300px`;
            frame.style.width = `300px`;
            gamesHeader.style.width = `300px`;
        }
    });
}
main();
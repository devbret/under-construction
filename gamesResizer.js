function main() {
  const gameContainer = document.querySelector('#gameContainer');
  const projectOne = document.querySelector('#projectOne');
  const frame = document.querySelector('#frame');
  const gamesHeader = document.querySelector('#gamesHeader');
  window.addEventListener('load', () => {
    const w = window.innerWidth;
    if (w < 360) {
      gameContainer.style.width = `100%`;
      projectOne.style.width = `${gameContainer.clientWidth - 30}px`;
      frame.style.width = `${gameContainer.clientWidth - 30}px`;
      gamesHeader.style.width = `${gameContainer.clientWidth - 30}px`;
    } else {
      gameContainer.style.width = '100%';
      projectOne.style.width = `${gameContainer.clientWidth - 30}px`;
      frame.style.width = `${gameContainer.clientWidth - 30}px`;
      gamesHeader.style.width = `${gameContainer.clientWidth - 30}px`;
    }
  });
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    if (w < 360) {
      gameContainer.style.width = `100%`;
      projectOne.style.width = `${gameContainer.clientWidth - 30}px`;
      frame.style.width = `${gameContainer.clientWidth - 30}px`;
      gamesHeader.style.width = `${gameContainer.clientWidth - 30}px`;
    } else {
      gameContainer.style.width = '100%';
      projectOne.style.width = `${gameContainer.clientWidth - 30}px`;
      frame.style.width = `${gameContainer.clientWidth - 30}px`;
      gamesHeader.style.width = `${gameContainer.clientWidth - 30}px`;
    }
  });
}
main();

function main() {
  const b = document.querySelector('body');
  const gameContainer = document.querySelector('#gameContainer');
  const projectOne = document.querySelector('#projectOne');
  const frame = document.querySelector('#frame');
  const gamesHeader = document.querySelector('#gamesHeader');
  window.addEventListener('load', () => {
    const w = window.innerWidth;
    const bW = b.clientWidth;
    if (w < 360) {
      gameContainer.style.width = `${bW - 30}px`;
      projectOne.style.width = `${bW - 30}px`;
      frame.style.width = `${bW - 30}px`;
      gamesHeader.style.width = `${bW - 30}px`;
    } else {
      gameContainer.style.width = '100%';
      projectOne.style.width = '300px';
      frame.style.width = '300px';
      gamesHeader.style.width = '300px';
    }
  });
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const bW = b.clientWidth;
    if (w < 360) {
      gameContainer.style.width = `${bW - 30}px`;
      projectOne.style.width = `${bW - 30}px`;
      frame.style.width = `${bW - 30}px`;
      gamesHeader.style.width = `${bW - 30}px`;
    } else {
      gameContainer.style.width = '100%';
      projectOne.style.width = '300px';
      frame.style.width = '300px';
      gamesHeader.style.width = '300px';
    }
  });
}
main();

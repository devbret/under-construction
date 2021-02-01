function main() {
    //Main program variables.
    const h = document.querySelector(`.headerSqueeze`);
    const m = document.querySelector(`#m`);
    //Support function for random numbers.
    function rgbRandom(){
        return Math.floor(Math.random() * 255);
    }
    //The function responsible for generating random colored blocks.
    function generateSquares(){
        //Clears the body element of any previous contents.
        //m.innerHTML = ``;
        //Creates the size of the "m" frame.
        const wd = h.offsetWidth;
        const ht = h.offsetHeight;
        m.style.width = `${wd}px`;
        m.style.height = `${ht}px`;
        //Where the main action takes place. Creating ten rows within the main element via a for loop.
        for (let i = 0; i < 10; i++) {
            const row = document.createElement(`div`);
            //Assigning a class and appending each row to the main element.
            row.classList.add(`rows`);
            m.appendChild(row);
            //Setting a counter variable to manage the size of each inner block.
            let remainder = 100;
            //Looping to create inner blocks while there is still space to house/frame them.
            while (remainder > 0) {
                //Assigning a random number (no larger than ten) to the value rN and subtracting that value from the remainder variable.
                const rN = Math.floor(Math.random() * 10);
                remainder -= rN;
                //Creating an inner block, assigning its class and appending it within the appropriate row div.
                const block = document.createElement(`div`);
                block.classList.add(`blocks`);
                row.appendChild(block);
                //Creating a random color for the background of the each block.
                block.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()},${rgbRandom()})`;
                //Correctly sizing the inner block, based on how much space is left available.
                if (remainder > 0) {
                    block.style.width = `${rN}%`;
                } else {
                    block.style.width = `${rN - remainder}%`;
                }
                //Update the info paragraph element with each block's respective width.
                block.addEventListener(`mouseover`, function(){
                    innerP.innerHTML = `${block.offsetWidth}px wide`;
                });
            }
        }
    }
    generateSquares();
    //Resizing logic.
    window.addEventListener(`load`, function(){
        const hW = h.offsetWidth;
        const hH = h.offsetHeight;
        if (hW <= 943) {
            m.style.width = `${hW}px`;
            m.style.height = `${hH}px`;
        } else {
            m.style.width = `${hW}px`;
            m.style.height = `${hH}px`;
        }
    });
    window.addEventListener(`resize`, function(){
        const hW = h.offsetWidth;
        const hH = h.offsetHeight;
        if (hW <= 943) {
            m.style.width = `${hW}px`;
            m.style.height = `${hH - 5}px`;
        } else {
            m.style.width = `${hW}px`;
            m.style.height = `${hH}px`;
        }
    });
}
main();
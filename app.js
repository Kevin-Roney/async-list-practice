// import functions and grab DOM elements
import { getAllBands } from './fetch-utils.js';
import { renderBands } from './render-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const bandsListEl = document.querySelector('.bands');

window.addEventListener('load', async () => {
    fetchAndDisplayBands();
    fetchAndDisplayCandies();
    fetchAndDisplayCars();
    fetchAndDisplayInstruments();
});

async function fetchAndDisplayBands() {
    const bands = await getAllBands();
    for (let band of bands) {
        const bandEl = renderBands(band);
        bandsListEl.append(bandEl);
    }
}
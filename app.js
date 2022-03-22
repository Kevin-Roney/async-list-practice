// import functions and grab DOM elements
import { getAllBands } from './fetch-utils.js';
import { renderBands } from './render-utils.js';
import { getAllCandies } from './fetch-utils.js';
import { renderCandies } from './render-utils.js';
import { getAllCars } from './fetch-utils.js';
import { renderCars } from './render-utils.js';
import { getAllInstruments } from './fetch-utils.js';
import { renderInstruments } from './render-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const bandsListEl = document.querySelector('.bands');
const candiesListEl = document.querySelector('.candies');
const carsListEl = document.querySelector('.cars');
const instrumentsListEl = document.querySelector('.instruments');

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
async function fetchAndDisplayCandies() {
    const candies = await getAllCandies();
    for (let candy of candies) {
        const candyEl = renderCandies(candy);
        candiesListEl.append(candyEl);
    }
}
async function fetchAndDisplayCars() {
    const cars = await getAllCars();
    for (let car of cars) {
        const carEl = renderCars(car);
        carsListEl.append(carEl);
    }
}
async function fetchAndDisplayInstruments() {
    const instruments = await getAllInstruments();
    for (let instrument of instruments) {
        const instrumentEl = renderInstruments(instrument);
        instrumentsListEl.append(instrumentEl);
    }
}
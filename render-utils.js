export function renderBands(bands) {
    const bandEl = document.createElement('div');
    const namesEl = document.createElement('h2');
    const genreEl = document.createElement('p');
    const subgenreEl = document.createElement('p');
    const foundedEl = document.createElement('p');

    bandEl.classList.add('bands');
    
    namesEl.textContent = bands.name;
    genreEl.textContent = bands.genre;
    subgenreEl.textContent = bands.subgenre;
    foundedEl.textContent = bands.year_founded;

    bandEl.append(
        namesEl,
        genreEl,
        subgenreEl,
        foundedEl
    );

    return bandEl;
}

export function renderCandies(candies) {
    const candyEl = document.createElement('div');
    const namesEl = document.createElement('h2');
    const brandEl = document.createElement('p');
    const categoryEl = document.createElement('ul');
    const yearEl = document.createElement('p');

    candyEl.classList.add('candies');
    
    namesEl.textContent = candies.name;
    brandEl.textContent = candies.brand;
    yearEl.textContent = candies.year;

    for (let category of candies.category) {
        const li = document.createElement('li');
        li.textContent = category;
        categoryEl.appendChild(li);
    }

    candyEl.append(
        namesEl,
        brandEl,
        categoryEl,
        yearEl
    );

    return candyEl;
}

export function renderCars(cars) {
    const carEl = document.createElement('div');
    const brandEl = document.createElement('h2');
    const typeEl = document.createElement('h2');
    const yearEl = document.createElement('p');
    const interiorEl = document.createElement('ul');

    carEl.classList.add('cars');
    
    brandEl.textContent = cars.brand;
    typeEl.textContent = cars.type;
    yearEl.textContent = cars.year;

    for (let interior of cars.interior) {
        const li = document.createElement('li');
        li.textContent = interior;
        interiorEl.appendChild(li);
    }

    carEl.append(
        brandEl,
        typeEl,
        yearEl,
        interiorEl
    );

    return carEl;
}

export function renderInstruments(instruments) {
    const instrumentEl = document.createElement('div');
    const namesEl = document.createElement('h2');
    const yearEl = document.createElement('p');
    const stringCountEl = document.createElement('p');

    instrumentEl.classList.add('instruments');
    
    namesEl.textContent = instruments.name;
    yearEl.textContent = instruments.year_invented;
    stringCountEl.textContent = `This instrument has ${instruments.string_count} strings!`;

    instrumentEl.append(
        namesEl,
        yearEl,
        stringCountEl,
    );

    return instrumentEl;
}
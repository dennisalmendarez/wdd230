const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');


const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank

    const dob = document.createElement('p');
    dob.textContent = `Date of Birth: ${prophet.birthdate}`;

    const birthPlace = document.createElement('p');
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    const portrait = document.createElement('img');
    portrait.src = prophet.imageUrl;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');



    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(dob);
    card.appendChild(birthPlace);

    cards.appendChild(card);
    
  })};



  async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.prophets);
    displayProphets(data.prophets);
  }
  
getProphetData();


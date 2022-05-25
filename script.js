import {pokemonArray} from './data/pokemon.js'

console.log(pokemonArray);

console.log(pokemonArray[0]);
console.log(pokemonArray[0].types[1]);

// -------------------------------------------get elements----------------------------------------------------------//
 
const container = document.querySelector('.card-container');
const button = document.querySelector('.clickButton');
console.log(container);

const addCards = (event) => {
    pokemonArray.forEach(pokemonArray => {
        container.innerHTML += `<div class="card">
        <div class="card__image">
            <img src="${pokemonArray.sprite}" alt="">
        </div>
        <div class="card__content">
          <h2 class="card__heading">${pokemonArray.name}</h2>
          <div class="card__text">'${pokemonArray.name} (#${pokemonArray.id}) is a ${pokemonArray.types[0]} & ${pokemonArray.types[1]} type pokemon. '</div>
        </div>
    </div>`
    })
}

button.addEventListener("click", addCards)
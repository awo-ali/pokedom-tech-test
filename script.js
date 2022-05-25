import {pokemonArray} from './data/pokemon.js'


// -------------------------------------------get elements----------------------------------------------------------//
 
const container = document.querySelector('.card-container');
const button = document.querySelector('.clickButton');
const inputSearch = document.querySelector('#filter');

// functions

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



// Return functions


button.addEventListener("click", addCards)

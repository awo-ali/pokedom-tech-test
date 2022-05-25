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

console.log(addCards);


const filteredArrays = addCards.filter (addCards =>{
    
        if (inputSearch = `${pokemonArray.name}`) {
         container.innerHTML += `${pokemonArray.name}`; 
        
    }
})

console.log(filteredArrays);



/*const filteredArrays = addCards.filter (addCards =>{
    addCards.forEach(addCard => {
    if (inputSearch = `${pokemonArray.name}`) {
        container.innerHTML = `${pokemonArray.name}`;   
    } 
    else if (inputSearch = `${pokemonArray.types[0]} || ${pokemonArray.types[1]}`){
        container.innerHTML = `${pokemonArray.types[0]} || ${pokemonArray.types[1]}`;
    }
    else if (inputSearch = `${pokemonArray.id}`){
        container.innerHTML = `${pokemonArray.id}`; 
    } 
    
    })*/

  
   // const filteredArrays = addCards.pokemanArray.filter (addCard => {
     //   if (inputSearch.innerHTML = `${pokemonArray.name}`) {
      //      container.innerHTML = addCard;
      //  }
   // })

// Return functions


button.addEventListener("click", addCards)
inputSearch.addEventListener("input", filteredArrays)
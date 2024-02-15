let currentYear = 2024;
let yearElement = document.querySelector('#year');
document.getElementById('year').textContent = `${currentYear}`;

// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();



/**
 * This section call choose the id pokemon list and fill it with data from json file.
 * With fetch I retrieve  all the data of each pokemon, then I create a new Pokemon object 
 */

const pokemonList = document.querySelector('#pokemonList');
const btnHeader = document.querySelectorAll( '.btn-header' );  
let URL = 'https://pokeapi.co/api/v2/pokemon/';
for(let i = 1; i <= 151; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => showPokemon(data))

}
/**
 * This function  is used to display the information about one specific Pokémon.
 * The map  method is used to iterate over an array of objects (the types of the Pokémon),  
 * creating a string that will be added as a class in the div element representing this type
 */
function showPokemon(data) {

    let pokeType = data.types.map((type) => 
        `<p class="${type.type.name} type">${type.type.name}</p>`);
    pokeType = pokeType.join('');

    let pokeId = data.id.toString();
    if (pokeId.length === 1 ){
        pokeId = '00' + pokeId;
    } else if(pokeId.length === 2){
        pokeId = '0' + pokeId;
    }    
    //This create a new  card for every Pokemon showing its name, image and type
    const div = document.createElement( "div" );
    div.classList.add('pokemon');
    div.innerHTML = `
    <div class="pokemon">
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-image">
            <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">                        
        </div>
        <div class="poke-info">
            <div class="content-name">
                <p class="poke-id">#${pokeId}</p>
                <h2 class="poke-name">${data.name}</h2>
            </div>
        <div class="poke-types">
            ${pokeType}
        </div>
        <div class="poke-stats">
            <p class="weight">${data.weight}</p>
            <p class="height">${data.height}</p>
        </div>
    </div>`;

    //Adding event listener on click to call the showPokemon specie function when clicked
    pokemonList.append(div)
}

/**
 * The btnHeader is used to iterate for each array and create a event.
 * Then , it calls the function loadPoke with the id of the button clicked.
 * 
 */
btnHeader.forEach(button => button.addEventListener("click", (event) => {
    const btnId = event.currentTarget.id;

    //This create an empty pokemon list
    pokemonList.innerHTML = '';

    //This iterate over each pokemon and return a response from page
    for(let i = 1; i <= 151; i++){
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(btnId ==='see-all'){
                    showPokemon(data);
                } else{
                    const pokeType = data.types.map(type => type.type.name); 
                    if (pokeType.some(type => type.includes(btnId))) {
                    showPokemon(data);
                    };
                };
               
            });
    
    }

}));



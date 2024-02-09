/* W05: Programming Tasks */

//const { json } = require("body-parser");

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templesList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        articleElement.appendChild(h3Element);

        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
    
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    
    try{
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        if(!response.ok){
            throw new Error('Failed to fetch temple data');
        }
        templesList = await response.json();
        displayTemples(templesList);
    } catch (error){
        console.log('Error fetching temple data', error);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

reset();

/* filterTemples Function */
const filterTemples = (temples) => {
    reset()
    let filter = document.getElementById('filtered').value;
    switch(filter){
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate)< new Date(1950,0,1)));
            break;

        case 'alphabetical':
            displayTemples(temples.slice().sort((a, b) => a.templeName.location(b.templeName)));
            break;
        case 'all':
            default:
                displayTemples(temples);

    }
};




/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () =>{filterTemples(templesList)});

getTemples();
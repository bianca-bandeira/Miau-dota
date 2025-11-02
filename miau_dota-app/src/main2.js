import './style.css'
import pets from './pets.js'

function createPet(pets){
    console.log(pets.image)
    return 
}

const petcard = document.querySelector('pets');

pets.forEach((pets) => {
    let card = createPet(pets);
    petcard.insertAdjacentHTML('beforeend', card);
});
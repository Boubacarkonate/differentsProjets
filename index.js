// const menuHamburger = document.querySelector(".menuHamburger")
// const navLinks = document.querySelector(".menuLiens")

// menuHamburger.addEventListener('click',()=>{
// navLinks.classList.toggle('mobile-menu')
// })


const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');

let count = 0;

function slideSuivante() {
    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log('droite');
}

suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    }else{
        count < nbSlide - 1
    }
    items[count].classList.add('active')
    
}

precedent.addEventListener('click', 
slidePrecedente)
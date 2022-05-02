// Menu show and hidden
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Show menu 
// Validate if constant exist
if (navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}


// Hide menu
// Validate if constant exist
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu movil
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Accordion skills 
const skillsContent = document.getElementsByClassName('skills__content')
console.log(skillsContent)
const skillsHeader = document.querySelectorAll('.skills__header')
console.log(skillsHeader)

function toggleSkills() {
    let itemClass = this.parentNode.className
    
    for (i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



// Exercice n°01 :
// Cibler les H2
// Afficher chaque H2 dans la console (sans modifier l'HTML).

// Exercice n°02 : (nous n'avons pas encore vu ça mais c'est accessible quand même).
// Afficher le contenu (ce qui se trouve entre les balises) de chaque H2 dans la console.
// Il faut vous aider de la documentation est des propriétés ou méthodes associées aux Elements.

const body = document.body;
let darkModeBtn = document.querySelector(".darkmode");
darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("darkModeIsActive")
})

document.addEventListener("DOMContentLoaded", () => {
    let buttonImgSize = document.querySelector(".makeBigger");
    let changeImg = document.querySelector("img");
    let isBigger = false;
    buttonImgSize.addEventListener("click", () => {
        if (isBigger) {
            changeImg.setAttribute("src", "./src/img/small.jpg")
            buttonImgSize.innerText = "Agrandir l'image";
        } else {
            changeImg.setAttribute("src", "./src/img/Big.jpg")
            buttonImgSize.innerText = "Retrecir l'image"
        }

        isBigger = !isBigger
    })
});



let afficherPlus = document.querySelector(".showMore")
let BtnAfficherPlus = document.querySelector(".loadMore")
let isHidden = false;
BtnAfficherPlus.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (isHidden) {
        afficherPlus.setAttribute("style", "display :none")
        BtnAfficherPlus.innerText = "Afficher +";
    } else {
        afficherPlus.setAttribute("style", "none")
        BtnAfficherPlus.innerText = "Afficher -"
    }


    isHidden = !isHidden
});

let textParag = document.querySelector("#seText")
let contenu = textParag.getAttribute("value");
let btn = document.querySelector("#displayOnPage")
btn.addEventListener("click", () => {
    textParag.setAttribute("value", "");
    console.log(contenu)

})

// Sélectionner l'élément avec l'ID "flèche"
let flèche = document.querySelector("#flèche");

// Déclarer une variable pour stocker la dernière position de défilement
var lastScrollPosition = 0;

// Ajouter un écouteur d'événement "scroll" à la fenêtre
window.addEventListener("scroll", () => {
    // Mettre à jour la valeur de la dernière position de défilement avec la position actuelle du défilement vertical
    lastScrollPosition = window.scrollY;
    console.log(lastScrollPosition); // Afficher la dernière position de défilement dans la console
    
    // Vérifier si la dernière position de défilement est supérieure à 100
    if (lastScrollPosition > 100) {
        // Si oui, définir l'attribut "id" de l'élément "flèche" sur "flèche2"
        flèche.setAttribute("id", "flèche2");
    } else if (lastScrollPosition < 99) {
        // Sinon, si la dernière position de défilement est inférieure à 99
        // Définir l'attribut "id" de l'élément "flèche" sur "flèche"
        flèche.setAttribute("id", "flèche");
    }
});




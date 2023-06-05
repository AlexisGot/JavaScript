// - Burger Menu
// Crée un nouvel élément bouton
let burgerIcon = document.createElement("button");

// Sélectionne l'élément <nav> existant dans le document
let nav = document.querySelector("nav");

// Sélectionne l'élément <ul> existant dans le document
let ul = document.querySelector("ul");

// Ajoute un gestionnaire d'événements pour le redimensionnement de la fenêtre
window.addEventListener("resize", () => {
    // Vérifie si la largeur de la fenêtre est inférieure ou égale à 1025 pixels
    if (window.innerWidth <= 1025) {
        // Vérifie si l'élément burgerIcon n'est pas déjà présent dans l'élément nav
        if (!nav.contains(burgerIcon)) {
            // Ajoute l'élément burgerIcon à l'élément nav
            nav.appendChild(burgerIcon);
        } else {
            // Aucune action n'est nécessaire si burgerIcon est déjà présent dans nav
        }
    } else {
        // Supprime l'élément burgerIcon de nav si la largeur de la fenêtre est supérieure à 1025 pixels
        burgerIcon.remove();
    }
});

// Ajoute un gestionnaire d'événements pour le chargement de la page
window.addEventListener("load", () => {
    // Vérifie si la largeur de la fenêtre est inférieure ou égale à 1025 pixels
    // et si burgerIcon n'est pas déjà présent dans nav
    if (window.innerWidth <= 1025) {
        // Vérifie si l'élément burgerIcon n'est pas déjà présent dans l'élément nav
        if (!nav.contains(burgerIcon)) {
            // Ajoute l'élément burgerIcon à l'élément nav
            nav.appendChild(burgerIcon);
        } else {
            // Aucune action n'est nécessaire si burgerIcon est déjà présent dans nav
        }
    } else {
        // Supprime l'élément burgerIcon de nav si la largeur de la fenêtre est supérieure à 1025 pixels
        burgerIcon.remove();
    }
});

// Ajoute un gestionnaire d'événements pour le clic sur burgerIcon
burgerIcon.addEventListener("click", () => {
    // Ajoute ou supprime la classe "open" de l'élément ul
    ul.classList.toggle("open");
    burgerIcon.classList.toggle("active");
})

//- Modale -
// Sélectionne tous les éléments de la page avec la classe HTML "loupe" et les stocke dans la variable "loupes"
let loupes = document.querySelectorAll(".loupe");

// Sélectionne le premier élément de la page avec la classe HTML "imgBook" et le stocke dans la variable "img"
let img = document.querySelector(".imgBook");

// Parcourt chaque élément "loupe" dans la collection "loupes"
loupes.forEach(loupe => {

    // Ajoute un écouteur d'événement "click" à chaque élément "loupe"
    loupe.addEventListener("click", () => {

        // Crée un nouvel élément de type "div" et le stocke dans la variable "voile"
        let voile = document.createElement("div");
        voile.id = "voile"; // Définit l'ID de l'élément "voile" comme "voile"

        // Crée un nouvel élément de type "div" et le stocke dans la variable "modale"
        let modale = document.createElement("div");
        modale.id = "modale"; // Définit l'ID de l'élément "modale" comme "modale"

        // Crée un nouvel élément de type "img" et le stocke dans la variable "img"
        let img = document.createElement("img");

        // Récupère l'attribut "src" de l'élément "img" parent de l'élément "loupe" actuel, et le stocke dans la variable "srcImg"
        let srcImg = loupe.parentNode.querySelector("img").getAttribute("src");

        // Définit l'attribut "src" de l'élément "img" nouvellement créé avec la valeur de "srcImg"
        img.setAttribute("src", srcImg);

        
        // Crée un nouvel élément de type "button" et le stocke dans la variable "close"
        let close = document.createElement("button");
        
        close.id = "close"
        
        // Définit le contenu textuel du bouton "close" comme "X"
        close.textContent = "X";
        
        // Ajoute l'élément "voile" en tant qu'enfant du corps du document
        document.body.appendChild(voile);
        
        // Ajoute l'élément "modale" en tant qu'enfant de l'élément "voile"
        voile.appendChild(modale);
        
        // Ajoute les éléments "close" et "img" en tant qu'enfants de l'élément "modale"
        modale.append(close, img);
        
        let datas = loupe.dataset;
        for (key in datas) {
            let info = document.createElement("h2")
            info.textContent = key
            let parag = document.createElement("p")
            parag.textContent = datas[key]
            modale.append(info, parag)
        }
        // Ajoute un écouteur d'événement "click" au bouton "close"
        close.addEventListener("click", () => {
            // Supprime l'élément "modale" de son parent
            modale.remove();
            // Supprime l'élément "voile" de son parent
            voile.remove();
        });
    });
});



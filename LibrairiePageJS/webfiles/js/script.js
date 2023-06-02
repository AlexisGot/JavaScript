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
});

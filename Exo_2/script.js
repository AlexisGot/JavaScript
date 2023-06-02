document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner tous les éléments avec la classe "toParag"
  let toParag = document.querySelectorAll(".toParag");

  // Pour chaque élément "toParag", ajouter un écouteur d'événement "click"
  toParag.forEach(redirection => {
      redirection.addEventListener("click", (event) => {
          event.preventDefault(); // Empêcher le comportement par défaut du lien
          
          // Récupérer l'attribut "href" du lien dans l'élément "toParag"
          let sectionId = redirection.querySelector("a").getAttribute("href");
          
          // Vérifier si l'attribut "href" commence par "#"
          if (sectionId.startsWith("#")) {
              sectionId = sectionId.slice(1); // Supprimer le "#" du début de l'ID de section
              
              // Récupérer l'élément de section correspondant à l'ID
              let section = document.getElementById(sectionId);
              
              // Si l'élément de section existe, faire défiler la page pour le rendre visible de manière fluide
              if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
              }
          }
      });
  });
});

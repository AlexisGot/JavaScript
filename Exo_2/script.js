document.addEventListener("DOMContentLoaded", () => {
    let toParag = document.querySelectorAll(".toParag");
  
    toParag.forEach(redirection => {
      redirection.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement de redirection par défaut
  
        let sectionId = redirection.querySelector("a").getAttribute("href");
  
        if (sectionId.startsWith("#")) {
          sectionId = sectionId.slice(1);
  
          let section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
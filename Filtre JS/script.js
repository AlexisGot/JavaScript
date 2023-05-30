
// Obtenez une référence vers l'élément select
var select = document.getElementById('themeSelect');

// Ajoutez un écouteur d'événement pour le changement de sélection
select.addEventListener('change', () => {
  var selectedTheme = select.value; // Obtenez la valeur sélectionnée

  // Obtenez toutes les sections du document
  var sections = document.querySelectorAll('section');

  // Parcourez les sections et ajoutez ou supprimez les classes en fonction de la thématique sélectionnée
  Array.from(sections).forEach(section => {
    if (selectedTheme === 'tous' || section.id === selectedTheme) {
      section.classList.add('visible'); // Ajoutez la classe 'visible'
      section.classList.remove('hidden'); // Supprimez la classe 'hidden'
    } else {
      section.classList.add('hidden'); // Ajoutez la classe 'hidden'
      section.classList.remove('visible'); // Supprimez la classe 'visible'
    }
  });
});

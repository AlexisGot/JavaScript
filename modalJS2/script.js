let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    // créer un élement html (voile)
    let voile = document.createElement("div");
    // ajouter une id 
    voile.id = "voile";
    let modale = document.createElement("div");
    modale.id = "modale";
    let secondTitle = document.createElement("h2");
    secondTitle.textContent = "Ma modale";
    let parag = document.createElement("p");
    parag.textContent = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed nisl ipsum, 
    imperdiet id euismod congue, luctus molestie magna. 
    Mauris aliquam massa et dolor vestibulum, 
    venenatis posuere urna mattis. 
    Vestibulum ipsum odio, tincidunt sed quam vitae, 
    bibendum convallis purus.`;
    let close = document.createElement("button")
    close.textContent = "X";
    // ensuite l'ajouter dans l'html
    document.body.appendChild(voile);
    voile.appendChild(modale);
    modale.append(secondTitle, parag, close);
    close.addEventListener("click", ()=>{
        modale.remove();
        voile.remove();
    })
})
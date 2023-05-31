let btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    let voile = document.createElement("div");
    let modal = document.createElement("div");

    voile.id = "voile";
    modal.id = "modal";

    let secondTitle = document.createElement("h2");
    secondTitle.textContent = "Modale Unique";
    let parag = document.createElement("p");
    parag.textContent = "Bla bla bla bla bla bla bla"
    document.body.appendChild(voile);
    voile.appendChild(modal);
    modal.append(secondTitle , parag);
})
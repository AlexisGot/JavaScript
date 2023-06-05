let moreParags = document.querySelectorAll("p")

moreParags.forEach(parag =>{
    parag.addEventListener("click", ()=>{
        parag.textContent = parag.getAttribute("data-info");
    })
})
// let a = 26;
// let x =26;
// if(a>x){
//     let b = "Supérieur";
//     alert(b);
// }else if(a<x){
//     let b = "Inférieur";
//     alert(b);
// }else if(a==x){
//     let b = "égale";
//     alert(b);
// }

// let a = 26.1;
// let x =26;
// if(a>x){
//     let result = "Supérieur";
//     console.log(result);
// }else if(a<x){
//     let result = "Inférieur";
//     console.log(result);
// }else if(a==x){
//     let result = "égale";
//     console.log(result);
// }

// for(let a = 0 ; a <= 10; a++){
//     let result = a*5;
//     console.log("5x"+a+"="+result);
// }

// for(let b = 0; b <= 10; b++){
//     for(let a = 0 ; a <= 10; a++){
//         let result = a*b;
//         console.log(b+"x"+a+"="+result);
//     }
// }
    
// let i = 0;
// while(i<10){
//     i = i+1;
// }
// console.log(i);

// let tablo = [12, "Bonjour", "..."];
// let i = 0;
// while(i<3){
// console.log(tablo[i]);
// i = i+1;
// }

// let tablo = [0, "Bonsoir", "....", 42];
// tablo.forEach(element => console.log(element));

// let nameFormation = ["Florian","William","Valentin","Warren","Marie","Hafssa","Racha","Vincent"];
// nameFormation.forEach
//     ((index , element) =>(
//         console.log(element+"-"+index)
//     ));

// let tabloAssoc =[
//         {prenom : "Alexis", nom : "Got", notes : [10 ,12 ,9]},
//         {prenom : "Florian", nom : "Charpentier", notes : [15 ,10 ,20]},
//         {prenom : "Wiliam", nom : "Gerardin", notes : [16 ,10 ,0]},
// ];

// console.log(tabloAssoc);

// tabloAssoc.forEach(
//     stagiaire =>{
//         console.log(stagiaire.prenom, stagiaire.nom)
//         stagiaire.notes.forEach(note =>{
//             console.log(note)
//         })
//     }
// );

// let voitureMarque =[
//         {marque : "Bmw", modele : ["iX1","M60","Z4"]},
//         {marque : "Porshe", modele : ["Cayenne","911"]},
//         {marque : "Audi", modele : ["A6","SQ8","TTS Coupé","R8"]},
//         {marque : "Peugeot", modele : ["3008","308","206","106"]},
// ];

// voitureMarque.forEach(
//     marques=>{
//         console.log(marques.marque)
//         marques.modele.forEach(modeles=>{
//             console.log(modeles)
//         })
//     }
// );

// let dragonBallZ =[
//     {race : "Sayajin", perso : ["Goku","Borly","Végéta"]},
//     {race : "Android", perso : ["Cell","C-17","C-18"]},
//     {race : "Humains", perso : ["Chichi","Bulma","Videl"]}
// ];

// dragonBallZ.forEach(
//     races=>{
//         console.log(races.race)
//         races.perso.forEach(persos=>{
//             console.log(persos)
//         })
//     }
// )

let dresseurs =[
    {
        prenom:"Red", age: 18 , ville: "Argenta", pokémons :[
        {
            nom:"Pikachu", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Ectoplasma", niveau: 99 ,nature: "Malpoli", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Ho-Oh", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Arceus", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Mew", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]}
    ]},

    {
        prenom:"Cynthia", age: 464 , ville: "Akala", pokémons :[
        {
            nom:"Carchacrok", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Roserade", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Lucario", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Togekiss", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Spiritomb", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]},
        {
            nom:"Milobellus", niveau: 99 ,nature: "Sérieux", attaques :[
                {attaqueNom:"Eclair", pp:20, natureAttaque: "electrique"},
                {attaqueNom:"Queue de fer", pp:20, natureAttaque: "Normal"},
        ]}
    ]},
];

dresseurs.forEach(
    dresseurs=>{
        console.log(dresseurs.prenom, dresseurs.age+" ans", dresseurs.ville)
        dresseurs.pokémons.forEach(
            pokémon=>{
                console.log("- "+pokémon.nom, "niv "+pokémon.niveau)
            })
    }
)





// {prenom:"Linda", age: 16 ,ville: "Doublonville", pokémon:[]},
// {prenom:"Sacha", age: 15 ,ville: "Bourg Palette", pokémon:[]},
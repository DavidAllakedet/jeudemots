/*

const motApplication = "Bonjour"
let motUtilisateur = prompt("Entrer le mot :" + motApplication)


if(motUtilisateur === motApplication){
    console.log("Bravo !")
} else {
    if(motUtilisateur === "Gredin"){
    console.log("Rester paulie")
        } else {
            if(motUtilisateur === "mecreant"){
            console.log("Rester paulie")
               } else {
                    if(motUtilisateur === "Vilain"){
                     console.log("Soyez gentil")
                        } else {
                            console.log("Vous avez du faire une erreur de frappe")
                        }
                }
        }
 }

 // switch case

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo")
        break;
    case "Gredin" :
        console.log("Restez Paulie")
        break;
    case "mecreant":
        console.log("Restez pailie")
        break;
    case "vilain" :
        console.log("Soyez gentil")
    default: 
        console.log("Vous avez du faire une erreur de frappe")
        break;
}                 
                    


// prompt

const listMots =["Cachalot", "Petunia" ,"Serviette"]     
let score = 0

let motUtilisateur = prompt("Entrer le mot :" + listMots[0])

if(motUtilisateur === listMots[0]){
    score++
   
}

 motUtilisateur = prompt("Entrer le mot :" + listMots[1])

if(motUtilisateur === listMots[1]){
    score++
}

motUtilisateur = prompt("Entrer le mot :" + listMots[2])

if(motUtilisateur === listMots[2]){
    score++
}

console.log(score)

 */
/*
//boucle for
for (let i = 0 ; i < 3 ; i++) {
 console.log(i)
}
*/
// boucle while
/*let i = 0
while (i < 3) {
    console.log(i)
    i++
}
*/
/*
let mot = prompt("Ecrivez Ok") 
while (mot !== "Ok" ) {
  mot = prompt("Ecrivez Ok") 
}
console.log("Vous avez ercis Ok !");

*/




/*

// cette variable va contenir le score de l'utilisateur , le score commence a zero 
let score = 0

// cette variable va contenir le mot ou la phrase entrer par l'utilisateur
let choixUtilisateur =prompt("Choisissez une option : mots ou phrases")

//tant que l'utilisateur n'a pas fait son choix entre mot et phrases on lui redemande
while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur =prompt("Choisissez une option : mots ou phrases")
}

// si l'utilisateur a choisi mots on lui demande de saisir les mots dans la liste des mots
if(choixUtilisateur === "mots" ){
    for( i = 0 ; i < listMots.length ; i++){
        let motUtilisateur = prompt("Entrer le mot :" + listMots[i])
        if(motUtilisateur === listMots[i]){
            score++
    }
    }
    // On affiche le score de l'utilsateur
    console.log("vous avez obtenue le score de " + score + " sur " + listMots.length )
 }
 
 // si l'utilisateur a choisi phrases on lui demande de saisir les phrases dans la liste des phrases
 else {
    for( i = 0 ; i < listPhrases.length ; i++){
        let motUtilisateur = prompt("Entrer la phrase :" + listPhrases[i])
        if(motUtilisateur === listPhrases[i]){
            score++
    }
    }
// On affiche le score de l'utilisateur
    console.log("vous avez obtenue le score de " + score + " sur " + listPhrases.length )
}
   */
  /*
@param {number} score :
@param {number} nbMotsProposes :

*/



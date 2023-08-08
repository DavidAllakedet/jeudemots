/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficheResultat(score, nbrMotsProposes){
    // On affiche le score de l'utilsateur
    //console.log("vous avez obtenue le score de " + score + " sur " + nbrMotsProposes)

    let spanScore  = document.querySelector(".zoneScore span")

    //interpolation
    let affichageScore = `${score} / ${nbrMotsProposes}`

    spanScore.innerText = affichageScore
}

/*
function choixPhraseOuMot(){
    //tant que l'utilisateur n'a pas fait son choix entre mot et phrases on lui redemande
    let choixUtilisateur =prompt("Choisissez une option : mots ou phrases")
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur =prompt("Choisissez une option : mots ou phrases")
}
    return choixUtilisateur
}
function lancerBoucleDeJeu(listePropositions){
    let score = 0
    // si l'utilisateur a choisi mots on lui demande de saisir les mots dans la liste des mots
    for( i = 0 ; i < listePropositions.length ; i++){
        let motUtilisateur = prompt("Entrer le mot :" + listePropositions[i])
        if(motUtilisateur === listePropositions[i]){
            score++
    }
}
    return score
}
*/
// affiche les propositions
function affichageProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}
/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
// fonction afficher email
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @return {boolean}
 */
 function validerNom(nom) {
    if (nom.length >= 2) {
        return true
    }
    return false
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @return {boolean}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(email)) {
        return true
    }
    return false
}

//cette fonction lance le jeu
function lancerJeu() {
    initAddEventListenerPopup()
    let score = 0
    let i = 0
    listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    affichageProposition(listeProposition[i])  

    // Gestion de l'evenements click sur le bouton "valider"
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeProposition[i]) {
            score++
        }
        i++
        afficheResultat(score, i) 
        inputEcriture.value = ""
        if(listeMots[i] === undefined){
            affichageProposition("le jeu est terminer !")   
            btnValiderMot.disabled = true
        }
        else{
            affichageProposition(listeProposition[i])    
        }
    
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for(index = 0; index < listeBtnRadio.length; index++ ){
        listeBtnRadio[index].addEventListener("change", (event) =>{
            console.log(event.target.value)
            if(event.target.value === "1"){
                listeProposition = listeMots
            }
            else{
                listeProposition = listePhrases
            }
            affichageProposition(listeProposition[i])
        })
    }
   
       // Gestion de l'événement submit sur le formulaire de partage. 
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        let scoreEmail = `${score} / ${i}`

        afficherEmail(nom, email, scoreEmail)
    })

    afficheResultat(score, i)
}




/*
    if(choixUtilisateur === "mots" ){
        score = lancerBoucleDeJeu(listeMots)
        nbrMotsTtoal = (listeMots.length)
        
    }
        else{
           score = lancerBoucleDeJeu(listePhrases)
            nbrMotsTtoal = (listePhrases.length)
        }
    afficheResultat(score, nbrMotsTtoal)    
        
}
lancerJeu()
*/
/*
function returnMessage(score, nombremaxMot) {
    let message = " Vous avez un score de " + score + " sur " + nombremaxMot
    return message
}
let returnFunction = returnMessage(2, 6)
console.log(returnFunction)

}
*/

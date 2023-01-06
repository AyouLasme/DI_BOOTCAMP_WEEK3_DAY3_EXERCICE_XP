/**
 * @author:LASME Ayou Emeline
 */

/****************************** Exercice1 : Debut **************************************** */

/*
*patie 1
*/

// Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
function seconde(phrase) {
    alert( phrase);
  }
// appel de la fonction seconde avec setTimeout
setTimeout(seconde, 2000, "Hello world"); 





/**
* Partie 2
*/

let inter 

const divContainer = document.getElementById("container")
const btn = document.getElementById("clear")

// cette fonction permet d'ajouter le paragraphe à la div
function ajouterParagraphe(){
    const paragraphe1 = document.createElement('p')
    paragraphe1.textContent = "Hello Word"
    divContainer.appendChild(paragraphe1)
}
// appel de la fonction avec la fonction setInterval
inter = setInterval(ajouterParagraphe,2000)

// ajout de l'evenement click sur le boutton pour arreter la fonction
btn.addEventListener('click',function(){
    clearInterval(inter)
})






/*
* 3e Parties
*/

// creation de la fonction d'ajout du paragraphe afin qu'il s'arrete sans qu'on clique sur le bouton apres cinq affichages
function ajouterParagraphe(){
    if(divContainer.childElementCount === 5){
        clearInterval(inter)
        return;
    }
    // creation des balises p dans la div
    const paragraphe2 = document.createElement('p')
    paragraphe2.textContent = "Hello Word"
    divContainer.appendChild(paragraphe2)
}
// appel de la fonction 
inter = setInterval(ajouterParagraphe,2000)
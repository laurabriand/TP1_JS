//EXERCICE 2 :
//Créer un bouton (lien) en HTML
//Un compteur affiche le nombre de cliques sur le bouton
//Lorsque le compteur dépasse 3, le bouton devient rouge
//Lorsque le compteur dépasse 5, le bouton disparait

let compt = 0;
const btn = document.getElementById("bouton");
const a = function (event) {
    event.preventDefault();
    compt++;
    btn.textContent = compt;
    if (compt > 3 && compt < 6) {
        btn.style.color = "rgb(255, 0, 0)";
    }
    if (compt > 5) {
        bouton.remove();
    }
}
btn.addEventListener("click", a)
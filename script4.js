//EXERCICE 4

const pseudo = document.getElementById("monPseudo");
const mail = document.getElementById("monEmail");
const mdp = document.getElementById("monMdp");
const mdp2 = document.getElementById("monMdp2");
const couleur = document.getElementById("maCouleur");
const famille = document.getElementById("listeDeroulante");
const btn = document.getElementById("bouton");

a = function (event) {
    event.preventDefault();
    if (pseudo.textContent.length <= 5) {
        const err = document.createElement("p");
        err.textContent = "Veuillez entrer un pseudo plus court";
    }

}

btn.addEventListener("click", a)
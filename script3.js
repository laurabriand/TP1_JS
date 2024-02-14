//EXERCICE 3 :
//Lorsque l’utilisateur sélectionne une maison dans la
//liste déroulante, affichez la liste des personnes lui
//appartenant.

const fra = ["Paris", "Bordeaux", "Toulouse"];
const esp = ["Malaga", "Madrid", "Barcelone"];
const ita = ["Naples", "Rome", "Venise"];

const list = document.getElementById("listeDeroulante");

const a = function (event) {
    event.preventDefault();
    document.createElement("ul");
    if (event.target.value == "a") {
        fra.forEach(elem => {
            alert(elem);
        })
    }

}

form.addEventListener("change", a)
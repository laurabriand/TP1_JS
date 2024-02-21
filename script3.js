//EXERCICE 3 :
//Lorsque l’utilisateur sélectionne une maison dans la
//liste déroulante, affichez la liste des personnes lui
//appartenant.

const fra = ["Paris", "Bordeaux", "Toulouse"];
const esp = ["Malaga", "Madrid", "Barcelone"];
const ita = ["Naples", "Rome", "Venise"];

const list = document.getElementById("listeDeroulante");
const maListe = document.getElementById("maliste");

const a = function (event) {
    event.preventDefault();
    console.log("test");
    maListe.innerHTML = ""

    if (event.target.value == "a") {

        fra.forEach(elem => {
            const l1 = document.createElement("li");
            l1.textContent = elem;
            maListe.appendChild(l1);
        })
    }
    else if (event.target.value == "b") {
        esp.forEach(elem => {
            const l2 = document.createElement("li");
            l2.textContent = elem;
            maListe.appendChild(l2);
        })
    }
    else if (event.target.value == "c") {
        ita.forEach(elem => {
            const l3 = document.createElement("li");
            l3.textContent = elem;
            maListe.appendChild(l3);
        })
    }

}

list.addEventListener("change", a)
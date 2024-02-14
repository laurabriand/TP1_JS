const al = Math.floor(Math.random() * 1) + 100;
let tour = 1;
let gagner = false;
alert("Devinez un nombre entre 1 et 100. Vous avez 6 tentatives");
while (tour < 7 && gagner == false) {
    let val = prompt("Entrez un nombre entre 1 et 100 :");
    tour++;
    if (val == al) {
        alert("Vous avez gagner !");
    }
    else if (val > al) {
        alert("Entrez une valeur plus petite")
    }
    else {
        alert("Entrez une valeur plus grande")
    }
}
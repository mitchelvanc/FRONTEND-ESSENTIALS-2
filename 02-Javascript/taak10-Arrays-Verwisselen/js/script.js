topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];
 
document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];
 
function moveup(nummer){
    bewaren = topFilms[nummer-1]
    verwijderen = topFilms.splice(nummer-1, 1);
    toevoegen = topFilms.splice(nummer-6, 0, bewaren);
    console.log(topFilms);
    iets();
}
function movedown(nummer){
    bewaren = topFilms[nummer-1]
    verwijderen = topFilms.splice(nummer-1, 1);
    toevoegen = topFilms.splice(nummer, 0, bewaren);
    console.log(topFilms);
    iets();
}
function resetList(){
    document.getElementById("regel1").innerHTML = "The Godfather";    
    document.getElementById("regel2").innerHTML = "The Shawshank Redemption";   
    document.getElementById("regel3").innerHTML = "Schindler's List";   
    document.getElementById("regel4").innerHTML = "Raging Bull";   
    document.getElementById("regel5").innerHTML = "Casablanca"; 
      
}
function iets(){
    document.getElementById("regel1").innerHTML = topFilms[0];
    document.getElementById("regel2").innerHTML = topFilms[1];
    document.getElementById("regel3").innerHTML = topFilms[2];
    document.getElementById("regel4").innerHTML = topFilms[3];
    document.getElementById("regel5").innerHTML = topFilms[4];
}
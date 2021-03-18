topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];
 
eigenTopFilms = [];
 

for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}
 
var filmnummer = 1; 
 
function kiesFilm(){
    nummer = prompt("Welke Film staat op plek " + filmnummer);
        if(nummer >= 0 && nummer <= 10 ){
            eigenTopFilms.push(topFilms[nummer]); 
            naam = document.querySelector(".imdb-film" + nummer).innerHTML;
            let toegevoegd1 = document.querySelector(".eigen-film" + filmnummer);
            toegevoegd1.innerHTML = naam;
            console.log(naam);
            document.querySelector(".imdb-film" + nummer).style.textDecoration = "line-through";;
            filmnummer++;
 
            if(filmnummer >= 4){
                document.querySelector('.kiesfilm-button').innerText = 'Klaar';
            }
            else{
                document.querySelector('.kiesfilm-button').innerText = 'Kies Film voor plek ' + filmnummer;
            }
        }
}
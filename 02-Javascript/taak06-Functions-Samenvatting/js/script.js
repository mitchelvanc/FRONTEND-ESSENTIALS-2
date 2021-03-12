function geefAntwoord(antwoord){
    getal1= document.querySelector(".getal1").innerHTML;
    getal2= document.querySelector(".getal2").innerHTML;
    score= document.querySelector(".score").innerHTML;
     
    if(getal1>getal2 && antwoord == 'hoger'){
        score= score -1+2;
        document.querySelector(".score").innerHTML=score;
        document.querySelector("body").style.backgroundColor="green";
     
    }else if(getal1<getal2 && antwoord == 'hoger'){
        score= score -1;
        document.querySelector(".score").innerHTML=score;
        document.querySelector("body").style.backgroundColor="red";
    }
    if(getal1<getal2 && antwoord == 'lager'){
        score= score -1+2;
        document.querySelector(".score").innerHTML=score;
        document.querySelector("body").style.backgroundColor="green";
        
    }else if(getal1>getal2 && antwoord == 'lager'){
        score= score -1;
        document.querySelector(".score").innerHTML=score;
        document.querySelector("body").style.backgroundColor="red";
    }
    showRandomNumber1();
    showRandomNumber2();
    }
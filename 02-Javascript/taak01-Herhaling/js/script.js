let strNaam;
let boolNaamKlopt;
let naamKloptBijna;

strNaam= prompt("hoe heet je?");
boolNaamKlopt = confirm("heet je echt " + strNaam);

if(boolNaamKlopt == true){
    alert("welkom " + strNaam)
}
else{
    naamKloptBijna= prompt("voer nogmaals uw naam in!")
}

    if(naamKloptBijna == true){
    alert("welkom ")
}
    else{("toch welkom! " +strNaam)
};
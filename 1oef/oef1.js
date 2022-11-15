import rl from "readline-sync"

const vrnaam = rl.question("Voornaam aub")
const achternaam = rl.question("achternaam aub")
const straatHuisnmr = rl.question("Geef u adress in aub")
const postcode = rl.question("Geef u postocode in aub")
const gemente = rl.question("geef u Gemeente in aub")


const voornaam = vrnaam.slice(0,1).toUpperCase() + ".";
const gemeente = gemente.toUpperCase();
const volnaam = voornaam+achternaam ;
const blanco = " ";
const spaties= straatHuisnmr.length  - volnaam.length;
const spaties2 = straatHuisnmr.length - (postcode.length+gemeente.length);

// Ik ga ervanuit dat Straat + Huisnummer langste regel gaat zijn //
    
const bar= "-"

if(achternaam.length > 40|| straatHuisnmr.length >40|| voornaam.length >40|| gemeente.length > 40){

 console.log("Te breed. Gebruik afkortingen in de breedste stukken")

}
else if(achternaam.length == 0|| straatHuisnmr.length == 0|| voornaam.length == 0 || gemeente.length == 0 || postcode.length == 0){

    console.log("Minstens één van de ingevulde velden is niet geldig")
}

else if(postcode > 9900 || postcode < 1000){

    console.log("Minstens één van de ingevulde velden is niet geldig")

}



else{

    console.log(bar.repeat(straatHuisnmr.length + 4) + "\n" +  "|" + " " +volnaam+ blanco.repeat(spaties +1)+ "|" + "\n" +"|" + " " +straatHuisnmr+ " " + "|" + "\n" + "|" + " " +postcode + " " + gemeente + blanco.repeat(spaties2) + "|" +  "\n"+ bar.repeat(straatHuisnmr.length +4))

}


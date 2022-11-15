import Schilderij from "./2.Schilderij.js";


function Schilder(voornaam,achternaam,stijl){

    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.stijl = stijl;
    this.schilderijn = [];
}


Schilder.prototype.addPainting = function(naam,canvasgrootte,kostprijs){
    this.schilderijn.push(new Schilderij(naam,canvasgrootte,kostprijs));

}

Schilder.prototype.printHtml = function(){

    console.log(

        "<h1>" + this.voornaam + " " +this.achternaam + "</h1>" + "\n" + 
        "<h2>" + this.stijl + "</h2>" +  "\n" + 
        "<ul>" +  "\n" + 
        "<li>" +  "\n" + 
        "Naam: <span>"+ this.naam +"</span><br>" +  "\n" + 
        "Canvas: <em>" + this.canvasgrootte + "</em><br>"+"\n" + 
        "Prijs: <strong>" + this.kostprijs + "€</strong>" +"\n" + 
        "</li>" +  "\n" + 

        "<li>" +  "\n" + 
        "Naam: <span>"+ this.naam +"</span><br>" +  "\n" + 
        "Canvas: <em>" + this.canvasgrootte + "</em><br>"+"\n" + 
        "Prijs: <strong>" + this.kostprijs + "€</strong>" +"\n" + 
        "</li>" +  "\n" + 

        "<li>" +  "\n" + 
        "Naam: <span>"+ this.naam +"</span><br>" +  "\n" + 
        "Canvas: <em>" + this.canvasgrootte + "</em><br>"+"\n" + 
        "Prijs: <strong>" + this.kostprijs + "€</strong>" +"\n" + 
        "</li>" +  "\n" 

    )

}


export default Schilder;


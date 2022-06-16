var lang;
var nSlide;

function setEng(){
    lang = 1; console.log("lang è 1");
    setLang();
}

function setIta(){
    lang = 0; console.log("lang è 0");
    setLang();
}

 function setLang(){
    if(lang == 0){
    document.getElementById("Diocesi").innerHTML = "Diocesi";
      document.getElementById("title").innerHTML = "APP" ;
      document.getElementById("dove").innerHTML = "Dove";
      document.getElementById("descrizione").innerHTML = "Descrizione";
      document.getElementById("opere").innerHTML = "Opere";
      document.getElementById("cripta").innerHTML = "Cripta";
      document.getElementById("battistero").innerHTML = "Battistero";
      document.getElementById("footer").innerHTML ="Duomo di Treviso";
      document.getElementById("contatti").innerHTML = "Contattaci";
      document.getElementById("downloadcontentwindows").innerHTML = "Scarica l'app per Windows";
      document.getElementById("downloadcontentmac").innerHTML = "Scarica l'app per Mac";
      document.getElementById("downloadcontentvr").innerHTML = "Scarica l'app per il visore 3D";
      document.getElementById("text-app").innerHTML = "<br>Visita il Duomo di Treviso in prima persona e navigaci dentro da casa tua. <br> Questa app ti dà la possibilità di camminare all’interno della chiesa in maniera interattiva per conoscere l’edificio a 360 gradi. Grazie ad una guida potrai osservare le varie architetture interne, le opere e scoprire la loro reale collocazione, durante il tuo viaggio virtuale."
    }

    else if(lang == 1){
    document.getElementById("Diocesi").innerHTML = "Diocese";
      document.getElementById("title").innerHTML = "APP" ;
      document.getElementById("dove").innerHTML = "Where";
      document.getElementById("descrizione").innerHTML = "Description";
      document.getElementById("opere").innerHTML = "Art Works";
      document.getElementById("cripta").innerHTML = "Crypt";
      document.getElementById("battistero").innerHTML = "Baptistery";
      document.getElementById("footer").innerHTML ="Treviso's Cathedral";
      document.getElementById("contatti").innerHTML = "Contact us";
      document.getElementById("downloadcontentwindows").innerHTML = "Download for Windows";
      document.getElementById("downloadcontentmac").innerHTML = "Download for Mac";
      document.getElementById("downloadcontentvr").innerHTML = "Download the 3D viewer app";
	  document.getElementById("text-app").innerHTML = "<br>Visit the Cathedral of San Pietro Apostolo in first person and surf it by your home. <br> This app will let you walk in the church interactively to know the structure by 360 degrees.  With this guide you will be able to watch the internal architecture, the works and their collocation during your virtual trip."
    }
 }

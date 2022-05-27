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
      document.getElementById("title").innerHTML = "DOVE SI TROVA?" ;
      document.getElementById("a").innerHTML = "Utilizza la mappa sovrastante per osservare dove si trova la basilica di San Pietro Apostolo a Treviso." ;
      document.getElementById("dove").innerHTML = "Dove";
      document.getElementById("descrizione").innerHTML = "Descrizione";
      document.getElementById("opere").innerHTML = "Opere";
      document.getElementById("cripta").innerHTML = "Cripta";
      document.getElementById("battistero").innerHTML = "Battistero";
      document.getElementById("footer").innerHTML ="Duomo di Treviso";
      document.getElementById("contatti").innerHTML = "Contattaci";
    }


    else if(lang == 1){
    document.getElementById("Diocesi").innerHTML = "Diocese";
      document.getElementById("title").innerHTML = "WHERE IS IT?" ;
      document.getElementById("a").innerHTML = "Use the map above to see where the Basilica of San Pietro Apostolo is located in Treviso." ;
      document.getElementById("dove").innerHTML = "Where";
      document.getElementById("descrizione").innerHTML = "Description";
      document.getElementById("opere").innerHTML = "Art Works";
      document.getElementById("cripta").innerHTML = "Crypt";
      document.getElementById("battistero").innerHTML = "Baptistery";
      document.getElementById("footer").innerHTML ="Treviso's Cathedral";
      document.getElementById("contatti").innerHTML = "Contact us";

    }
 }
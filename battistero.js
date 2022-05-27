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
      document.getElementById("title").innerHTML = "BATTISTERO" ;
      document.getElementById("dove").innerHTML = "Dove";
      document.getElementById("descrizione").innerHTML = "Descrizione";
      document.getElementById("opere").innerHTML = "Opere";
      document.getElementById("cripta").innerHTML = "Cripta";
      document.getElementById("battistero").innerHTML = "Battistero";
      document.getElementById("footer").innerHTML ="Duomo di Treviso";
      document.getElementById("t").innerHTML ="Il battistero di San Giovanni fu ricostruito nei secoli XI-XII sulla base di altri edifici antichi, e per secoli fu l'unico battistero della città. La chiesa è cambiata nel tempo ed è stata riportata alle sue originarie linee romaniche nel corso di questo secolo. Costruita in rosso mattone, sulla facciata, i lati e l'abside (visibili da Calmaggiore) sono incrociati in raffinato senso plastico da lesene dolcemente raccordate da coppie di archi al centro dei mensoloni scolpiti. Due architravi romani con motivi botanici (XI o IV secolo d.C.) fiancheggiano il portone d'ingresso, che conserva gli originali battenti in legno intagliato del XIV secolo. Sulla destra, la vivace cattedrale è una nicchia con affreschi tardo gotici (S. Giovanni Battista, S. Giacomo e l'Angelo) di un pittore molto vicino a Gentile da Fabriano. L'interno, a semplice aula rettangolare, presenta un piccolo con abside sullo sfondo, racchiuso da balaustre di colonne marmoree e vigorose teste di Santi. Ai lati del presbiterio due absidi con interessanti affreschi duecenteschi: quella di destra una Madonna col Bambino e Santi, in stile romanico; quella di sinistra è una Madonna col Bambino tra Gabriele e San Prosdocimo, un'opera con linee ancora in bei colori e un disegno elegante. Al centro della stanza si trovano i grandi battesimi in marmo rosso.<br>";    
      document.getElementById("contatti").innerHTML = "Contattaci";
    }


    else if(lang == 1){
    document.getElementById("Diocesi").innerHTML = "Diocese";
      document.getElementById("title").innerHTML = "Batistery" ;
      document.getElementById("dove").innerHTML = "Where";
      document.getElementById("descrizione").innerHTML = "Description";
      document.getElementById("opere").innerHTML = "Art Works";
      document.getElementById("cripta").innerHTML = "Crypt";
      document.getElementById("battistero").innerHTML = "Baptistery";
      document.getElementById("footer").innerHTML ="Treviso's Cathedral";
      document.getElementById("t").innerHTML ="The baptistery of San Giovanni was rebuilt in the 11th-12th centuries on the basis of other ancient buildings, and for centuries it was the only baptistery in the city. The church has changed over time and has been restored to its original Romanesque lines over the course of this century. Built in brick red, on the front, the sides and the apse (visible from Calmaggiore) are crossed in a refined plastic sense by pilasters softly joined by pairs of arches in the center of the sculpted corbels. Two Roman architraves with botanical motifs (11th or 4th century AD) flank the entrance door, which retains the original carved wooden doors from the 14th century. On the right, the lively cathedral is a niche with late Gothic frescoes (St. John the Baptist, St. James and the Angel) by a painter very close to Gentile da Fabriano. The interior, with a simple rectangular hall, has a small one with an apse in the background, enclosed by balustrades of marble columns and vigorous heads of saints. On the sides of the presbytery there are two apses with interesting thirteenth-century frescoes: the one on the right a Madonna with Child and Saints, in Romanesque style; the one on the left is a Madonna and Child between Gabriel and San Prosdocimo, a work with lines still in beautiful colors and an elegant design. In the center of the room there are large baptisms in red marble.";
      document.getElementById("contatti").innerHTML = "Contact us";
    }
 }

 function setFirst(){
   nSlide = 0;
   slideshow();
 }

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
       document.getElementById("title").innerHTML = "BATTISTERO" ;
       document.getElementById("dove").innerHTML = "Dove";
       document.getElementById("descrizione").innerHTML = "Descrizione";
       document.getElementById("opere").innerHTML = "Opere";
       document.getElementById("cripta").innerHTML = "Cripta";
       document.getElementById("battistero").innerHTML = "Battistero";
       document.getElementById("footer").innerHTML ="Duomo di Treviso";
       document.getElementById("t").innerHTML ="Il battistero di San Giovanni fu ricostruito nei secoli XI-XII sulla base di altri edifici antichi, e per secoli fu l'unico battistero della città. La chiesa è cambiata nel tempo ed è stata riportata alle sue originarie linee romaniche nel corso di questo secolo. Costruita in rosso mattone, sulla facciata, i lati e l'abside (visibili da Calmaggiore) sono incrociati in raffinato senso plastico da lesene dolcemente raccordate da coppie di archi al centro dei mensoloni scolpiti. Due architravi romani con motivi botanici (XI o IV secolo d.C.) fiancheggiano il portone d'ingresso, che conserva gli originali battenti in legno intagliato del XIV secolo. Sulla destra, la vivace cattedrale è una nicchia con affreschi tardo gotici (S. Giovanni Battista, S. Giacomo e l'Angelo) di un pittore molto vicino a Gentile da Fabriano. L'interno, a semplice aula rettangolare, presenta un piccolo con abside sullo sfondo, racchiuso da balaustre di colonne marmoree e vigorose teste di Santi. Ai lati del presbiterio due absidi con interessanti affreschi duecenteschi: quella di destra una Madonna col Bambino e Santi, in stile romanico; quella di sinistra è una Madonna col Bambino tra Gabriele e San Prosdocimo, un'opera con linee ancora in bei colori e un disegno elegante. Al centro della stanza si trovano i grandi battesimi in marmo rosso.<br>";    
       document.getElementById("contatti").innerHTML = "Contattaci";
     }
 
 
     else if(lang == 1){
     document.getElementById("Diocesi").innerHTML = "Diocese";
       document.getElementById("title").innerHTML = "Batistery" ;
       document.getElementById("dove").innerHTML = "Where";
       document.getElementById("descrizione").innerHTML = "Description";
       document.getElementById("opere").innerHTML = "Art Works";
       document.getElementById("cripta").innerHTML = "Crypt";
       document.getElementById("battistero").innerHTML = "Baptistery";
       document.getElementById("footer").innerHTML ="Treviso's Cathedral";
       document.getElementById("t").innerHTML ="The baptistery of San Giovanni was rebuilt in the 11th-12th centuries on the basis of other ancient buildings, and for centuries it was the only baptistery in the city. The church has changed over time and has been restored to its original Romanesque lines over the course of this century. Built in brick red, on the front, the sides and the apse (visible from Calmaggiore) are crossed in a refined plastic sense by pilasters softly joined by pairs of arches in the center of the sculpted corbels. Two Roman architraves with botanical motifs (11th or 4th century AD) flank the entrance door, which retains the original carved wooden doors from the 14th century. On the right, the lively cathedral is a niche with late Gothic frescoes (St. John the Baptist, St. James and the Angel) by a painter very close to Gentile da Fabriano. The interior, with a simple rectangular hall, has a small one with an apse in the background, enclosed by balustrades of marble columns and vigorous heads of saints. On the sides of the presbytery there are two apses with interesting thirteenth-century frescoes: the one on the right a Madonna with Child and Saints, in Romanesque style; the one on the left is a Madonna and Child between Gabriel and San Prosdocimo, a work with lines still in beautiful colors and an elegant design. In the center of the room there are large baptisms in red marble.";
       document.getElementById("contatti").innerHTML = "Contact us";
     }
  }
 
  function setFirst(){
    nSlide = 0;
    slideshow();
  }
 
 
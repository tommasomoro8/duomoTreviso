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
      document.getElementById("title").innerHTML = "CATTEDRALE DI SAN PIETRO APOSTOLO" ;
      document.getElementById("dove").innerHTML = "Dove";
      document.getElementById("descrizione").innerHTML = "Descrizione";
      document.getElementById("opere").innerHTML = "Opere";
      document.getElementById("cripta").innerHTML = "Cripta";
      document.getElementById("battistero").innerHTML = "Battistero";
      document.getElementById("title-history").innerHTML="La Storia";
      document.getElementById("history").innerHTML="Il Duomo di Treviso, o Cattedrale di San Pietro Apostolo è il principale luogo di culto a Treviso e la sede della diocesi locale. È uno dei punti di riferimento della città e vanta una ricchezza storico-artistica apprezzata in tutta Italia.<br> La costruzione si trova nel complesso di Piazza Duomo, chiamata da Giovanni Comisso, uno scrittore trevigiano, il “piccolo Vaticano” proprio perché qui si concentrano la maggior parte degli edifici religiosi della città: si trovano la Chiesa, o Battistero, di San Giovanni Battista, le Canoniche, attualmente sede del Museo Diocesano di Arte Sacra, la Biblioteca Capitolina e la Cattedrale di San Pietro Apostolo.<br><br> Il duomo richiama visivamente a primo impatto gli antichi templi greci e romani e la sua storia si divide in 4 fasi: paleocristiana, romanica, rinascimentale e neoclassica. L’attuale duomo sorge sulle fondamenta di un tempio paleocristiano, risalente probabilmente al VI secolo, di cui ci sono ancora tracce in via delle Canoniche. La storia più antica che la cattedrale può ancora raccontare è nella cripta, sotto al duomo, dove ci sono le tombe dei vescovi della città.<br><br> Tra l’XI e il XII secolo il Vescovo Rotario chiese una modifica, in stile romanico. All’età romanica risale anche l’antico portale, ritrovato nella corte delle Canoniche Vecchie, che si può ancora ammirare, ristrutturato nel 2005. La cattedrale venne ristrutturata tra il 1400 e il 1500, quando si aggiunse un avanportico con volte a crociera a sostituire un portico con leoni stilofori. Nella navata destra c’è la cappella dell’Annunziata o del Malchiostro, commissionata da Broccardo Malchiostro (segretario del vescovo Bernardo de Rossi), risalente al 1520. Il progetto era di Tullio e Antonio Lombardo: una struttura rinascimentale che venne poi affrescata da Pordenone, che si occupò delle pareti della cupola e dell’Adorazione dei Magi, e da Tiziano, che creò la Pala dell’Annunziata.<br><br> La chiesa venne ricostruita un'ulteriore volta tra il 1760 e il 1782 in stile neoclassico, secondo un progetto di Giordano Riccati, Andrea Memmo e Giannantonio Selva. Nel XVI secolo si costruì la cappella del Santissimo Sacramento, nella navata sinistra, dove si trova anche la tomba del vescovo Niccolò Franco. Nel 1836 viene costruita la facciata attuale seguendo il progetto di Francesco Bomben e Gaspare Petrovich (ingegnere comunale).<br> Tra il 1930 e il 1935 si liberano finalmente le cupole dalle strutture murarie e di copertura in legno e tegole, rivestendole di lastre di rame con lanterne terminali come si ammirano oggi. In occasione del Giubileo del 2000 vennero riorganizzati gli ambienti presbiterali, costruendo un nuovo grande organo, costruito dalle ditte Kuhn e Hradetzky. ";
      document.getElementById("footer").innerHTML ="Duomo di Treviso";
      document.getElementById("contatti").innerHTML = "Contattaci";
      document.getElementById("testo").innerHTML = "Visita il Duomo di Treviso in prima persona e navigaci dentro da casa tua. <br> Questa app ti dà la possibilità di camminare all’interno della chiesa in maniera interattiva per conoscere l’edificio a 360 gradi. Grazie ad una guida potrai osservare le varie architetture interne, le opere e scoprire la loro reale collocazione, durante il tuo viaggio virtuale."
    }


    else if(lang == 1){
    document.getElementById("Diocesi").innerHTML = "Diocese";
      document.getElementById("title").innerHTML = "CATHEDRAL OF SAN PIETRO APOSTOLO" ;
      document.getElementById("dove").innerHTML = "Where";
      document.getElementById("descrizione").innerHTML = "Description";
      document.getElementById("opere").innerHTML = "Art Works";
      document.getElementById("cripta").innerHTML = "Crypt";
      document.getElementById("battistero").innerHTML = "Baptistery";
      document.getElementById("title-history").innerHTML="History";
      document.getElementById("history").innerHTML="The Cathedral of Treviso, or Cathedral of St. Peter the Apostle, is the main place of worship in Treviso and the seat of the local diocese. It is one of the landmarks of the city and boasts a historical and artistic wealth appreciated throughout Italy.The building is located in the complex of Piazza Duomo, called by Giovanni Comisso, a writer from Treviso, the &quotlittle Vatican&quot precisely because here are concentrated most of the religious buildings of the city: there are the Church, or Baptistery, of St. John the Baptist, the Canons, currently home to the Diocesan Museum of Sacred Art, the Capitoline Library and the Cathedral of St. Peter the Apostle.<br><br> The cathedral visually recalls at first glance the ancient Greek and Roman temples and its history is divided into four phases: early Christian, Romanesque, Renaissance and neoclassical. The current cathedral stands on the foundations of an early Christian temple, probably dating back to the sixth century, of which there are still traces in Via delle Canoniche. The oldest story that the cathedral can still tell is in the crypt, under the cathedral, where there are the tombs of the bishops of the city.<br><br>Between the eleventh and twelfth centuries the Bishop Rotario asked for a modification, in Romanesque style. The ancient portal dates back to the Romanesque age, found in the courtyard of the Old Canons, which can still be admired, renovated in 2005. The cathedral was rebuilt between 1400 and 1500, when a forepart with cross vaults was added to replace a portico with stylophore lions. In the right aisle there is the chapel of the Annunziata or Malchiostro, commissioned by Broccardo Malchiostro (secretary of Bishop Bernardo de Rossi), dating back to 1520. The project was by Tullio and Antonio Lombardo: a Renaissance structure that was then frescoed by Pordenone, who took care of the walls of the dome, and by Titian, who created the Pala dell'Annunziata.<br><br>The church was rebuilt a further time between 1760 and 1782 in neoclassical style, according to a project by Giordano Riccati, Andrea Memmo and Giannantonio Selva. In the sixteenth century the chapel of the Blessed Sacrament was built, in the left aisle, where there is also the tomb of Bishop Niccolò Franco.In 1836 the current façade was built following the project of Francesco Bomben and Gaspare Petrovich (municipal engineer). Between 1930 and 1935 the domes were finally freed from the wall and roof structures in wood and tiles, covering them with copper plates with terminal lanterns as they are admired today. On the occasion of the Jubilee of 2000, the presbyteral environments were reorganized, adding a new large organ, built by the companies Kuhn and Hradetzky.";
      document.getElementById("footer").innerHTML ="Treviso's Cathedral";
      document.getElementById("contatti").innerHTML = "Contact us";
	  document.getElementById("testo").innerHTML = "Visit the Cathedral of San Pietro Apostolo in first person and surf it by your home. <br> This app will let you walk in the church interactively to know the structure by 360 degrees.  With this guide you will be able to watch the internal architecture, the works and their collocation during your virtual trip."
    }
 }

 
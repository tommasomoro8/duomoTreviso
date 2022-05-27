var cartella = "img/"; 
var estensione = "jpg"; 
var num_immagini = "5"; 
var tempo = "2500" 

var ws_images;

var ws_load;

var idx;
var num;

var period;
var running;

var extension;

		
function oscroller_init() {
	ws_images = new Array();
	ws_load = new Array();
		
	idx = 0;
	num = num_immagini;
	period = tempo;
		
	extension = "." + estensione;

	load();
			
	running = true;

	setTimeout('scroll()',period);
}
		
function scroll() {
	if(running) {
		idx++;
		if(idx>=num) {
			idx=0;
		}
		document.images.partenza.src = ws_images[idx].src;
		
		setTimeout("scroll()",period);
	}
}
		
function stop() {
	running = false;
}
		
function show(i) {
	stop();
	idx=i;
	document.images.partenza.src = ws_images[idx].src;
}
		
function run() {
	if(!running) {
		running=true;
		scroll();
	}
}
		
function load() {
	for(i=0;i<num;i++) {
		loadImage(i);
	}
}
		
function loadImage(i) {
	ws_images[i] = new Image();
	ws_images[i].src = cartella + i + extension;
}
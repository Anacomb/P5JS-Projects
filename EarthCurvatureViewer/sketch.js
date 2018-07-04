var R = 6371; // Rayon de la terre en km

var h = 90; // Hauteur en km
var hMin = 0.1;
var hMax = 1000;
var hStep = 0.5;

var f = 50; // Focale en mm
var c = 36; // Largeur du capteur en mm
var resol = 1920; // Nombre total de pixels du capteur sur toute sa largeur : l'oeil ici. 

var r; // Rayon du cercle que forme l'horizon en 
var l; // Distance en ligne droite entre l'observateur et sa ligne d'horizon en 

var d; //dépression formée par la ligne d'horizon


var visible = true;
var gui;

function setup() {
  createCanvas(windowWidth,windowHeight);

  calculCurvature();

  gui = createGui('Altitude variator (Km)');
  gui.addGlobals('h');

  noLoop();
}

function calculCurvature(){
	r = Math.sin(Math.acos(R/(R+h)))*R;
	l = Math.sin(Math.acos(R/(R+h)))*(R+h);

	valide = ( Math.sin(Math.atan(c/(2*f))) * l ) <= r;
	if (valide){
		var a = 0;
		a = Math.asin(r / l) - Math.acos( ( (l**2) - (r**2) )**0.5 / ( l * Math.cos(Math.atan(c/((2*f))))))
		d = f * Math.tan(a) * resol / c;
	}
	else d = -1;
}

function draw() {
  clear();	

  calculCurvature();

  background(64);
  stroke(255,255,255);


  fill(255,255,255);
  line(0,height-100,width,height-100);
  line(width/2-50,height-100-d,width/2+50,height-100-d);


}
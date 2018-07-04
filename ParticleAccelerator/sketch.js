var visible = true;
var gui;

var drawFillInt=true;
var drawFillExt=true;
var drawCylinder=true;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  gui = createGui('SETTINGS');
  gui.addGlobals('drawFillInt','drawFillExt','drawCylinder');

  
}

function draw() {

  background(64);
  clear();
  orbitControl();

  if(drawFillExt) {
	fill(0,255,0);
  } else {
	noFill();
  }
  torus(400,50);

  if(drawFillInt) {
	fill(255,0,0);
  } else {
	noFill();
  }
  torus(390,30);

  if(drawCylinder) {
	fill(0,0,255);
  } else {
	noFill();
  }
  rotateZ(180);
  translate(0,400);
  cylinder(100,100);

}
let x=1;
let y=1;
let w=20;
let points=[];

function setup() {
  createCanvas(displayWidth,displayHeight);
  randRecursive(x,y,w);
}

function randRecursive(x,y,w){
		if ( x+y <= 1100 ){
      let c = color(random(0,255),random(0,255),random(0,255));
			append(points,[x,y,w,c]);
			randRecursive(x+PI,y+HALF_PI,w+PI*QUARTER_PI);
		}
		else{
			return points;
		}
}

function draw() {
  background(65);
  stroke(0);
  translate(width/2,height/2);
  rotate(-millis()/10000*HALF_PI)
  for(let i=0; i<points.length; i++){
    fill(points[i][3]);
  	ellipse(points[i][0], points[i][1], points[i][2]);
    rotate(points[i][0]*PI*2, points[i][1]*QUARTER_PI)
  }
}
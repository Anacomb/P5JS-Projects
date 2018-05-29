const MAX_ITERATION = 60;
let triangles = [];

function setup() {
  createCanvas(800,800, WEBGL);


  triangleProcess(10-width/2,630-height/2,630-width/2,630-height/2,320-width/2,93-height/2,8);
 
}

function div2(a,b){
	return(a+b)/2;
}

function triangleProcess(xa,ya,xb,yb,xc,yc,n){
	if(n>0){
		let xe = div2(xa,xb);
		let ye = div2(ya,yb);
		let xf = div2(xb,xc);
		let yf = div2(yb,yc);
		let xg = div2(xa,xc);
		let yg = div2(ya,yc);

		append(triangles, new Triangle(xe,ye,xf,yf,xg,yg));


		triangleProcess(xa,ya,xe,ye,xg,yg,n-1);
		triangleProcess(xe,ye,xb,yb,xf,yf,n-1);
		triangleProcess(xg,yg,xf,yf,xc,yc,n-1);
	}
}

function draw() {
  background(64);
  translate(0,0,mouseX);
  for(let i=0; i<triangles.length;i++){
  	triangles[i].show();
  }
}
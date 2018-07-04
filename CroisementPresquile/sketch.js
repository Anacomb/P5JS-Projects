var visible = true;
var gui;

let building=[1];
let go=[2];
let grass=[3];
let road=[4];
let roadD=[5];
let roadL=[6];
let roadR=[7];
let roadU=[8];
let roadRL=[9];
let roadUD=[10];
let crossRoad=[11];
let stop=[12];

let nbX;
let nbY;
let res = 78;

let tiles=[building,grass,roadUD,roadRL,crossRoad];
let drawedTiles=[];

//ruleArrays[[upException],[leftException]]

let ruleBuilding=[[1,3,9],[1,3,10]];
let ruleGrass=[[1,3,9],[1,3,10]];
let ruleRoadRL=[[1,3],[9,11]];
let ruleRoadUD=[[10,11],[1,3]];
let ruleCrossRoad=[[10],[9]];

function preload() { 
  append(building, loadImage('tiles/care.png'));
  append(go, loadImage('tiles/go.png'));
  append(grass, loadImage('tiles/grass.png'));
  append(road, loadImage('tiles/road.png'));
  append(roadD, loadImage('tiles/roadD.png'));
  append(roadL, loadImage('tiles/roadL.png'));
  append(roadR, loadImage('tiles/roadR.png'));
  append(roadU, loadImage('tiles/roadU.png'));
  append(roadRL, loadImage('tiles/roadRL.png'));
  append(roadUD, loadImage('tiles/roadUD.png'));
  append(crossRoad, loadImage('tiles/crossRoad.png'));
  append(stop, loadImage('tiles/stop.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  nbX = floor(windowWidth/res);
  nbY = floor(windowHeight/res);
  generateRandomCity();
  drawGrid();
  drawCity();
}

function drawGrid(){
  for(let i=0; i<nbX; i++){
    for(let j=0; j<nbY; j++){
      image(grass[1],10+i+res*i,10+j+res*j);
    }
  }
}

function generateRandomCity(){
  for(let y=1; y<nbX-1; y++){
    for(let x=1; x<nbY-1; x++){
      do {
        tile = tiles[Math.floor(Math.random() * tiles.length)];
      }
      while(!rules(tile,x,y));
      //image(tile[1],10+i+res*i,10+j+res*j);
      append(drawedTiles,[tile,[x,y]]);
    }
  }
}

function rules(tile, x, y){
  let upTile = null;
  let leftTile = null;
  if(!(x==1)){
    leftTile = drawedTiles[drawedTiles.length-1][1];
  }
  if(!(y==1)){
    //upTile = drawedTiles[drawedTiles.length-1-nbX-2][1];
    console.log(nbX,x); 
  }
  console.log("x/y : " + [x,y] + "\nupTile : " + upTile + "\nleftTile : " + leftTile);
  
  return true;

  switch(tile[0]){
    case 1 : // building
      if(ruleBuilding[0].indexOf(upTile)>=0){
        if(ruleBuilding[1].indexOf(leftTile)>=0){
          return true;
        }
      } 
      else return false;
      break;

    case 3 : // grass
      if(ruleGrass[0].indexOf(upTile)>=0){
        if(ruleGrass[1].indexOf(leftTile)>=0){
          return true;
        }
      } 
      else return false;
      break;

    case 9 : // roadRL
      if(ruleRoadRL[0].indexOf(upTile)>=0){
        if(ruleRoadRL[1].indexOf(leftTile)>=0){
          return true;
        }
      } 
      else return false;
      break;

    case 10 : // roadUD
      if(ruleRoadUD[0].indexOf(upTile)>=0){
        if(ruleRoadUD[1].indexOf(leftTile)>=0){
          return true;
        }
      } 
      else return false;
      break;

    case 11 : // crossRoad
      if(ruleCrossRoad[0].indexOf(upTile)>=0){
        if(ruleCrossRoad[1].indexOf(leftTile)>=0){
          return true;
        }
      } 
      else return false;
      break; 

    default :
      return false;            
  }
}

function mouseClicked(){
  clear();
  drawGrid();
  drawCity();
  x = 10+floor(mouseX/res)+res*floor(mouseX/res);
  y = 10+floor(mouseY/res)+res*floor(mouseY/res);
  fill(255, 0, 10, 55);
  noStroke();
  rect(x,y,res,res);  
}

function drawCity() {
  for(let i=1; i<nbX-1; i++){
    for(let j=1; j<nbY-1; j++){
      image(drawedTiles[j][0][1],10+i+res*i,10+j+res*j);
    }
  }
}
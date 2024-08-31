/*
 *Tp3: obra OpArt
 *Comision 3: David Bedoian
 *Agustin Basualdo
 *DNI: 46936592
 *Link del video explicativo: https://youtu.be/r7JX6PzoeJw
 */

//Variables globales
let img;
let cantX = 19;
let cantY = 19;
let centerX = 600;
let centerY = 200;
let followMouse = false;

function preload() {
  img=loadImage("data/imagen.jpg");
}
function setup() {
   createCanvas(800,400);
  image(img, 0, 0, 400, 400);
  
}

function draw() {
  fill(0)
  rect(400,0,400,400);
    //Vartacion de la posicion de la distorcion
    if (followMouse) {
    centerX = mouseX;
    centerY = mouseY;
  }
  //Invocacion de la funcion propia con parametros que no retorna valor
  dibujoydistorcion (400 / cantX, 400 / cantY);
}

//Vartacion de la posicion de la distorcion
function mousePressed() {
  followMouse = true;
}

function keyPressed() {
  followMouse = false;
  centerX = 600;
  centerY = 200;
}

/*
 *TpFinal parte 1: Juego interactivo
 *Comision 3: David Bedoian
 *Agustin Basualdo(118969/0)
 *Compañera: Miranda Alverde(118955/4)
 *DNI: 46936592
 *Link del video explicativo: https://youtu.be/hk30SOHn3VI
 */

let pantalla = 15;
let textos = [];
let imagenes = [];
let textosEnCrudo = [];
let botones= ["SI", "NO", "EMPEZAR", "Musica on", "Musica off", "CREDITOS", "INICIO"]
  let mimusica
  let tipografia

  function preload() {
  tipografia = loadFont("data/tipografia.ttf")
    soundFormats("mp3", "ogg")
    mimusica = loadSound("data/sonidos/musica")
    textosEnCrudo = loadStrings("data/textos.txt");
  for (let i = 0; i < 17; i++) {
    imagenes[i] = loadImage("data/imagenes/pantalla_"+nf(i+1, 2)+".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  textFont(tipografia)
    for (let i = 0; i < textosEnCrudo.length; i++) {
    let linea = textosEnCrudo[i];
    let lineaArray = split(linea, "#");
    textos[lineaArray[0]] = lineaArray[1];
  }
}

function draw() {
  console.log(pantalla);
  background(0);
  image(imagenes[pantalla], 0, 0, 640, 480);
  fill(255);
  textSize(23);
  textAlign(CENTER);
  text(textos[pantalla], 0, 300, width, height * 0.4);
  asignaciondebotones()
}

function mousePressed() {
  interactividad()
}

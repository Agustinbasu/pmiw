function colisionBoton(x, y, w, h) {
  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    return true;  
  } else {
    return false;  
  }
}

function interactividad() { 
  if (colisionBoton(0, 50, 100, 30)) {
    miMusica.stop(); 
  } else if (colisionBoton(0, 0, 100, 30)) {
    miMusica.play();  
  }
  if (juegoIniciado === 0) {
    if (colisionBoton(0, 430, 200, 30)) {  
      juegoIniciado = 2;  
    }
  } else if (juegoIniciado === 2) {
    if (colisionBoton(0, 430, 100, 30)) {  
      juegoIniciado = 0;  
    }
  } else if (juegoIniciado >= 3) { 
    if (colisionBoton(500, 400, 100, 50)) {
      if (juegoIniciado === 3) {
        juegoIniciado = 4;
      } else if (juegoIniciado === 4) {
        juegoIniciado = 0; 
      } 
    }
  }
}

function dibujoboton() {
  fill(255);
  textSize(20);
  textAlign(CENTER);

  // Botón "MusicaON"
  fill(8, 134, 24);
  rect(0, 0, 100, 30);
  fill(255);
  text(botones[1], 0 + 50, 0 + 15);

  // Botón "MusicaOff"
  fill(134, 8, 12);
  rect(0, 50, 100, 30);
  fill(255);
  text(botones[2], 0 + 50, 50 + 15);

  // Botón Instrucciones
  textAlign(LEFT);
  fill(134, 120, 8);
  rect(0, 430, 200, 30);  
  fill(255);
  text(botones[4], 0 + 20, 430 + 15);  
}

// Función que dibuja los botones cuando el juego está en el estado de instrucciones
function asignaciondeboton() {
  if (juegoIniciado == 2) {
    fill(255);
    textSize(20);
    textAlign(CENTER);

    // Botón "MusicaON"
    fill(8, 134, 24);
    rect(0, 0, 100, 30);
    fill(255);
    text(botones[1], 0 + 50, 0 + 15);

    // Botón "MusicaOff"
    fill(134, 8, 12);
    rect(0, 50, 100, 30);
    fill(255);
    text(botones[2], 0 + 50, 50 + 15);

    // Botón para regresar 
    push();
    textAlign(LEFT);
    fill(134, 120, 8);
    rect(0, 430, 100, 30);  
    fill(255);
    text(botones[5], 0 + 20, 430 + 15);  
    pop();
  }
}

// Función de texto de instrucciones
function texto() {
  fill(0);
  textSize(18);
  textAlign(CENTER);

  text("Cae, cae y sigue cayendo… ¡Alicia está en caída libre!", width / 2, 200);
  text("Usa las flechas del teclado para mover a Alicia de izquierda a derecha mientras desciende por la madriguera.", width / 2, 220);
  text("¡Evita los cachivaches! En su viaje al País de las Maravillas,", width / 2, 240);
  text("Alicia pasa flotando al lado de cosas extrañas y fantásticas.", width / 2, 260);
  text("Desde relojes flotantes hasta copas de té que intentan hacerla tropezar,", width / 2, 280);
  text("¡esquiva todos estos obstáculos o perderás una vida!", width / 2, 300);

  text("¡Cuidado con tus vidas! Alicia tiene 3 vidas.", width / 2, 320);
  text("Si toca un objeto, pierde una. Cuando las tres vidas desaparecen,", width / 2, 340);
  text("¡se acabó el sueño! La madriguera la expulsa, y Alicia se pierde en un limbo de teteras y espejos...", width / 2, 360);
  text("¡Nadie quiere eso!", width / 2, 380);

  text("¡Objetivo Final! Esquiva y cae hábilmente dudrante 1 minuto hasta el final de la madriguera.", width / 2, 400);
  text("Si lo logras sin perder todas tus vidas, ¡Alicia llega sana y salva al País de las Maravillas!", width / 2, 420);
}

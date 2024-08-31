// Función que retorna un valor (distancia entre dos puntos)
function calcularDistancia( x1,  y1,  x2,  y2) {
  return dist(x1, y1, x2, y2);
}

// Función que retorna un valor (tamaño basado en la distancia)
function calcularTamaño( distancia) {
  return distancia * 25 / dist(600, 200, width, height);
}

// Funcion que no retorna un valor (for anidado dibujando las ellipses y las distorcion del tamaño)
function dibujoydistorcion( modX,  modY) {
  for (let x = 0; x < width / 2; x++) {
    for (let y = 0; y < height; y++) {
      let distan = calcularDistancia(centerX, centerY, 400 + x * modX, y * modY);
      let tamaño = calcularTamaño(distan);
      noStroke();
      fill(255);
      ellipse(400 + x * modX, y * modY, tamaño, tamaño);
    }
  }
}

var botonFut = document.getElementById("botonFutbol");
var botonBasq = document.getElementById("botonBasquetball");
var botonTen = document.getElementById("botonTennis");
var canchaFut = document.getElementById("futbol");
var canchaBasq = document.getElementById("botonBasquetball");
var canchaTen = document.getElementById("tennis");

botonFut.addEventListener("click",mostrarFut);
botonBasq.addEventListener("click", detectarBoton);
botonTen.addEventListener("click", detectarBoton);

function mostrarFut () {
  canchaFut.display = "block";
};

function ocultarCancha(cancha) {
};

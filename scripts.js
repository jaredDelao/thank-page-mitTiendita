const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const btn = document.getElementById('btn');

window.addEventListener("load", (event) => {
  console.log(params );
  console.log("page is fully loaded");

  if (params && params.nbResponse === 'Aprobado') {
    //   Mostrar landing aprobado
    // titulo.innerText = params.nbResponse;
    // descripcion.innerText = params.nb_error;
} else {
    //   Mostrar landing error
    titulo.innerText = "¡Oops!";
    titulo.style.color = "#CB4335";
    descripcion.innerText = 'Ha ocurrido un error al procesar el pago: ' + params.nb_error;
    btn.innerText = "Regresar";
    btn.style.backgroundColor = '#CB4335';
  }
});

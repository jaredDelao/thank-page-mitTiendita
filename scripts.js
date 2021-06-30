const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');

window.addEventListener("load", (event) => {
  console.log(params );
  console.log("page is fully loaded");

  if (params && params.nbResponse === 'Aprobado') {
    //   Mostrar landing aprobado
    // titulo.innerText = params.nbResponse;
    // descripcion.innerText = params.nb_error;
} else {
    //   Mostrar landing error
    // titulo.innerText = params.nbResponse;
    // descripcion.innerText = params.nb_error;
  }
});

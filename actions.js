window.addEventListener("load", function () {
  const mayor = confirm("⚠️ ¿Sos mayor de edad? ⚠️");

  if (!mayor) {
    alert("No podés ingresar.");
    window.location.href = "https://www.google.com";
  }
});

let disclaimerMostrado = false;

window.addEventListener("scroll", function () {
  if (!disclaimerMostrado) {
    document.getElementById("disclaimer").style.display = "block";
    disclaimerMostrado = true;
  }
});

function aceptarDisclaimer() {
  document.getElementById("disclaimer").style.display = "none";
}






let paginasData = [];

fetch("paginas.json")
  .then(res => res.json())
  .then(paginas => {
    paginasData = paginas;
    mostrar(paginasData);
  })
  .catch(err => console.error("Error al cargar JSON:", err));

  
function mostrar(lista) {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  lista.forEach(pagina => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${pagina.nombre}</h2>
      <p>${pagina.descripcion}</p>
      <img src="${pagina.imagen}" alt="${pagina.nombre}" width="200">
      <p><a href="${pagina.link}" target="_blank">Visitar</a></p>
    `;
    contenedor.appendChild(div);
  });
}


function filtrar(descripcion) {
  if (descripcion === "todos") {
    mostrar(paginasData);
  } else {
    const filtrados = paginasData.filter(p => p.descripcion === descripcion);
    mostrar(filtrados);
  }
}
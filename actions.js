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

fetch("paginas.json")
  .then(res => res.json())
  .then(paginas => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    paginas.forEach(pagina => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${pagina.nombre}</h2>
        <p>Descripción: ${pagina.descripcion}</p>
        <img src="${pagina.imagen}" alt="${pagina.nombre}" width="200">
        <p><a href="${pagina.link}" target="_blank">Visitar</a></p>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => console.error("Error al cargar JSON:", err));
window.addEventListener("load", function () {
  const mayor = confirm("⚠️ ¿Sos mayor de edad? ⚠️");

  if (mayor) {
    alert("Bienvenido.");
  } else {
    alert("No podés ingresar.");
    window.location.href = "https://www.google.com";
  }
});

let likes = 0;
function toggleLike() {
  likes++;
  document.getElementById('like-count').textContent = likes;

  const sonido = document.getElementById('sonidoboton');
  sonido.currentTime = 0;
  sonido.volume = 0.1;
  sonido.play();
  
}

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
window.addEventListener("load", function () {
  const acepto = confirm("⚠️¿Eres mayor de edad?⚠️");

  if (!acepto) {
    window.location.href = "https://google.com";
  }
});

let likes = 0;
function toggleLike() {
  likes++;
  document.getElementById('like-count').textContent = likes;

  const sonido = document.getElementById('sonidoboton');
  sonido.currentTime = 0;
  sonido.play();
}

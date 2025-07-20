window.addEventListener("load", function () {
  const acepto = confirm("⚠️Estas por acceder a contenido ilegal. ¿Aceptas las consecuencias?⚠️");

  if (!acepto) {
    window.location.href = "https://google.com";
  }
});

let likes = 0;
function toggleLike() {
  likes++;
  document.getElementById('like-count').textContent = likes;
}
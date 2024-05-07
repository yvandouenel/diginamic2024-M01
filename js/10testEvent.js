const h1 = document.querySelector("h1");
console.log(`h1`, h1);

h1.onclick = function (event) {
  // le titre change de couleur
  h1.style.color = (h1.style.color === "red") ? h1.style.color = "green" : h1.style.color = "red";
}

const a = document.querySelector("a");
a.onclick = function (event) {
  event.preventDefault();
  console.log(`event.target`, event.target);
  // le lien change de couleur
  a.style.color = (a.style.color === "red") ? a.style.color = "green" : a.style.color = "red";
}
